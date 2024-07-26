import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './routes/Home';
import Purchases from './routes/Purchases';
import Favorite from './routes/Favorite';
import Drawer from './Drawer/Drawer';

export const AppContext = createContext({});

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [drawerCard, setDrawerCard] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchData () {
      try {
        const sneakerData = await axios.get('https://3ad519bdc442b341.mokky.dev/sneaker');
        const DrawerData = await axios.get('https://3ad519bdc442b341.mokky.dev/DrawerCard')
        const FavoritesData = await axios.get('https://3ad519bdc442b341.mokky.dev/favorites')
     
        setDrawerCard(DrawerData.data);
        setFavorites(FavoritesData.data);
        setSneakers(sneakerData.data);
      }
        catch(err) {
          alert('Ошибка при получении данных');
          console.log(err);
        }
        setIsLoading(false);
    }

    fetchData();
  }, [])

  const DrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  }

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickPlus = async (obj) => {
    try {
      if(drawerCard.find(prev => prev.parentId === obj.id)) {
        axios.delete(`https://3ad519bdc442b341.mokky.dev/DrawerCard/${obj.id}`);
        setDrawerCard(prev => prev.filter(item => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://3ad519bdc442b341.mokky.dev/DrawerCard', obj);
        setDrawerCard(prev => [...prev, data]);
      }
    } catch(err) {
      alert('Ошибка при добавлении в корзину');
    }
  }

  const getAddedItems = (id) => {
    return drawerCard.some((item) => item.parentId === id);
  }

  const DeleteCard = (id) => {
    try {
      axios.delete(`https://3ad519bdc442b341.mokky.dev/DrawerCard/${id}`);
      setDrawerCard((prev) => prev.filter((prev) => prev.id !== id));
    } catch(err) {
      alert('Ошибка при удалении товара из корзины');
    }
  }

  const onClickFavorite = async (obj) => {
    try {
      if(favorites.find((prev) => prev.parentId === obj.id)) {
        setFavorites((prev) => prev.filter(prev => prev.id !== obj.id));
      } else {
        const { data } = await axios.post('https://3ad519bdc442b341.mokky.dev/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch(err) {
      alert('Ошибка при добавлении в закладки');
    }
  }

  const getFavoriteItems = (id) => {
    return favorites.some((item) => item.parentId === id);
  }

  const DeleteFavorite = (id) => {
    try {
      axios.delete(`https://3ad519bdc442b341.mokky.dev/favorites/${id}`);
    } catch(err) {
      alert('Ошибка при удалении товара из закладок');
    }
  }

  const items = [
    {id: 1, img: './src/assets/slider-img.png'},
    {id: 2, img: './src/assets/slider-img.png'},
    {id: 3, img: './src/assets/slider-img.png'},
    {id: 4, img: './src/assets/slider-img.png'},
    {id: 5, img: './src/assets/slider-img.png'}
  ]

  return (
    <AppContext.Provider value={
      {drawerCard, setDrawerCard, DrawerOpen, 
      drawerOpen, setDrawerOpen, DeleteCard,
      favorites, sneakers, 
      getAddedItems, onClickPlus,
      getFavoriteItems, 
      onClickFavorite, DeleteFavorite}
      }>
      <div className='wrapper'>
      <>
       <Routes>
        
        <Route path='/React-Sneakers/' element={<Header/>}>
          
          <Route index
            element={
            <Home 
            items={items}
            drawerCard={drawerCard}
            searchValue={searchValue}
            onChangeSearchValue={onChangeSearchValue}
            sneakers={sneakers}
            isLoading={isLoading}
            onClickPlus={onClickPlus}
            getFavoriteItems={getFavoriteItems}
            onClickFavorite={onClickFavorite}
            />
          }/>
          
          <Route path='favorite' element={ 
            <Favorite
            onClickPlus={onClickPlus}
            DeleteFavorite={DeleteFavorite}
            />}/>
            
          <Route path='orders' element={<Purchases/>}/>
          
          </Route>
        </Routes>
      </>
      <Drawer 
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        items={drawerCard}
        DeleteCard={DeleteCard}
        />
    </div>
    </AppContext.Provider>
  )
}


