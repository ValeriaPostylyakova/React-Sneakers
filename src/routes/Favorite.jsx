import { useContext } from "react";
import Card from "../Card/Card";
import { AppContext } from "../App";

export default function Favorite( { onClickPlus, onClickFavorite } ) {
    const { favorites } = useContext(AppContext);

    return (
        <>

        {favorites.length > 0 ? (
                <div className="h-full mx-10 pb-10">
                    <div className="flex items-center gap-5 w-full my-10">
                        <button>
                            <a href="/"><img src="./src/assets/favorite-arrow.svg" alt="arrow" /></a>
                        </button>
                        <h1 className="text-2xl font-bold">Мои закладки</h1>
                    </div>
                <div className='grid grid-cols-4 gap-10'>
                        {
                            favorites.map((item, index) => (
                                <Card 
                                key={index}
                                {...item}
                                favorited={true}
                                onClickPlus={onClickPlus}
                                onClickFavorite={onClickFavorite}
                                />
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
                <a href="/">
                    <div className='flex items-center justify-center gap-5'>
                        <span className='rotate-180'>
                            <img src="./src/assets/btn-arrow.svg" alt="arrow" />
                        </span>
                        <p className='text-white font-medium mr-10'>Вернуться назад</p>
                    </div>
                </a>
            </button>
            </div>
        </div>
        )}
        
        </>
    )
}