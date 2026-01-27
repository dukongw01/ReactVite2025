import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HeaderBanner from './Banner/HeaderBanner'
import SectionBanner from './Banner/SectionBanner'
import HeaderPage from './Header/HeaderPage'
import FooterPage from './Footer/FooterPage'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <HeaderPage/>
        <HeaderBanner/>
        <Routes>
          {/* <SectionBanner/> */}
        </Routes>
        <FooterPage/>
      </BrowserRouter>
    </>
  )
}

export default App
