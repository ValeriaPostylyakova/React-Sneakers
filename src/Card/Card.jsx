import { useState } from 'react';
import './Card.scss';

export default function Card ( {id, title, price, imageUrl} ) {
    const [favorite, setFavorive] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__images'>
                    <div className='card__img1'>
                        <img src={imageUrl} alt="sneaker" />
                    </div>
                    <button className='card__favorite-btn' onClick={() => setFavorive(!favorite)}>
                    <img src={favorite ? "./public/favorite2.svg" : "./public/favorite1.svg"} alt="favorite" />
                    </button>
                </div>
                <p className='text-sm font-medium'>{title}</p>
                <div className='w-full flex justify-between items-center mt-5'>
                    <div className='text-start'>
                        <p className='uppercase text-xs text-slate-400'>Цена:</p>
                        <p className='font-bold text-sm'>{price}руб.</p>
                    </div>
                    <button onClick={() => setIsAdded(!isAdded)}>
                        <img src={isAdded ? "./public/isAdded2.svg" : "./public/isAdded1.svg"} />
                    </button>
                </div>
            </div>
        </div>
    )
}