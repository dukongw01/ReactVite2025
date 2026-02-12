import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HeaderPage from './Header/HeaderPage'
import FooterPage from './Footer/FooterPage'
import Cart from './Section/Cart'
import LoginPage from './Section/LoingPage'
import JoinPage from './Section/JoinPage'
import MainPage from './Section/MainPage'
import ShopPage from './Section/ShopPage'

function App() {
  
  //Detail에서 NailList.jsx 데이터를 가져옴
  const nailType = NailList();


  return (
    <>
      <BrowserRouter>
        <HeaderPage/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/ShopPage' element={<ShopPage datalist={nailType}/>}/>
          <Route path='/LoginPage' element={<LoginPage/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/JoinPage' element={<JoinPage/>}/>
        </Routes>
        <FooterPage/>
      </BrowserRouter>
    </>
  )
}

export default App
