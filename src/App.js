import React from 'react'
import './App.css'
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './PAGES/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from "./PAGES/Product/ProductPage"
import About from "./PAGES/Extra/About"
import Contact from "./PAGES/Extra/Contact"
import Login from "./PAGES/Auth/Login";
import Signup from "./PAGES/Auth/Signup";
import Forgotpassword from "./PAGES/Auth/ForgotPassword";
import Cart from "./PAGES/Cart/Cart" ;
import FAQ from './PAGES/Extra/FAQ';
import Termsandconditions from './PAGES/Extra/Termsandconditions';
import PrivacyPolicy from './PAGES/Extra/PrivacyPolicy';
import UserProfile from './PAGES/User/UserProfile';
const App = () => {
  return (<>
    {/* <Home /> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/product/:prodid'
       element={<ProductPage />} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/forgotpassword" element={<Forgotpassword/>} />
      <Route path ="/cart" element={<Cart />} />
      
      <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/termsandconditions" element={<Termsandconditions/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/user/:activepage" element={<UserProfile />} />
      <Route path='/*' element={<div>
        <h1>404 NOT FOUND</h1>
      </div>} />
    </Routes>
    </BrowserRouter> </>
  )
}

export default App;