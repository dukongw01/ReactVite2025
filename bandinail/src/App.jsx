import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HeaderBanner from './Banner/HeaderBanner'
import SectionBanner from './Banner/SectionBanner'
import HeaderPage from './Header/HeaderPage'
import FooterPage from './Footer/FooterPage'
import Cart from './Section/Cart'
import LoginPage from './Section/LoingPage'
import JoinPage from './Section/JoinPage'
import MainPage from './Section/MainPage'
import ShopPage from './Section/ShopPage'

function App() {
  
  //Detail에서 NailList.jsx 데이터를 가져옴
  // const Naildata = NailList();


  return (
    <>
      <BrowserRouter>
        <HeaderPage/>
        <Routes>
          <Route path='/ShopPage' element={<ShopPage/>}/>
          <Route path='/MainPage' element={<MainPage/>}/>
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
