import './Drawer.scss';
import DrawerCard from './DrawerCard';

export default function Drawer ( {drawerOpen, setDrawerOpen, items = [], DeleteDrawerCard} ) {
    return (
        <div>
          <div className={drawerOpen ? 'drawer__blur' : ''}></div>
          <div className={drawerOpen ? 'drawer-wrapper open' : 'drawer-wrapper'}>
            <div className="my-7 mx-5 flex flex-col">
                <div className='mb-7 flex items-center w-full justify-between cursor-pointer'>
                    <h1 className='text-2xl font-bold'>Корзина</h1>
                    <img onClick={() => setDrawerOpen(false)} width={20} src="./public/DrawerClose.svg" />
                </div>
                    <div className='flex flex-col gap-3'>
                        {
                            items.map((obj) => (
                                <DrawerCard
                                DeleteDrawerCard={DeleteDrawerCard}
                                key={obj.id}
                                {...obj}
                                />
                            ))
                        }
                    </div>
                    <div className='absolute bottom-4 mt-7 flex flex-col gap-5'>
                        <div className='flex items-end justify-between'>
                            <p>Итого: </p>
                            <span className='span-border'></span>
                            <p className='font-medium'>21 498 руб.</p>
                        </div>
                        <div className='flex items-end justify-between'>
                            <p>Налог 5%:</p>
                            <span className='span-border'></span>
                            <p className='font-medium'>1074 руб.</p>
                        </div>
                        <button className='w-full h-14 rounded-2xl bg-lime-500 opacity-80 transition hover:opacity-100'>
                            <div className='flex items-center justify-center'>
                                <p className='text-white font-medium mr-10'>Оформить заказ</p>
                                <span>
                                    <img src="./public/btn-arrow.svg" alt="arrow" />
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}