import './Drawer.scss';

export default function Drawer() {
    return (
        <div className='drawer-wrapper'>
            <div className="my-7 mx-5 flex flex-col">
                <h1 className='text-2xl font-bold mb-7'>Корзина</h1>
                    <div className='flex flex-col gap-3'>
                        <div className='border rounded-2xl relative'>
                            <div className="flex items-center justify-between gap-3 py-5 px-3">
                                <img src="./public/sneakers/sneakers-1.jpg" width={70} alt="sneakers" />
                                <div>
                                    <p className='text-ms leading-none mb-3'>Мужские Кроссовки Nike Air Max 270</p>
                                    <p className='font-bold'>12 999 руб.</p>
                                </div>
                                <button className='absolute bottom-3 right-3'>
                                    <img src="./public/sneaker-dell.svg" alt="dell" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-7 flex flex-col gap-5'>
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
    )
}