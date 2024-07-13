import './Menu.scss';

export default function Menu({items, active, setActive}) {
    return (
        <div className={active ? 'burger-menu active' : 'burger-menu'}>
            <div className="burger-menu__container">
                <button onClick={() => setActive(false)}>
                    <img src="./public/close.png" alt="close" />
                </button>
                <ul className='burger-menu__list'>
                {
                    items.map((item) => (
                        <li key={item.id} className='burger-menu__item'>
                            {item.value}
                            <a href={item.href}></a>
                            <img src={item.icon} alt="icon" />
                        </li>
                    ))
                }
            </ul>
            </div>
        </div>
    )
}