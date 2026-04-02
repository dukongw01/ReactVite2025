import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Logo from '../../public/LnL_img/Logo.png';
import search from '../../public/LnL_img/search.png';
import like from '../../public/LnL_img/like.png';
import user from '../../public/LnL_img/user.png';
import cart from '../../public/LnL_img/cart.png';
import './Header.css';
import Navbar from "../navigation/Navbar";


export default function Header({setCateFilter}){

    const [cartCount, setCartCount] = useState(0);

    const updateCartCount = () => { {/* 장바구니에 담긴 상품의 숫자 */}
        // 웹 로컬스토리지에 담긴 아이템 목록 저장
        const saved = localStorage.getItem('prodList'); {/* cartList → prodList 키 통일 */}
        if (saved) {
            const cartList = JSON.parse(saved); {/* JSON 문자열을 JavaScript 배열로 복원 */}
            // reduce() — 장바구니 전체 수량 합산
            // Number(item.count) || 0 — item.count가 문자열일 경우 숫자로 변환
            const total = cartList.reduce((sum, item) => sum + (Number(item.count) || 0), 0);
            setCartCount(total);
        } else {
            setCartCount(0);
        }
    };

    useEffect(() => {
        updateCartCount(); {/* 초기 로드 시 실행 */}
        // 커스텀 이벤트 및 스토리지 이벤트 리스너 등록
        // addEventListener — 하나의 이벤트에 여러 함수 연결 가능, 앞 코드를 덮어쓰지 않음
        window.addEventListener('cartUpdate', updateCartCount);
        window.addEventListener('storage', updateCartCount);
        return () => { {/* 클린업 — 컴포넌트 언마운트 시 리스너 제거 */}
            window.removeEventListener('cartUpdate', updateCartCount);
            window.removeEventListener('storage', updateCartCount);
        };
    }, []);


    return(
        <div className="Header-container">
            {/* PPL 광고 바 */}
            <div className='PPL-bar'>
                <Link to='/Login'><p>공식몰 회원 전용 | <span>웰컴쿠폰·추가할인쿠폰·사은품 보러가기　＞</span></p></Link>
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
                    <Link to='/Cart'>
                        <img src={cart} alt="장바구니" />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                </div>
            </div>

            {/* 네비게이션 */}
            <div className="Nav-container">
                <Navbar setCateFilter={setCateFilter}/>
            </div>
        </div>
    )
}