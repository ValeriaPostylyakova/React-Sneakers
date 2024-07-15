import Card from '../Card/Card';
import { Skeleton } from '../Skeleton';
import './CardList.scss';

export default function CardList( {data, isLoading, searchValue} ) {
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
                .map((obj) => (
                    <Card
                    key={obj.id}
                    {...obj}
                    />
                ))}
            </div>
        )
    )
}