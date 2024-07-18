import DrawerCard from './DrawerCard';
import DecoratedDrawer from './DecoratedDrawer';
import { useState } from 'react';

export default function DrawerList ( {items, DeleteCard, setDrawerOpen} ) {
    const [decorated, setDecorated] = useState(false);
    
    return (
        <>
            {
                decorated ? (
                    <DecoratedDrawer setDrawerOpen={setDrawerOpen}/>
                ) : (
                    <>
                         <div className='flex flex-col gap-3'>
                {items.map((obj, index) => (
                    <DrawerCard
                        key={index}
                        {...obj}
                        DeleteCard={DeleteCard} />
                ))}

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
                    <button onClick={() => setDecorated(true)} className='w-full h-14 rounded-2xl bg-lime-500 opacity-80 transition hover:opacity-100'>
                        <div className='flex items-center justify-center'>
                            <p className='text-white font-medium mr-10'>Оформить заказ</p>
                            <span>
                                <img src="./src/assets/btn-arrow.svg" alt="arrow" />
                            </span>
                        </div>
                    </button>
                </div>
                </>
                )
            }
        </>
    )
}