import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './HeaderPage.css';

export default function HeaderPage() {
    const [hidemenu, setHidemenu] = useState(null);

    return (
        <div className="header-container">
            <div className="hd-bar">
                <div className="logo">
                    <Link to='/'><h1>BANDI</h1></Link>
                </div>
                <nav className="menu-bar">
                    <ul className="main-menu">
                        {/* ABOUT US */}
                        <li className="menu-item"
                            onMouseEnter={() => setHidemenu('about')} 
                            onMouseLeave={() => setHidemenu(null)}>
                            <Link to='/BrandStory' className="main-link">ABOUT US</Link>
                            {hidemenu === 'about' && (
                                <ul className="dropnavi">
                                    <li><Link to='/BrandStory'>브랜드 스토리</Link></li>
                                    <li><Link to='/Branches'>전국지사</Link></li>
                                    <li><Link to='/OpenSalon'>오픈살롱</Link></li>
                                </ul>
                            )}
                        </li>
                        
                        <li><Link to='/NailFilter' className="main-link">PRODUCT</Link></li>
                        <li><Link to='/GshpPage' className="main-link">FRANCHISE</Link></li>
                        <li><Link to='/AcademyPage' className="main-link">ACADEMY</Link></li>
                        <li><Link to='/EventPage' className="main-link">EVENT</Link></li>
                        
                        {/* COMMUNITY */}
                        <li className="menu-item"
                            onMouseEnter={() => setHidemenu('community')} 
                            onMouseLeave={() => setHidemenu(null)}>
                            <Link to='/CommuPage' className="main-link">COMMUNITY</Link>
                            {hidemenu === 'community' && (
                                <ul className="dropnavi">
                                    <li><Link to='/Notice'>공지사항</Link></li>
                                    <li><Link to='/QnA'>문의답변</Link></li>
                                    <li><Link to='/Membership'>멤버십</Link></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>

                <div className="mymenu-bar">
                    <div className="search-bar">
                        <input type="text" placeholder="상품 검색" />
                        <img src='/bandi_img/search.png' alt="search" />
                    </div>
                    <ul className="icon-menu">
                        <li><Link to='/LoginPage'><img src='/bandi_img/icon_user.png' alt="user" /></Link></li>
                        <li><Link to='/Cart'><img src='/bandi_img/cart.png' alt="cart" /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}