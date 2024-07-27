export default function DrawerCard ( {id, title, price, imageUrl, DeleteCard} ) {
    return (
        <div className='border rounded-2xl relative hover:shadow cursor-default'>
            <div className="flex items-center justify-between gap-3 py-5 px-3">
                <img src={imageUrl} width={70} alt="sneakers" />
                <div>
                    <p className='text-ms leading-none mb-3'>{title}</p>
                    <p className='font-bold'>{price} pуб.</p>
                </div>
                <button onClick={() => DeleteCard(id)} className='absolute bottom-3 right-3'>
                    <img src="./src/assets/sneaker-dell.svg" alt="dell" />
                 </button>
            </div>
        </div>
    )
}