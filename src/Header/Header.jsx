import { useState } from 'react';
import Menu from '../BurgerMenu/Menu';
import './Header.scss';

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);


    const items = [
        {id: 0, value: '1250 руб.', href: '/', icon: './public/Drawer.svg'},
        {id: 1, value: 'Закладки', href: '/', icon: './public/favorite.svg'},
        {id: 2, value: 'Профиль', href: '/', icon: './public/user.svg'}
    ]

    return (
        <header className="border-b mb-14">
            <div className="w-11/12 m-auto flex justify-between items-center py-11">
                <a className='logo display-block' href='/'>
                    <div className="flex items-center gap-3">
                        <img src="./public/logo.svg" alt="logo" />
                        <div className='title'>
                            <h1 className="text-lg uppercase font-bold">REACT SNEAKERS</h1>
                            <h3 className="opacity-70">Магазин лучших кроссовок</h3>
                        </div>
                    </div>
                </a>
                <ul>
                    <li>
                        <a href="/" className="flex items-center gap-3">
                            <img src="./public/Drawer.svg" alt="drawer"/>
                            <p className="font-bold opacity-70">1250 руб.</p>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex items-center gap-3">
                            <img src="./public/favorite.svg" alt="drawer"/>
                            <p className="opacity-70">Закладки</p>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="flex items-center gap-3">
                            <img src="./public/user.svg" alt="user"/>
                            <p className="opacity-70">Мои покупки</p>
                        </a>
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
    )
}