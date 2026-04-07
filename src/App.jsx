import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Registration from './pages/Registration'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Api from './pages/Api'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/api" element={<Api/>}/> 
        <Route path='/' element={<Layout />}> 
          <Route index element={<Home/>} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/shop/:id" element={<ProductDetails/>} />
          <Route path="/registration" element={<Registration/>}/> 
          <Route path="/login" element={<Login/>}/> 
        </Route >
      </Routes>
   </BrowserRouter>
  )
}

export default App