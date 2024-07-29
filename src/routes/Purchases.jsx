import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './FavoritePage.scss';
import Card from "../Card/Card";

import arrow from '/src/assets/btn-arrow.svg?url';
import icon from '/src/assets/purchases.png?url';

export default function Purchases() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
     async function fetchData() {
       try {
        const { data } = await axios.get('https://3ad519bdc442b341.mokky.dev/orders');
        setOrders(data.map((obj) => obj.items).flat());
       }
       catch(err) {
        alert('Ошибка при получении заказа');
        console.error(err);
       }
     }
     fetchData();
    }, [])
    
    return (
        <>
        {orders.length > 0 ? (
            <div className="favorite">
                <div className="flex items-center gap-5 w-full my-10">
                    <button>
                        <Link to="/React-Sneakers/"><img src="./src/assets/favorite-arrow.svg" alt="arrow" /></Link>
                    </button>
                    <h1>Мои покупки</h1>
                </div>
                <div className='favorite-card__container'>
                    {
                        orders.map((item, index) => (
                            <Card 
                            key={index}
                            {...item}
                            />
                        ))
                    }
                </div>
            </div>
        ) : (
        <div className="empty-favorite">
            <div className="empty-favorite__container">
                <img className="empty-favorite__img" width={70} src={icon} alt="icon" />
                <h1>У вас нет заказов</h1>
                <p>Оформите хотя бы один заказ.</p>
                <button>
                <Link to="/React-Sneakers/home">
                    <div>
                        <span>
                            <img src={arrow} alt="arrow" />
                        </span>
                        <p>Вернуться назад</p>
                    </div>
                </Link>
            </button>
            </div>
        </div>
        )}
        </>
    )
}