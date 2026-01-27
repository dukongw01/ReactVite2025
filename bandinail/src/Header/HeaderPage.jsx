import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderPage(){
    return(
        <div className="header-Containner">
            <div className="hd-bar">
                <div className="logo">
                    <Link to='/'><h1>BANDI</h1></Link>
                </div>
                <div className="menu-bar">
                    <ul>
                        <li><Link to='/'>ABOUT US</Link></li>
                        <li><Link to='/'>프로덕트</Link></li>
                        <li><Link to='/'>프로페셔널 샵</Link></li>
                        <li><Link to='/'>아카데미</Link></li>
                        <li><Link to='/'>이벤트</Link></li>
                        <li><Link to='/'>COMMUNITY</Link></li>
                    </ul>
                </div>
                <div className="mymenu-bar">
                    <ul>
                        <li><input type="text" placeholder="상품 검색"/></li>
                        <li><Link to='/'>로그인</Link></li>
                        <li><Link to='/'>장바구니</Link></li>
                        <li><Link to='/'>고객센터</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}