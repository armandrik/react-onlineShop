import React from 'react';
import './sass/App.css';
import { Footer } from './views/footer/Footer';
import { Header } from './views/header/Header';
import { Menu } from './views/menu/Menu';
import { Routes, Route } from 'react-router-dom';
import { ContextWrapper } from './context/ProductContext';
import { ProductList } from './views/product/ProductList';
import { Carousel } from './views/carousel/Carousel';
import { Cart } from './views/cartShop/Cart';
import { FavoriteList } from './views/favorite/FavoriteList';
import { Details } from './views/details/Details';
import { Realted } from './views/realted/Realted';

function App() {

  const [getId, setGetId] = React.useState()
  const [category, setCategory] = React.useState()
  const [favList, setFavList] = React.useState([])
  const [cartList, setCartList] = React.useState([])
  const [length, setLength] = React.useState(0)
  const [cartLength, setCartLength] = React.useState(0)

  const realtId = (id) => {
    setGetId(id)
  }

  const postId = (id) => {
    setGetId(id)
  }

  const categoryPost = (categoryList) => {
    setCategory(categoryList)
  }

  const carouselId = (id) => {
    setGetId(id)
  }

  const getFavList = (fav) => {
    setFavList([...favList, fav])
  }

  const getCartList = (cart) => {
    setCartList([...cartList, cart])
  }

  const getLength = (L) => {
    setLength(L)
  }

  const getCartLength = (L) => {
    setCartLength(L)
  }

  return (
    <div className="App">
      <ContextWrapper>
        <div className='upper-page-wrapper'>
          <Menu />
          <Header length={length} cartLength={cartLength} />
        </div>
        <Routes>
          <Route path='/' exact element={
            <>
              <Carousel carouselId={carouselId} />
              <ProductList postId={postId} />
            </>
          }
          />
          <Route path='/cart' element={<Cart cartList={cartList} getCartLength={getCartLength} />} />
          <Route path='/favorite' element={<FavoriteList favList={favList} getLength={getLength} />} />
          <Route path='/details' element={
            <>
              <Details productId={getId} categoryPost={categoryPost} getFavList={getFavList} getCartList={getCartList} />
              <Realted realtId={realtId} category={category} />
            </>
          }
          />
        </Routes>
        <Footer />
      </ContextWrapper>
    </div>
  );
}

export default App;