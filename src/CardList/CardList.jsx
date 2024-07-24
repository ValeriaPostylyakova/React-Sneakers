import { useContext, useState } from 'react';
import Card from '../Card/Card';
import { Skeleton } from '../Skeleton';
import './CardList.scss';
import { AppContext } from '../App';

export default function CardList( {data, drawerCard, isLoading, searchValue, onClickPlus, onClickFavorite} ) {
    const { getAddedItems } = useContext(AppContext);

    return (
        isLoading ? (
        <div className="wrapper-skeleton">
            <div className="container-skeleton">
                <Skeleton/>
                <Skeleton/>
            </div>
            <div className="container-skeleton">
                <Skeleton/>
                <Skeleton/>
            </div>
            <div className="container-skeleton">
                <Skeleton/>
                <Skeleton/>
            </div>
            <div className="container-skeleton">
                <Skeleton/>
                <Skeleton/>
            </div>
        </div>
    ) : (
            <div className="container">
                {data.filter((obj) => {
                    const title = obj.title.toLowerCase();
                    return title.includes(searchValue.toLowerCase());
                })
                .map((obj, index) => (
                    <Card
                    key={index}
                    {...obj}
                    onClickPlus={onClickPlus}
                    onClickFavorite={onClickFavorite}
                    added={getAddedItems(obj.title)}
                    />
                ))}
            </div>
        )
    )
}