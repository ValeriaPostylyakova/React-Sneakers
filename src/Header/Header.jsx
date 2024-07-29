import { useContext, useState } from 'react';
import { AppContext } from '../App';
import Menu from '../BurgerMenu/Menu';
import './Header.scss';
import { Link, Outlet } from 'react-router-dom';
import { useDrawerPrice } from '../hooks/useDrawerPrice';

import headerLogo from "/src/assets/logo.svg?url"
import drawer from "/src/assets/Drawer.svg?url"
import favorite from "/src/assets/favorite.svg?url"
import user from "/src/assets/user.svg?url"

export default function Header() {

    const [menuActive, setMenuActive] = useState(false);
    const { DrawerOpen } = useContext(AppContext);
    const { totalPrice } = useDrawerPrice();
    

    return (
        <>
        <header className="border-b">
            <div className="w-11/12 m-auto flex justify-between items-center py-11">
                <Link to='/React-Sneakers/home'>
                    <div className="flex items-center gap-3">
                        <img src={headerLogo} alt="logo" />
                        <div className='title'>
                            <h1 className="text-lg uppercase font-bold">REACT SNEAKERS</h1>
                            <h3 className="opacity-70">Магазин лучших кроссовок</h3>
                        </div>
                    </div>
                </Link>
                <ul>
                    <li>
                        <button onClick={DrawerOpen} className="flex items-center gap-3">
                            <img src={drawer}  alt="drawer"/>
                                <p className="font-bold opacity-70">{totalPrice} руб.</p>
                        </button>
                    </li>
                    <li>
                        <Link to="favorite">
                        <button className="flex items-center gap-3">
                            <img src={favorite} alt="favorite"/>
                            <p className="opacity-70">Закладки</p>
                        </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="orders">
                            <button className="flex items-center gap-3">
                                <img src={user} alt="user"/>
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
                <Menu active={menuActive} setActive={setMenuActive} DrawerOpen={DrawerOpen}/>
            </div>
        </header>
        <Outlet/>
        </>
    )
}