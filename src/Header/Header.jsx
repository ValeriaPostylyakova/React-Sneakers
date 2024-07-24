import { useState } from 'react';
import Menu from '../BurgerMenu/Menu';
import './Header.scss';
import { Link, Outlet } from 'react-router-dom';

export default function Header( {drawerOpen} ) {
    const [menuActive, setMenuActive] = useState(false);


    const items = [
        {id: 0, value: '0 руб.', href: '/', icon: './src/assets/drawer.svg'},
        {id: 1, value: 'Закладки', href: '/', icon: './src/assets/favorite.svg'},
        {id: 2, value: 'Профиль', href: '/', icon: './src/assets/user.svg'}
    ]

    return (
        <>
        <header className="border-b">
            <div className="w-11/12 m-auto flex justify-between items-center py-11">
                <Link to='/React-Sneakers/'>
                    <div className="flex items-center gap-3">
                        <img src="./src/assets/logo.svg" alt="logo" />
                        <div className='title'>
                            <h1 className="text-lg uppercase font-bold">REACT SNEAKERS</h1>
                            <h3 className="opacity-70">Магазин лучших кроссовок</h3>
                        </div>
                    </div>
                </Link>
                <ul>
                    <li>
                        <button onClick={drawerOpen} className="flex items-center gap-3">
                            <img src="./src/assets/drawer.svg"  alt="drawer"/>
                                <p className="font-bold opacity-70">0 руб.</p>
                        </button>
                    </li>
                    <li>
                        <Link to="favorite">
                        <button className="flex items-center gap-3">
                            <img src="./src/assets/favorite.svg" alt="favorite"/>
                            <p className="opacity-70">Закладки</p>
                        </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="purchases">
                            <button className="flex items-center gap-3">
                                <img src='./src/assets/user.svg' alt="user"/>
                                <p className="opacity-70">Мои покупки</p>
                            </button>
                        </Link>
                    </li>
                </ul>
                <div className="burger" onClick={() => setMenuActive(!menuActive)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Menu active={menuActive} setActive={setMenuActive} items={items}/>
            </div>
        </header>
        <Outlet/>
        </>
    )
}