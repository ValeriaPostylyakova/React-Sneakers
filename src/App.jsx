import { useState } from 'react';
import './App.scss';
import Header from './Header/Header';
import ImageSlider from './ImageSlider/ImageSlider';

export default function App() {

  const items = [
    {id: 1, img: './public/slider-img.png'},
    {id: 2, img: './public/slider-img.png'},
    {id: 3, img: './public/slider-img.png'},
    {id: 4, img: './public/slider-img.png'},
    {id: 5, img: './public/slider-img.png'}
  ]

  return (
    <div className='w-4/5 bg-white h-screen rounded-xl m-auto shadow-xl my-14'>
      <Header/>
      <ImageSlider items={items}/>
    </div>
  )
}


