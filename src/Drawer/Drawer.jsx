import './Drawer.scss';
import axios from 'axios';
import { useContext, useState } from 'react';
import { AppContext } from '../App';

import DrawerInfo from './DrawerInfo';
import DrawerSneakers from './DrawerSneakers';

import drawerClose from '/src/assets/DrawerClose.svg?url';


export default function Drawer ( {drawerOpen, setDrawerOpen, items = [], DeleteCard} ) {
    const delay = () => new Promise((res) => setTimeout(res, 1000));
    const { drawerCard, setDrawerCard } = useContext(AppContext);
    const [drawerComlete, setDrawerComlete] = useState(false);
    const [orderId, setOrderId] = useState('');

    const onClickOrder = async () => {
        try {
            const { data } = await axios.post('https://3ad519bdc442b341.mokky.dev/orders', {
                items: drawerCard
            });
            setOrderId(data.id);
            setDrawerComlete(true);
            setDrawerCard([]);
            for (let i = 0; i < drawerCard.length; i++) {
                const item = drawerCard[i];
                await axios.delete(`https://3ad519bdc442b341.mokky.dev/DrawerCard/${item.id}`);
                await delay();
            }
        }
        catch(err) {
            alert('Не удалось создать заказ');
            console.log(err);
        }
    }

    return (
        <div>
          <div onClick={() => setDrawerOpen(false)} className={drawerOpen ? 'drawer__blur' : ''}></div>
          <div className={drawerOpen ? 'drawer-wrapper open' : 'drawer-wrapper'}>
            <div className="mt-8 pb-3 h-full mx-5 flex flex-col items-center">
                <div className='mb-7 flex items-center w-full justify-between cursor-pointer'>
                    <h1 className='text-2xl font-bold'>Корзина</h1>
                    <img onClick={() => setDrawerOpen(false)} width={20} src={drawerClose} />
                </div>
                {
                    items.length > 0 ? (
                            <DrawerSneakers 
                            items={items} 
                            DeleteCard={DeleteCard}
                            onClickOrder={onClickOrder}
                            />
                    ) : (
                        <DrawerInfo 
                        title={drawerComlete ? "Заказ оформлен!" : "Корзина пустая"}
                        decription={drawerComlete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы пару кроссовок, чтобы сделать заказ"}
                        images={drawerComlete ? "./src/assets/decoratedDrawer.png?url" : "./src/assets/emptyDrawer.png?url"}/>
                    )
                }
                </div>
              </div>
            </div>
    )
}