import './Card.scss';

export default function Card () {
    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__images'>
                    <div className='card__img1'>
                        <img src="./public/sneaker.jpg" alt="sneaker" />
                    </div>
                    <img className='card__favorite' src="./public/favorite2.svg" alt="favorite" />
                </div>
                <p className='text-sm font-medium'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className='w-full flex justify-between items-center mt-5'>
                    <div className='text-start'>
                        <p className='uppercase text-xs text-slate-400'>Цена:</p>
                        <p className='font-bold text-sm'>12 999 руб.</p>
                    </div>
                    <img src="./public/isAdded1.svg" />
                </div>
            </div>
        </div>
    )
}