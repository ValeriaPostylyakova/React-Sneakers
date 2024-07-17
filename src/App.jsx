import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './Header/Header';
import ImageSlider from './Slider/ImageSlider';
import CardList from './CardList/CardList';
import Drawer from './Drawer/Drawer';

export default function App() {
  const [sneakers, setSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [drawerCard, setDrawerCard] = useState([]);



  const DrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  }

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickPlus = (obj) => {
      setDrawerCard(prev => [...prev, obj])
  }

  const DeleteDrawerCard = (sneaker) => {
    // setDrawerCard(drawerCard.filter((obj) => obj !== sneaker));
  }

  const items = [
    {id: 1, img: './src/assets/slider-img.png'},
    {id: 2, img: './src/assets/slider-img.png'},
    {id: 3, img: './src/assets/slider-img.png'},
    {id: 4, img: './src/assets/slider-img.png'},
    {id: 5, img: './src/assets/slider-img.png'}
  ]

  useEffect(() => {
     fetch('https://3ad519bdc442b341.mokky.dev/sneaker')
    .then(data => data.json())
    .then(data => setSneakers(data))
    .catch((err) => {
      console.log(err);
      alert('Ошибка при получении данных');
    })
    .finally(() => setIsLoading(false));
  }, [])


  return (
    <div className='wrapper'>
      <Header drawerOpen={DrawerOpen}/>
      <ImageSlider items={items}/>
      <section className="w-10/12 m-auto">
        <div className="search-container">
          <h1 className='title-hero'>Все кроссовки</h1>
          <div className='relative'>
          <input 
          value={searchValue}
          onChange={onChangeSearchValue}
          className='search' 
          type="text" placeholder='Поиск...' />
          <img 
          src="./src/assets/search.svg" 
          className='absolute top-2 left-2 mt-1'
          alt="search" />
          </div>
        </div>
        <CardList 
        data={sneakers}
        isLoading={isLoading}
        searchValue={searchValue}
        onClickPlus={onClickPlus}
        />
      </section>
      <section>
        <Drawer 
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        items={drawerCard}
        DeleteDrawerCard={DeleteDrawerCard}
        />
      </section>
    </div>
  )
}


