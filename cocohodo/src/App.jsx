import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header/header';
import Section from './Section/section';
import Footer from './Footer/footer';
import Hododata from './Section/hododata';
import HodoDetail from './Section/hodoDetail';

function App() {
// custom hook으로 hododata를 사용할 예정
  const data = Hododata();
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Section datalist={data}/>}/>
        <Route path='/:id' element={<HodoDetail datalist={data}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
