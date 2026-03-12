import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './HeaderPage.css';

export default function HeaderPage() {
    
    const [hidemenu, setHidemenu] = useState(null);
    const [cartCount, setCartCount] = useState(0);

    const updateCartCount = () => { //장바구니에 담긴 상품의 숫자
        //웹 로컬스토리지에 담긴 아이템 목록 저장 - F12를 눌러 액세스를 보면 localStorage와 쿠키 등이 나옴. 이곳에 저장.
        const saved = localStorage.getItem('cartList');
        if (saved) {
            const cartList = JSON.parse(saved); //데이터 복원: JSON.parse(saved)
            // saved라는 변수에 담긴 JSON 문자열을 JavaScript 객체(배열)로 변환
            // 장바구니 데이터는 브라우저에 저장할 때 문자열 형태로 저장
            const total = cartList.reduce((sum, item) => sum + (Number(item.count) || 0), 0); //(ai추출)
            // 합계 계산: reduce() 함수
            // Number(item.count) || 0: 에서 item.count가 문자열일 수도 있으니 Number()를 이용해 숫자로 바꾼다.
            setCartCount(total);
        } else {
            setCartCount(0);
        }
    };

    // ai 추출
    useEffect(() => {
        updateCartCount(); // 초기 로드 시 실행
        // 커스텀 이벤트 및 스토리지 이벤트 리스너 등록
        window.addEventListener('cartUpdate', updateCartCount); //addEventListener는 중복 등록 가능: 하나의 이벤트에 여러 개의 함수를 연결해도 앞의 코드를 덮어쓰지 않고 모두 실행함
        //윈도우(브라우저 창)에 특정 상황(설정된 이벤트) 발생하면 addEventListener에 등록된 ('storage', updateCartCount)에 담긴 함수들 실행한다.
        window.addEventListener('storage', updateCartCount);
        return () => {
            window.removeEventListener('cartUpdate', updateCartCount);
            window.removeEventListener('storage', updateCartCount);
        };
    }, []);


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
                                    <li><Link to='/InHouse'>인 하우스</Link></li>
                                    <li><Link to='/Cureix'>큐릭스</Link></li>
                                </ul>
                            )}
                        </li>
                        
                        <li><Link to='/NailFilter' className="main-link">PRODUCT</Link></li>
                        <li><Link to='/EventPage' className="main-link">EVENT</Link></li>
                        
                        {/* COMMUNITY */}
                        <li className="menu-item"
                            onMouseEnter={() => setHidemenu('community')} 
                            onMouseLeave={() => setHidemenu(null)}>
                            <Link to='/Notice' className="main-link">COMMUNITY</Link>
                            {hidemenu === 'community' && (
                                <ul className="dropnavi">
                                    <li><Link to='/Notice'>공지사항</Link></li>
                                    <li><Link to='/LoginPage'>문의답변</Link></li>
                                    <li><Link to='/MemberShipPage'>멤버십</Link></li>
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
                        <li className="cart-icon-wrapper">
                            <Link to='/Cart'>
                                <img src='/bandi_img/cart.png' alt="cart" />
                                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}