import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Counter from './ReduxEx/counter'
// import Counter from './ReduxToolkit/counter'
// import Cart from './cartEx/Cart'
// import Test from './test'
// import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import Header from './components/Header';
// import Section from './pages/Section'
// import Footer from './components/Footer'
import { CookieTest } from './components/Cookie';
import { LoginCookieTest } from './components/LoginCookie';


function App() {

  return (
    <>
      <LoginCookieTest/>
      {/* <CookieTest/> */}

      {/* <BrowserRouter>
          <Header>
      <Routes>
        <Route>
          <Section/>
          <Footer/>
        </Route>
      </Routes>
          </Header>
      </BrowserRouter> */}
      {/* <Cart/> */}
    </>
  )
}

export default App
