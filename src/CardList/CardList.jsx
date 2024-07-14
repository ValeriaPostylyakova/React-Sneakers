import Card from '../Card/Card';
import { Skeleton } from '../Skeleton';
import './CardList.scss';

export default function CardList( {data, isLoading} ) {
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
        </div>
    ) : (
            <div className="container">
                {data.map((obj) => (
                    <Card
                    key={obj.id}
                    {...obj}
                    />
                ))}
            </div>
        )
    )
}