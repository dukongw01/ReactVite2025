// 2단계 (1단계는 ReduxToolkit 폴더) : store.js 만들기 - Redux의 중앙 저장소 역할을 하는 부분이다.
//       Slice를 store에 등록해야 컴포넌트에서 사용할 수 있다.
import { configureStore } from "@reduxjs/toolkit";
// import countReducer from './ReduxToolkit/counterSilce' //countReduce는 작명이다 지어낼 수 있다
// import cartReducer from './cartEx/cartSlice' //cartReducer는 작명이다
import productReducer from "../src/store02/productSlice"; //productsSlice를 임포트한다
import cartReducer from '../src/store02/cartSlice';


export const store = configureStore({
    reducer:{
        // counter는 counterSlice.js 파일의 name:'counter'와 반드시 같아야 한다.
        // counter:countReducer,
        // cart:cartReducer,
        products:productReducer,
        cart:cartReducer,
    }
})