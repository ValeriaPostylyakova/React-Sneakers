import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "../Card/Card";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

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
    
    const clickOrderHistory = async () => {
        setOrders([]);
        for (let i = 0; i < orders.length; i++) {
            const item = orders[i];
            await axios.delete(`https://3ad519bdc442b341.mokky.dev/orders/${item.id}`);
            await delay(1000);
        }
    }
    return (
        <>
        {orders.length > 0 ? (
            <div className="h-full mx-10 pb-10">
                <div className="flex items-center gap-5 w-full my-10">
                    <button>
                        <Link to="/React-Sneakers/"><img src="./src/assets/favorite-arrow.svg" alt="arrow" /></Link>
                    </button>
                    <h1 className="text-2xl font-bold">Мои покупки</h1>
                    <button onClick={clickOrderHistory} className="ml-auto border py-3 px-8 rounded-xl">Очистить историю</button>
                </div>
                <div className='grid grid-cols-4 gap-10'>
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
        <div className="grid place-items-center h-screen w-full">
            <div className="flex flex-col items-center gap-1">
                <img className="mb-6" width={70} src="./src/assets/purchases.png" alt="icon" />
                <h1 className="text-2xl font-bold">У вас нет заказов</h1>
                <p className="mb-14 text-slate-500">Оформите хотя бы один заказ.</p>
                <button className='w-full h-14 rounded-2xl bg-lime-500 opacity-80 transition hover:opacity-100'>
                <a href="/">
                    <div className='flex items-center justify-center gap-5'>
                        <span className='rotate-180'>
                            <img src="./src/assets/btn-arrow.svg" alt="arrow" />
                        </span>
                        <p className='text-white font-medium mr-10'>Вернуться назад</p>
                    </div>
                </a>
            </button>
            </div>
        </div>
        )}
        </>
    )
}