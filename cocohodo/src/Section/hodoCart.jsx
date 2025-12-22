import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './hodoCart.css';

export default function HodoCart({datalist}){
    // 장바구니
    
    //배열저장
    localStorage.setItem('cart',{datalist}.stringify(cart));
    //배열 불러오기
    const savedList = {datalist}.prase(localStorage.getItem(cart))||[];

    // 장바구니 목록
    const [cart, setCart] = useState([]);
    // localStorage 불러오기
    useEffect (()=>{
        const saved = localStorage.getItem('cart');
        if (saved) { setCart({datalist}.prase(saved)); }
    },[])
    // cart가 바뀔때마다 localStorage에 저장
    useEffect(()=>{
        localStorage.setItem('cart',{datalist}.stringify(cart));
    },[cart])
    
    // 장바구니 목록 삭제
    const clearcart = (id) => {
        setCart([]); //상태 초기화
        localStorage.removeItem('cart');
    };
    // 합계
    const totalcart = cart.reduce((item)=>(item.price),0);

    return(
        <div className="bestbox">
            <h1>장바구니</h1>
            <ul>
                <li>
                    <button onClick={savedList}>저장</button>
                </li>
                <li>
                    <button onClick={cart}>카트</button>
                </li>
                <li>
                    <button onClick={clearcart}>삭제</button>
                </li>
            </ul>
            <h3>합계: {totalcart}</h3>
        </div>
    )
}