

import './Menu.scss';
import DrawerClose from '/src/assets/DrawerClose.svg?url'

import headerLogo from "/src/assets/logo.svg?url"
import drawer from "/src/assets/Drawer.svg?url"
import favorite from "/src/assets/favorite.svg?url"
import user from "/src/assets/user.svg?url"
import { Link } from 'react-router-dom';
import { useDrawerPrice } from '../hooks/useDrawerPrice';

export default function Menu({active, setActive, DrawerOpen}) {
    const { totalPrice } = useDrawerPrice();

    return (
        <div onClick={() => setActive(false)} className={active ? 'burger-menu active' : 'burger-menu'}>
            <div className={active ? 'burger-menu__blur' : ''}></div>
            <div className="burger-menu__container">
                <div className="flex items-center mx-3 my-2">
                    <h1 className='text-xl font-bold ml-2'>Meню</h1>
                    <button onClick={() => setActive(false)}>
                        <img src={DrawerClose} width={22} alt="close" />
                    </button>
                </div>
                <ul className='burger-menu__list'>
                    <li className='burger-menu__item-logo'>
                        <div className="flex items-center gap-3 mb-14">
                            <img src={headerLogo} width={35} alt="logo" />
                            <div className='title'>
                                <h1 className="uppercase font-bold">REACT SNEAKERS</h1>
                                <h3 className="opacity-70 text-xs">Магазин лучших кроссовок</h3>
                            </div>
                        </div>
                    </li>
                    <Link to='/home'>
                        <li className='flex items-center gap-2 cursor-pointer'>
                            <img src={headerLogo} width={20} alt="home" />
                            <span className='font-bold'>Главная</span>
                        </li>
                    </Link>
                    <Link to="favorite">
                        <li className='flex items-center gap-2 cursor-pointer'>
                            <img src={favorite} alt="favorite" />
                            <span className='font-bold'>Закладки</span>
                        </li>
                    </Link>
                    <div className='flex flex-col items-center'>
                            <li onClick={DrawerOpen} className='flex items-center gap-2 cursor-pointer'>
                                <img src={drawer} alt="drawer" />
                                <span className='font-bold'>Корзина</span>
                            </li>
                        <p className="font-bold opacity-70">{totalPrice} руб.</p>
                    </div>
                    <Link to="orders">
                        <li className='flex items-center gap-2 cursor-pointer'>
                            <img src={user} alt="orders" />
                            <span className='font-bold'>Мои покупки</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}