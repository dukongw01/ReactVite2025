import { Link } from 'react-router-dom';
import { useState } from 'react';

import Logo from '../../public/LnL_img/Logo.png';
import search from '../../public/LnL_img/search.png';
import like from '../../public/LnL_img/like.png';
import user from '../../public/LnL_img/user.png';
import cart from '../../public/LnL_img/cart.png';
import './Header.css';
import Navbar from "../navigation/Navbar";


export default function Header({setCateFilter}){


    return(
        <div className="Header-container">
            {/* PPL 광고 바 */}
            <div className='PPL-bar'>
                <p>공식몰 회원 전용 | <span>웰컴쿠폰·추가할인쿠폰·사은품 보러가기　＞</span></p>
            </div>

            <div className="Header-fit">
                {/* 로고 */}
                <div className="Header-left">
                    <Link to='/Main'><img src={Logo} alt="Logo" /></Link>
                </div>

                {/* 검색 */}
                <div className="Header-center">
                    <input type="text" placeholder='검색어를 입력하세요'/>
                    <button type="button" className="search-btn">
                        <img src={search} alt="검색" />
                    </button>
                </div>

                {/* 유저 아이콘 영역 */}
                <div className='Header-right'>
                    <Link to='/Login'><img src={user} alt="마이페이지" /></Link>
                    <Link to='/Likeds'><img src={like} alt="찜목록" /></Link>
                    <Link to='/Cart'><img src={cart} alt="장바구니" /></Link>
                </div>
            </div>

            {/* 네비게이션 */}
            <div className="Nav-container">
                <Navbar setCateFilter={setCateFilter}/>
            </div>
        </div>
    )
}