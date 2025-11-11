import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 내가 만든 Test12함수를 import로 가져오기
import Test13 from './components/test13.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  // </StrictMode>
)

