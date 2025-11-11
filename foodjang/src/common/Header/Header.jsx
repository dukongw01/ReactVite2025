import { useState } from "react";
import { Link } from "react-router-dom";
import '../Header/Header.css';
import Login from "./LOGIIN/Login";
import LikelistContext from './Likelist';
import Postadd from "./LOGIIN/postadd";



export default function Header(){
    
    return(
        <>
            <div className="HdContainer">
                <div className="HdTop">
                    <Link to=''> <p>지금 가입하고 <span>인기상품 혜택가</span>로 받아가세요.</p></Link>
                </div>

                <div className="Hdnav">
                    <p>+BOOK MARK</p>
                    <ul>
                        <li><Link to='/Login'>로그인</Link></li>
                        <li><Link to='/Likelist'>찜❤</Link></li>
                        <li><Link to='/postadd'>회원가입</Link></li>
                        <li><Link to=''>고객센터</Link></li>
                        <li><Link to=''>🛒/ 0</Link></li>
                    </ul>
                </div>
                
                <div className="logo">
                    <input type="text" placeholder="벌집 삼겹살"/>
                    <p>🔍</p>
                </div>

                <div className="Hdmenu">
                    <ul>
                        <li><Link to=''>▼ 전체 카테고리</Link></li><hr/>
                        <li><Link to=''>신상품</Link></li><hr/>
                        <li><Link to=''>베스트</Link></li><hr/>
                        <li><Link to=''>알뜰쇼핑</Link></li><hr/>
                        <li><Link to=''>🎁선물세트</Link></li><hr/>
                        <li><Link to=''>이벤트</Link></li><hr/>
                        <li><Link to=''>스토리</Link></li>
                    </ul>
                </div>
                <hr/>
                <div className="slider"></div>
            </div>
        </>
    )
}