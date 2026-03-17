import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// data 폴더의 Data파일
import AppliancesData from './data/AppliancesData';
import CookingData from './data/CookingData';
import KitchenData from './data/KitchenData';
import OutdoorData from './data/OutdoorData';
import StorageData from './data/StorageData';
import SundriesData from './data/SundriesData';
// 페이지 불러오기
import Header from './header/Header';
import Main from './section/Main';
import Footer from './footer/Footer';


function App() {
  // data 폴더의 Data파일
  const Appliances = AppliancesData();
  const Cooking = CookingData();
  const Kitchen = KitchenData();
  const Outdoor = OutdoorData();
  const Storage = StorageData();
  const Sundries = SundriesData();

  return (
    <>
    {/* <BrowserRouter> */}
      <Header/>
      <Main/>
      {/* <Routes> */}
          {/* <Route path='/Main' element={<Main/>}/> */}
      {/* </Routes> */}
      <Footer/>
    {/* </BrowserRouter> */}
    </>
  )
}

export default App
