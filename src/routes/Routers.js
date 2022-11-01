import React from 'react'
import { Routes, Route,Navigate } from 'react-router-dom'; 
import Home from '../pages/Home';
import Aboutus from '../pages/Aboutus';
import Cart from '../pages/Cart'; 
import ProductDetails from '../components/products/ProductDetails'; 
import Checkout from '../pages/Checkout';
import Shop from '../pages/Shop';
import Contactus from '../pages/Contactus';
import Login from '../pages/Login'; 
import Signup from '../pages/Signup'; 
import AddProducts from '../admin/AddProducts';

import ProtectedRoute from './ProtectedRoute'; 


const Routers = () => {
  return <Routes>
   
        <Route path='/' element={<Navigate to="home" />}/>
        <Route path='home' element={<Home />}/>
        <Route path='aboutus' element={<Aboutus />}/>
        <Route path='cart' element={<Cart />}/>
        <Route path='checkout' element={<ProtectedRoute> <Checkout /> </ProtectedRoute>}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='shop/:id' element={<ProductDetails />}/>
        <Route path='contactus' element={<Contactus />}/>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<Signup />}/>
        <Route path='add' element={<AddProducts />}/>
    </Routes>
};

export default Routers;