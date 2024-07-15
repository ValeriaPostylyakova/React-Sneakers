import { useEffect, useState } from 'react';
import './App.scss';
import Header from './Header/Header';
import ImageSlider from './Slider/ImageSlider';
import CardList from './CardList/CardList';

export default function App() {
  const [sneakers, setSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const items = [
    {id: 1, img: './public/slider-img.png'},
    {id: 2, img: './public/slider-img.png'},
    {id: 3, img: './public/slider-img.png'},
    {id: 4, img: './public/slider-img.png'},
    {id: 5, img: './public/slider-img.png'}
  ]

  useEffect(() => {
     fetch('https://9b3fa2fbda761ff0.mokky.dev/items')
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
      <Header/>
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
          src="./public/search.svg" 
          className='absolute top-2 left-2 mt-1'
          alt="search" />
          </div>
        </div>
        <CardList 
        data={sneakers}
        isLoading={isLoading}
        searchValue={searchValue}
        />
      </section>
    </div>
  )
}


