import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function HomePage(){
    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate();
    const handelLogout = () =>{
        logout();
        navigate('/'); // 로그아웃 후 로그인 페이지 이동
    }

    return (
        <div>
            <h1>HOME PAGE</h1>
            {user ? (
                <>
                    <h2> {user}님, 로그인 성공! </h2>
                    <button type="button" onClick={handelLogout}>로그아웃</button>
                </>
            ):(
                <>
                    <h2>로그인 하세요.</h2>
                    <button type="button" onClick={navigate('/')}>로그인 하기</button>
                </>
            )}
        </div>
    )
}