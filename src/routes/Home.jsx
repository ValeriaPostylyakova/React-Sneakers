import ImageSlider from '../Slider/ImageSlider';
import CardList from '../CardList/CardList';

export default function Home( {items, drawerCard, searchValue, onChangeSearchValue, sneakers, isLoading, onClickPlus, onClickFavorite} ) {
    return (
        <>
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
        onClickFavorite={onClickFavorite}
        drawerCard={drawerCard}
        />
      </section>
      </>
    )
}