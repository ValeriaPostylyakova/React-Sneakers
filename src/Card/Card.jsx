import { useContext, useState } from 'react';
import './Card.scss';
import { AppContext } from '../App';

export default function Card ( 
    {id, 
    title, 
    price, 
    imageUrl,
    onClickPlus, 
    onClickFavorite, 
    favorited = false
}
 ) {
    const [isFavorite, setIsFavorite] = useState(favorited);
    const { getAddedItems } = useContext(AppContext);

    const clickAdded = () => {
        onClickPlus({ id, title, price, imageUrl });
    }

    const clickFavorite = () => {
        setIsFavorite(!isFavorite);
        onClickFavorite({ id, title, price, imageUrl });
    }

    return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__images'>
                    <div className='card__img1'>
                        <img src={imageUrl} className='card__img-sneaker' alt="sneaker" />
                    </div>
                    <button
                    onClick={clickFavorite}
                    className='card__favorite-btn'
                    title='Добавить в закладки'
                    >
                    <img src={isFavorite ? "./src/assets/favorite2.svg" : "./src/assets/favorite1.svg"} 
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
                        src={getAddedItems(title) ? './src/assets/isAdded2.svg' : './src/assets/isAdded1.svg'}/>
                    </button>
                </div>
            </div>
        </div>
    )
}