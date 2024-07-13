import { useState } from 'react';
import './App.scss';
import Header from './Header/Header';
import ImageSlider from './ImageSlider';
import CardList from './CardList/CardList';

export default function App() {

  const items = [
    {id: 1, img: './public/slider-img.png'},
    {id: 2, img: './public/slider-img.png'},
    {id: 3, img: './public/slider-img.png'},
    {id: 4, img: './public/slider-img.png'},
    {id: 5, img: './public/slider-img.png'}
  ]

  return (
    <div className='w-4/5 bg-white h-hull rounded-xl m-auto shadow-xl my-14'>
      <Header/>
      <ImageSlider items={items}/>
      <section className="w-10/12 m-auto">
        <div className="flex items-center justify-between mb-14">
          <h1 className='font-bold text-3xl'>Все кроссовки</h1>
          <div className='relative'>
          <input 
          className='outline-none w-52 h-10 border rounded-md px-10 transition focus:border-slate-400' 
          type="text" placeholder='Поиск...' />
          <img 
          src="./public/search.svg" 
          className='absolute top-2 left-2 mt-1'
          alt="search" />
          </div>
        </div>
        <CardList/>
      </section>

    </div>
  )
}


