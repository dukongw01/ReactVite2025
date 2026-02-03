import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderPage(){
    return(
        <div className="header-Containner">
            <div className="hd-bar">
                <div className="logo">
                    <Link to='/MainPage'><h1>BANDI</h1></Link>
                </div>
                <div className="menu-bar">
                    <ul>
                        <li><Link to='/AboutPage'>ABOUT US</Link></li>
                        <li><Link to='/ShopPage'>프로덕트</Link></li>
                        <li><Link to='/GshpPage'>입점 샵</Link></li>
                        <li><Link to='/AcademyPage'>아카데미</Link></li>
                        <li><Link to='/EventPage'>이벤트</Link></li>
                        <li><Link to='/CommuPage'>COMMUNITY</Link></li>
                    </ul>
                </div>
                <div className="mymenu-bar">
                    <ul>
                        <li><input type="text" placeholder="상품 검색"/></li>
                        <li><Link to='/LoginPage'>로그인</Link></li>
                        <li><Link to='/Cart'>장바구니</Link></li>
                        <li><Link to='/SupportPage'>고객센터</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}