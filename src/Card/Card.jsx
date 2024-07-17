import { useState } from 'react';
import './Card.scss';

export default function Card ( {id, title, price, imageUrl, onClickPlus} ) {

    const [isAdded, setIsAdded] = useState(false);

    const clickAdded = () => {
        setIsAdded(!isAdded);
        onClickPlus({ title, price, imageUrl });
    }

    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__images'>
                    <div className='card__img1'>
                        <img src={imageUrl} className='card__img-sneaker' alt="sneaker" />
                    </div>
                    <button 
                    className='card__favorite-btn'
                    title='Добавить в закладки'
                    >
                    <img src={"./public/favorite1.svg"} 
                    alt="favorite" />
                    </button>
                </div>
                <p className='card__title'>{title}</p>
                <div className='w-full flex justify-between items-center mt-5'>
                    <div className='text-start'>
                        <p className='card__text-price'>Цена:</p>
                        <p className='card__text'>{price}руб.</p>
                    </div>
                    <button 
                    title='Добавить в корзину' 
                    className='card__button-add'
                    onClick={clickAdded}>
                        <img 
                        src={isAdded ? './public/isAdded2.svg' : './public/isAdded1.svg'}/>
                    </button>
                </div>
            </div>
        </div>
    )
}