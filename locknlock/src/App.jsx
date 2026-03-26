import { useState } from 'react'
import { BrowserRouter, HashRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// data 폴더의 Data파일
import AllProductData from './data/AllProdData';

// 페이지 불러오기
// 헤더
// 네비게이터
import Header from './header/Header';
import Navbar from './navigation/Navbar';
// 섹션
import Login from './section/Login';
import Join from './section/Join';
import Join_personal from './section/Join_personal';
import Join_business from './section/Join_business';
import Main from './section/Main';
import ProductPage from './section/ProductPage';
// 푸터
import Footer from './footer/Footer';


function App() {
  
  const AllData = AllProductData();


  return (
    <>
    <BrowserRouter>
      <Header AllData={AllData}/>
      <Routes>
          <Route path='/Login' element={<Login />}/> {/* 로그인 */}
          <Route path='/Join' element={<Join />}/> {/* 회원가입 */}
          <Route path='/Join_personal' element={<Join_personal />}/> {/* 회원가입2 */}
          <Route path='/Join_business' element={<Join_business/>}/> {/* 회원가입3 */}
          <Route path='/' element={<Main />}/>
          <Route path='/Main' element={<Main AllData={AllData}/>}/>
          <Route path='/ProductPage' element={<ProductPage AllData={AllData} />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
