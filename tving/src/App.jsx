import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './header/Header';
import Section from './section/Section';
import Footer from './footer/Footer';


function App() {

  return (
    <>
      <Header/>
      <Section/>
      <Footer/>
    </>
  )
}

export default App
