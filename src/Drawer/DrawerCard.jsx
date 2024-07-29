import imgDell from '/src/assets/sneaker-dell.svg?url';

export default function DrawerCard ( {id, title, price, imageUrl, DeleteCard} ) {
    const imgUrl = new URL(`/src/assets/${imageUrl}.jpg`, import.meta.url).href;
    
    return (
        <div className='border rounded-2xl relative hover:shadow cursor-default'>
            <div className="flex items-center justify-between gap-3 py-5 px-3">
                <img src={imgUrl} width={70} alt="sneakers" />
                <div>
                    <p className='text-ms leading-none mb-3'>{title}</p>
                    <p className='font-bold'>{price} pуб.</p>
                </div>
                <button onClick={() => DeleteCard(id)} className='absolute bottom-3 right-3'>
                    <img src={imgDell} alt="dell" />
                 </button>
            </div>
        </div>
    )
}