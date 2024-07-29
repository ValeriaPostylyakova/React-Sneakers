import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

import './FavoritePage.scss';
import FavoriteCard from "../FavoriteCard";

import favoriteIcon from '/src/assets/favorite-icon.png?url';
import arrow from '/src/assets/btn-arrow.svg?url';

export default function Favorite() {
    const { favorites, onClickPlus } = useContext(AppContext);
    return (
        <>

        {favorites.length > 0 ? (
                <div className="favorite">
                    <div className="flex items-center gap-5 w-full my-10">
                        <button>
                            <Link to="/React-Sneakers/"><img src="./src/assets/favorite-arrow.svg" alt="arrow" /></Link>
                        </button>
                        <h1>Мои закладки</h1>
                    </div>
                <div className='favorite-card__container'>
                        {
                            favorites.map((item, index) => (
                                <FavoriteCard 
                                key={index}
                                {...item}
                                onClickPlus={onClickPlus}/>
                            ))
                        }
                    </div>
                </div>
        ) : (
            <div className="empty-favorite">
             <div className="empty-favorite__container">
                <img className="empty-favorite__img" width={70} src={favoriteIcon} alt="icon" />
                <h1>Закладок нет :(</h1>
                <p>Вы ничего не добавляли в закладки</p>
                <button>
                <Link to="/React-Sneakers/home">
                    <div>
                        <span>
                            <img src={arrow} alt="arrow" />
                        </span>
                        <p>Вернуться назад</p>
                    </div>
                </Link>
            </button>
            </div>
        </div>
        )}
        
        </>
    )
}