import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './HeaderPage.css';

export default function HeaderPage(){
    return(
        <div className="header-Containner">
            <div className="hd-bar">
                <div className="menu-bar">
                    <ul>
                        <li><Link to='/AboutPage'>ABOUT US</Link></li>
                        {/* 브랜드 스토리 , 전국지사, 오픈살롱 */}
                        <li><Link to='/ShopPage'>PRODUCT</Link></li>
                        {/* 온라인몰 */}
                        <li><Link to='/GshpPage'>FRANCHISE</Link></li>
                        {/* 가맹점 안내 (위치) */}
                        <li><Link to='/AcademyPage'>ACADEMY</Link></li>
                        <li><Link to='/EventPage'>EVENT</Link></li>
                        <li><Link to='/CommuPage'>COMMUNITY</Link></li>
                        {/* 공지, 문의답변, 멤버십 */}
                    </ul>
                </div>
                <div className="logo">
                    <Link to='/'><h1>BANDI</h1></Link>
                </div>
                <div className="mymenu-bar">
                        {/* 검색 아이콘 */}
                    <div className="search-bar">
                        <input type="text"/><img src='./bandi_img/search.png' alt="searchicon" />
                    </div>
                    <ul>
                        {/* 유저 아이콘 */}
                        <li><Link to='/LoginPage'><img src='./bandi_img/icon_user.png' alt="usericon" /></Link></li>
                        {/* 장바구니 아이콘 */}
                        <li><Link to='/Cart'><img src='./bandi_img/cart.png' alt="carticon" /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}