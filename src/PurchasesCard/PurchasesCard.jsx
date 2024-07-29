import './PurchasesCard.scss';

export default function PurchasesCard({ imageUrl, title, price }) {
  return (
    <div className='card-purchases'>
            <div className='card__container-purchases'>
                <div className='card__images-purchases'>
                    <div className='card__img-purchases'>
                        <img src={`.${imageUrl}`} className='card__img-sneaker-purchases' alt="sneaker" />
                    </div>
                </div>
                <p className='card__title-purchases'>{title}</p>
                <div className='w-full flex justify-between items-center mt-5'>
                    <div className='text-start-purchases'>
                        <p className='card__text-price-purchases'>Цена:</p>
                        <p className='card__text-purchases'>{price} руб.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
