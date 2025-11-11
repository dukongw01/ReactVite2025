import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './common/Header/Header';
import Home from './pages/Home/Home';
import Login from './common/Header/LOGIIN/Login';
import Footer from './common/Footer/Footer';
import HeaderProvider from './common/Header/headerProvider';
import Postadd from './common/Header/LOGIIN/postadd';

function App() {


  return (
    <>
        <Header>
          <HeaderProvider>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/postadd' element={<Postadd/>}/>
            </Routes>
          </HeaderProvider>
        </Header>
        <Home/>
        <Footer/>
    </>
  )
}

export default App
