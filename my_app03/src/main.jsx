import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import { store } from '../src/ReduxEx/store.js'
// import { counter } from './ReduxToolkit/counter.jsx'
import { store } from './store.js' //3단계 : 불러오기 (2단계는 store.js파일)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <Provider store={store}>
    // <Provider store={store}>
    <App />
    //* </Provider> */
  // </StrictMode>,
)
