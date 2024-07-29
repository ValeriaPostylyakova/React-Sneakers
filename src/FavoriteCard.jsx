import { useContext, useState } from "react"
import { AppContext } from "./App";

import Favorite2 from "../src/assets/favorite2.svg?url";
import Favorite1 from "../src/assets/favorite1.svg?url";

function FavoriteCard({id, imageUrl, title, price }) {
    const { DeleteFavorite } = useContext(AppContext);
    const [favorite, setFavorite] = useState(true);

    const onClickFavorite = () => {
        setFavorite(false);
        DeleteFavorite(id);
    }

  return (
        <div className='card'>
            <div className='card__container'>
                <div className='card__images'>
                    <div className='card__img1'>
                        <img src={`.${imageUrl}`} className='card__img-sneaker' alt="sneaker" />
                    </div>
                     <button onClick={onClickFavorite}
                        className='card__favorite-btn'
                        title='Добавить в закладки'
                        >
                        <img src={favorite ? Favorite2 : Favorite1} 
                        alt="favorite"/> 
                    </button>
                </div>
                <p className='card__title'>{title}</p>
                <div className='w-full flex justify-between items-center mt-5'>
                    <div className='text-start'>
                        <p className='card__text-price'>Цена:</p>
                        <p className='card__text'>{price}руб.</p>
                    </div>
                </div>
            </div>
         </div>
  )
}

export default FavoriteCard