import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'

import AuthProvider from './LoginExample/Context/AuthContext';
import LoginPage from './LoginExample/Pages/Loginpage';
import HomePage from './LoginExample/Pages/HomePage';
import Join from './Addr/Join';


function App() {

  // // ProductList, WishlistPage를 선택하도록 하기 위한 상태변수
  // const [showlist, setShowlist]=useState(false)

  return (
    <>
      <Join/>
    </>
  )
}

export default App

      // <WishlistProvider>
      //   {/* 헤더영역 */}
      //   <header style={{display:'flex',padding:'20px', justifyContent:'center', backgroundColor:'#eee'}}>
      //     <h2>찜하기 예제</h2>
      //     {/* 찜목록 보기 <-> 상품보기 */}
      //     <button type='button' onClick={()=>setShowlist(!showlist)}>
      //       {showlist?'상품보기':'찜 목록보기'}
      //     </button>
      //   </header>
      //   {/* 본문영역 */}
      //   {/* showlist가 true면 wishlistPage가 뜨고 false면 Productlist 출력 */}
      //   {showlist ? <WishlistPage/> : <ProductList/>}
      // </WishlistProvider>