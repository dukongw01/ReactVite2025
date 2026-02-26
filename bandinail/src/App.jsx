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
import NailFilter from './Section/NailFilter';
import NailList from './Detail/NailList';
import DetailPage from './Section/DetailPage'

function App() {
  
  //NailList.jsx 데이터를 가져옴
  const nailData = NailList();
  // 1. nailData=nailType 정보를 NailFilter.jsx에 뿌린다.
  // 2. APP에서 MainPage.jsx로 nailDataList를 보낸다.

  return (
    <>
      <BrowserRouter>
        <HeaderPage/>
        <Routes>
          <Route path='/' element={<MainPage nailDataList={nailData}/>}/>
          <Route path='/NailFilter' element={<NailFilter nailDataList={nailData} />}/>
          <Route path='/LoginPage' element={<LoginPage/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/JoinPage' element={<JoinPage/>}/>
          <Route path='/DetailPage:id' element={<DetailPage nailDataList={nailData}/>}/>
        </Routes>
        <FooterPage/>
      </BrowserRouter>
    </>
  )
}

export default App
