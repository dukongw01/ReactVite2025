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
import DetailProd from './section/DetailProd';
import Event from './section/Event';
import Likeds from './section/Likeds';
import Cart from './section/Cart';
// 푸터
import Footer from './footer/Footer';
import TopBtn from './footer/TopBtn';



function App() {
  
  const AllData = AllProductData();
  const [cateFilter, setCateFilter] = useState('');


  return (
    <>
    <BrowserRouter>
      <Header AllData={AllData} setCateFilter={setCateFilter}/>
      <Routes>
          <Route path='/Login' element={<Login />}/> {/* 로그인 */}
          <Route path='/Join' element={<Join />}/> {/* 회원가입 */}
          <Route path='/Join_personal' element={<Join_personal />}/> {/* 회원가입2 */}
          <Route path='/Join_business' element={<Join_business/>}/> {/* 회원가입3 */}
          <Route path='/Event' element={<Event/>}/>
          <Route path='/' element={<Main AllData={AllData}/>}/>
          <Route path='/Main' element={<Main AllData={AllData}/>}/>
          <Route path='/Likeds' element={<Likeds AllData={AllData} cateFilter={cateFilter} />}/>
          <Route path='/Cart' element={<Cart AllData={AllData} cateFilter={cateFilter} />}/>
          {/* cateFilter를 ProductPage로 전달 */}
          <Route path='/ProductPage' element={<ProductPage AllData={AllData} cateFilter={cateFilter} />}/>
          <Route path='/DetailProd/:id' element={<DetailProd AllData={AllData} />}/>
      </Routes>
      <Footer/>
      <TopBtn/>
    </BrowserRouter>
    </>
  )
}

export default App
