import Logo from '../../public/LnL_img/Logo.png';
import search from '../../public/LnL_img/search.png';
import like from '../../public/LnL_img/like.png';
import user from '../../public/LnL_img/user.png';
import cart from '../../public/LnL_img/cart.png';
import './Header.css';


export default function Header(){

    // const placeRandom

    return(
        <div className="Header-container">
            <div className='PPL-bar'><p>광고영역</p></div>
            <div className="Header-fit">
                <div className="Header-left"> {/* 로고 */}
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="Header-center"> {/* 검색 */}
                    <input type="text" placeholder='카카오톡 친구추가 이벤트'/>
                    <button type="button" className="search">
                        {/* 검색 */}<img src={search} alt="search.png" />
                    </button>
                </div>
                <div className='Header-right'>
                    <img src={user} alt="user.png" />
                    <img src={like} alt="like.png" />
                    <img src={cart} alt="cart.png" />
                </div>
            </div>
            <div className='Header-bottom'>
                    <ul>
                        <p>카테고리</p>
                        <li>{/* 세부 카테고리 */}
                            {/* 숨겨질 블록 */}
                            <div className='Header-hide-block'>
                                <ul>
                                    <li>베스트</li>
                                    <li>보관</li>
                                    <li>조리</li>
                                    <li>주방</li>
                                    <li>야외/여행</li>
                                    <li>가전</li>
                                    <li>생활잡화</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>베스트</li>
                        <li>신상품</li>
                        <li>이벤트</li>
                        <li>멤버십</li>
                    </ul>
            </div>
        </div>
    )

}