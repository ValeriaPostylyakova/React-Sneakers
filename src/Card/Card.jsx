import { useContext, useState } from 'react';
import './Card.scss';
import { AppContext } from '../App';


export default function Card ( 
    {id,
    parentId, 
    title, 
    price, 
    imageUrl,
    onClickPlus, 
    onClickFavorite,
}
 ) {

    const { getAddedItems, getFavoriteItems } = useContext(AppContext);
    const obj = { id, parentId: id, title, price, imageUrl };

    const clickAdded = () => {
        onClickPlus(obj);
    }

    const clickFavorite = () => {
        onClickFavorite(obj);

    }

    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__images'>
                    <div className='card__img1'>
                        <img src={imageUrl} className='card__img-sneaker' alt="sneaker" />
                    </div>
                    {onClickFavorite && (
                        <button
                        onClick={clickFavorite}
                        className='card__favorite-btn'
                        title='Добавить в закладки'
                        >
                        <img src={getFavoriteItems(id) ? "./src/assets/favorite2.svg" : "./src/assets/favorite1.svg"} 
                        alt="favorite" />
                        </button>
                    )}
                </div>
                <p className='card__title'>{title}</p>
                <div className='w-full flex justify-between items-center mt-5'>
                    <div className='text-start'>
                        <p className='card__text-price'>Цена:</p>
                        <p className='card__text'>{price}руб.</p>
                    </div>
                    {onClickPlus && (
                        <button 
                        title='Добавить в корзину' 
                        className='card__button-add'
                        onClick={clickAdded}>
                            <img 
                            src={getAddedItems(id) ? './src/assets/isAdded2.svg' : './src/assets/isAdded1.svg'}/>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}