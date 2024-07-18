import './Drawer.scss';
import EmptyDrawer from './EmptyDrawer';
import DrawerList from './DrawerList';

export default function Drawer ( {drawerOpen, setDrawerOpen, items = [], DeleteCard} ) {
    return (
        <div>
          <div onClick={() => setDrawerOpen(false)} className={drawerOpen ? 'drawer__blur' : ''}></div>
          <div className={drawerOpen ? 'drawer-wrapper open' : 'drawer-wrapper'}>
            <div className="my-7 mx-5 flex flex-col items-center">
                <div className='mb-7 flex items-center w-full justify-between cursor-pointer'>
                    <h1 className='text-2xl font-bold'>Корзина</h1>
                    <img onClick={() => setDrawerOpen(false)} width={20} src="./src/assets/DrawerClose.svg" />
                </div>
                {
                    items.length > 0 ? (
                            <DrawerList 
                            items={items} 
                            DeleteCard={DeleteCard}
                            setDrawerOpen={setDrawerOpen}/>
                    ) : (
                        <EmptyDrawer setDrawerOpen={setDrawerOpen}/>
                    )
                }
                </div>
              </div>
            </div>
    )
}