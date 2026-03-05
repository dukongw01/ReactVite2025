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
import ScrollToTop from './Section/ScrollTop'
import BrandStory from './Section/BrandStory'
import Branches from './Section/Branches'
import OpenSalon from './Section/OpenSalon'
import InHouse from './Section/InHouse'
import Cureix from './Section/Cureix'
import MemberShipPage from './Section/MemberShipPage'
import EventPage from './Section/EventPage'
import Notice from './Section/Notice'

function App() {
  
  //NailList.jsx 데이터를 가져옴
  const nailData = NailList();
  // 1. nailData=nailType 정보를 NailFilter.jsx에 뿌린다.
  // 2. APP에서 MainPage.jsx로 nailDataList를 보낸다.

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <HeaderPage/>
        <Routes>
          {/* About us 영역 */}
          <Route path='/BrandStory' element={<BrandStory/>}/>
          <Route path='/Branches' element={<Branches/>}/>
          <Route path='/OpenSalon' element={<OpenSalon/>}/>
          <Route path='/InHouse' element={<InHouse/>}/>
          <Route path='/Cureix' element={<Cureix/>}/>
          <Route path='/MemberShipPage' element={<MemberShipPage/>}/>
          <Route path='/EventPage' element={<EventPage/>}/>
          <Route path='/Notice' element={<Notice/>}/>
          {/* Product 영역 */}
          <Route path='/' element={<MainPage nailDataList={nailData}/>}/>
          <Route path='/NailFilter' element={<NailFilter nailDataList={nailData} />}/>
          <Route path='/LoginPage' element={<LoginPage/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/JoinPage' element={<JoinPage/>}/>
          <Route path='/DetailPage/:id' element={<DetailPage nailDataList={nailData}/>}/>
          {/* id를 집어넣고 maping을 돌리면 받아올 id를 적어줘야한다. '/:id' */}
        </Routes>
        <FooterPage/>
      </BrowserRouter>
    </>
  )
}

export default App
