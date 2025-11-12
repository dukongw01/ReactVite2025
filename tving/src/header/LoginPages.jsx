import { useContext,useState } from "react";

import './LoginPages.css';

export default function LoginPages(){
    return(
        <div className="logcontainer">
            <h1>반가워요!</h1>
            <h1>계정을 선택해주세요.</h1>
            <button type="button">TVING ID로 시작하기</button>
            <button type="button">NAVER로 시작하기</button>
            <button type="button">카카오로 시작하기</button>
            <button type="button">CJ ONE으로 시작하기</button>
            <button type="button">Apple로 시작하기</button>
            <button type="button">페이스북으로 시작하기</button>
            <button type="button">X로 시작하기</button>
            <p>아이디를 잊으셨나요?<span>아이디 찾기</span></p>
        </div>
    )
}