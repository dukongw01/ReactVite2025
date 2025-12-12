import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes, Route} from 'react-router-dom'
import Header from './Header/header';
import Section from './Section/section';
import Footer from './Footer/footer';
import Hodolist from './Section/hodolist';

function App() {

  return (
    <>
    {/* <HashRouter> */}
      {/* <Routes> */}
        {/* <Route/> */}
        <Header/>
        <Section/>
        <Footer/>
      {/* </Routes> */}
    {/* </HashRouter> */}
    </>
  )
}

export default App
