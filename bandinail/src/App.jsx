import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HeaderPage from './Header/HeaderPage'
import FooterPage from './Footer/FooterPage'
import Cart from './Section/Cart'
import LoginPage from './Section/LoginPage'
import JoinPage from './Section/JoinPage'
import MainPage from './Section/MainPage'
import ShopPage from './Section/ShopPage'
import NailFilter from './Section/NailFilter';
import NailList from './Detail/NailList';

function App() {
  
  //Detail에서 NailList.jsx 데이터를 가져옴
  const nailData = NailList(); //nailData=nailType 정보를 SectionPage.jsx에 뿌린다.

  return (
    <>
      <BrowserRouter>
        <HeaderPage/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/ShopPage' element={<ShopPage nailData={nailData}/>}/>
          <Route path='/LoginPage' element={<LoginPage/>}/>
          <Route path='/Cart' element={<Cart nailData={nailData}/>}/>
          <Route path='/JoinPage' element={<JoinPage/>}/>
        </Routes>
        <FooterPage/>
      </BrowserRouter>
    </>
  )
}

export default App
