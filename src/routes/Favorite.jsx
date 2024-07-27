import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

import Card from "../Card/Card";
import FavoriteCard from "../FavoriteCard";

export default function Favorite() {
    const { favorites, onClickPlus, onClickFavorite } = useContext(AppContext);
    return (
        <>

        {favorites.length > 0 ? (
                <div className="h-full mx-10 pb-10">
                    <div className="flex items-center gap-5 w-full my-10">
                        <button>
                            <Link to="/React-Sneakers/"><img src="./src/assets/favorite-arrow.svg" alt="arrow" /></Link>
                        </button>
                        <h1 className="text-2xl font-bold">Мои закладки</h1>
                    </div>
                <div className='grid grid-cols-4 gap-10'>
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
            <div className="grid place-items-center h-screen w-full">
             <div className="flex flex-col items-center gap-1">
                <img className="mb-6" width={70} src="./src/assets/favorite-icon.png" alt="icon" />
                <h1 className="text-2xl font-bold">Закладок нет :(</h1>
                <p className="mb-14 text-slate-500">Вы ничего не добавляли в закладки</p>
                <button className='w-full h-14 rounded-2xl bg-lime-500 opacity-80 transition hover:opacity-100'>
                <Link to="/React-Sneakers/">
                    <div className='flex items-center justify-center gap-5'>
                        <span className='rotate-180'>
                            <img src="./src/assets/btn-arrow.svg" alt="arrow" />
                        </span>
                        <p className='text-white font-medium mr-10'>Вернуться назад</p>
                    </div>
                </Link>
            </button>
            </div>
        </div>
        )}
        
        </>
    )
}