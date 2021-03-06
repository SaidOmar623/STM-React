import { useState, useEffect } from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProducts} from './actions/productActions'
import { fetchCategories } from './actions/filterActions'
import {fetchCart} from './actions/cartActions'
import { fetchWishlist } from './actions/wishlistActions'

import Header from './Components/MainPartialComponents/Header/header';
import Footer from './Components/MainPartialComponents/Footer/footer';
import ProductDetails from './Components/Pages/ProductDetails/productDetails';
import Home from './Components/Pages/Home/Home';
import ShoppingCart from './Components/Pages/ShoppingCart/shoppingCart';
import Wishlist from './Components/Pages/Wishlist/wishlist';
import ShopProducts from './Components/Pages/ShopProducts/shopProducts';
import ProfileInfo from './Components/Pages/ProfileInfo/profileInfo';
import Orders from './Components/Pages/Orders/orders';
import Addresses from './Components/Pages/Addresses/addresses';
import CheckoutDetails from './Components/Pages/CheckoutDetails/checkoutDetails';
import Payment from './Components/Pages/Payment/payment';
import Review from './Components/Pages/Review/review';
import Login from './Components/Pages/Login/login';
import Register from './Components/Pages/Register/register';
import Contacts from './Components/Pages/Contacts/contacts';
import About from './Components/Pages/About/about';
import ToTopButton from './Components/SecondaryComponents/ToTopButton/toTopButton';
import VerifiCode from './Components/Pages/VerifyCode/verifyCode'
import './App.css';

function App(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token)
  const lang = useSelector(state => state.lang.lang)
  const {pathname} = useLocation()

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchCart());
    dispatch(fetchWishlist());
  },[token, dispatch])

  useEffect(() => {
    if(lang === 'ar'){
      document.getElementsByTagName('body')[0].setAttribute("dir", "rtl")
    }else{
      document.getElementsByTagName('body')[0].setAttribute("dir", "ltr")
    }
  },[lang]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  
  return (
    <div className="">
        <Header token={token}/>
        <Switch>
          <Route path="/productDetails/:id" render={(props)=>(
            <ProductDetails
              {...props}
            />)} />
          <Route path="/shoppingCart" component={ShoppingCart} />
          <Route path="/profile/wishlist" component={Wishlist} />
          <Route path="/shopProducts" component={ShopProducts} />
          <Route path="/profile/settings" component={ProfileInfo} />
          <Route path="/profile/orders" component={Orders} />
          <Route path="/profile/addresses" component={Addresses} />
          <Route path="/checkout" component={CheckoutDetails} />
          <Route path="/payment" component={Payment} />
          <Route path="/review" component={Review} />
          <Route path="/verify" component={VerifiCode} />
          <Route path="/login" render={(props)=>(
              <Login {...props}/>)
            } />
          <Route path="/register" component={Register} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home}/>
          <Redirect to="/"/>
        </Switch>
        <ToTopButton />
        <Footer />
    </div>
  );
}

export default App;
