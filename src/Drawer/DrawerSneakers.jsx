import { useDrawerPrice } from '../hooks/useDrawerPrice';
import DrawerCard from './DrawerCard';
import './DrawerSneakers.scss';

import arrow from '/src/assets/btn-arrow.svg?url';

export default function DrawerSneakers ( {items, DeleteCard, onClickOrder} ) {
    
    const { totalPrice, summTax, totalSumm } = useDrawerPrice();

    return (
        <div className='drawer-container'>
            <div className='flex flex-col gap-3 h-3/5 overflow-auto'>
                {items.map((obj, index) => (
                <DrawerCard
                    key={index}
                    {...obj}
                    DeleteCard={DeleteCard} />
                ))}
            </div>
        <div className='flex flex-col gap-3 self-end'>
        <div className='flex items-end justify-between mt-2'>
                <p>Цена: </p>
                <span className='span-border'></span>
                <p className='font-medium'>{totalPrice} руб.</p>
            </div>
            <div className='flex items-end justify-between'>
                <p>Налог 5%:</p>
                <span className='span-border'></span>
                <p className='font-medium'>{summTax} руб.</p>
            </div>
            <div className='flex items-end justify-between'>
                <p>Итого:</p>
                <span className='span-border'></span>
                <p className='font-medium'>{totalSumm} руб.</p>
            </div>
            <button 
            onClick={onClickOrder}  
            className='w-full h-12 rounded-2xl bg-lime-500 opacity-80 transition hover:bg-gray-400'>
                <div className='flex items-center justify-center'>
                    <p className='text-white font-medium mr-10'>Оформить заказ</p>
                    <span>
                        <img src={arrow} alt="arrow" />
                    </span>
                </div>
            </button>
        </div>
        </div>
        )
    }