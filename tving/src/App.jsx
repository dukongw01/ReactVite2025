import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes, Route} from 'react-router-dom'

import Header from './header/Header';
import Section from './section/Section';
import Footer from './footer/Footer';
import LoginPages from './header/LoginPages';
import DramaTap from './header/DramaTap';
import MovieTap from './header/MovieTap';
import Comedy from './header/Comedy';
import SportsTap from './header/SportsTap';
import AnimeTap from './header/AnimeTap';
import NewsTap from './header/NewsTap';


function App() {

  return (
    // <>
      
      <HashRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Section/>}/>
            <Route path='/DramaTap' element={<DramaTap/>}/>
            <Route path='/Comedy' element={<Comedy/>}/>
            <Route path='/MovieTap' element={<MovieTap/>}/>
            <Route path='/SportsTap' element={<SportsTap/>}/>
            <Route path='/AnimeTap' element={<AnimeTap/>}/>
            <Route path='/NewsTap' element={<NewsTap/>}/>
            <Route path='/LoginPages' element={<LoginPages/>}/>
        </Routes>
        <Footer/>
      </HashRouter>
    // {/* </> */}
  )
}

export default App
