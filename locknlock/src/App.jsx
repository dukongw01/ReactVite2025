import { useState } from 'react'
import { BrowserRouter, HashRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// data 폴더의 Data파일
import AllProdData from './data/AllProdData';

// 페이지 불러오기
// 헤더
import Header from './header/Header';
// 네비게이터
import Navbar from './navigation/Navbar';
import SideNav from './navigation/SideNav';
// 섹션
import Main from './section/Main';
import ProductPage from './section/ProductPage';
// 푸터
import Footer from './footer/Footer';


function App() {
  
  // data 폴더의 Data파일
  const AllProducts= AllProdData();
  // 데이터 필터를 App에서 관리
  const [cateFilter, setCateFilter] = useState('');
  


  return (
    <>
    <BrowserRouter>
      <Header categoryFilter={cateFilter} setCategoryFilter={setCateFilter}/>
      <Navbar setCategoryFilter={setCateFilter} />
      <SideNav/>
      <Routes>
          <Route path='/' element={<Main AllProdList={AllProducts}/>}/>
          <Route path='/Main' element={<Main AllProdList={AllProducts}/>}/>
          <Route path='/ProductPage' element={<ProductPage AllProdList={AllProducts} setCategoryFilter={setCateFilter}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
