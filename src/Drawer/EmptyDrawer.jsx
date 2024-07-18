export default function EmptyDrawer( {setDrawerOpen} ) {
    return (
        <div className='px-4 flex flex-col items-center justify-center gap-10 h-screen'>
            <img src="./src/assets/emptyDrawer.png" alt="drawerImg" className='mb-3' />
            <div className='text-center leading-tight'>
                <h1 className='text-xl font-bold mb-2'>Корзина пустая</h1>
                <p className='text-slate-500'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            </div>
            <button onClick={() => setDrawerOpen(false)} className='w-full h-14 rounded-2xl bg-lime-500 opacity-80 transition hover:opacity-100'>
                <div className='flex items-center justify-center gap-5'>
                    <span className='rotate-180'>
                        <img src="./src/assets/btn-arrow.svg" alt="arrow" />
                    </span>
                    <p className='text-white font-medium mr-10'>Вернуться назад</p>
                </div>
            </button>
        </div>
    )
}