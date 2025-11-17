import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginPages from "./LoginPages";
import Section from "../section/Section";
import DramaTap from "./DramaTap";
import MovieTap from "./MovieTap";
import herIMg from '../../img/1695032536_1.svg'
import SportsTap from "./SportsTap";
import AnimeTap from "./AnimeTap";
import NewsTap from "./NewsTap";

import './Header.css';

export default function Header(){

    return (
        <>
            <div className="header-container">
                <div className="top-box">
                    <ul className="tbox01">
                        <li><Link to='/'><img src={herIMg} alt="tving logo" /></Link></li>
                        <li><Link to='/DramaTap'>드라마</Link></li>
                        <li><Link to='/Comedy'>예능</Link></li>
                        <li><Link to='/MovieTap'>영화</Link></li>
                        <li><Link to='/SportsTap'>스포츠</Link></li>
                        <li><Link to='/AnimeTap'>애니</Link></li>
                        <li><Link to='/NewsTap'>뉴스</Link></li>
                    </ul>
                    <ul className="tbox02">
                        <li><input type="text" placeholder="작품명을 입력하세요."/><p>🔍</p></li>
                        <li><Link to='/LoginPages'>로그인 </Link></li>
                        {/* <li><img src="img/vpace.jpg" alt="" /></li> */}
                    </ul>
                </div>
                {/* <div className="bottombox">
                        <TopMenu/>
                    <button type="button"><Link to=''>드라마</Link></button>
                    <button type="button"><Link to=''>로맨스</Link></button>
                    <button type="button"><Link to=''>코미디</Link></button>
                    <button type="button"><Link to=''>애니메이션</Link></button>
                    <button type="button"><Link to=''>스릴러</Link></button>
                    <button type="button"><Link to=''>미스터리</Link></button>
                    <button type="button"><Link to=''>모험</Link></button>
                    <button type="button"><Link to=''>액션</Link></button>
                    <button type="button"><Link to=''>판타지</Link></button>
                    <button type="button"><Link to=''>SF</Link></button>
                    <button type="button"><Link to=''>공포(호러)</Link></button>
                    <button type="button"><Link to=''>다큐멘터리</Link></button>
                </div> */}
            </div>
        </>
    )
}