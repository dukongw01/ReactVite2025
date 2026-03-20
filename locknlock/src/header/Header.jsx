import { Link } from 'react-router-dom';

import Logo from '../../public/LnL_img/Logo.png';
import search from '../../public/LnL_img/search.png';
import like from '../../public/LnL_img/like.png';
import user from '../../public/LnL_img/user.png';
import cart from '../../public/LnL_img/cart.png';
import './Header.css';
import Navbar from "../navigation/Navbar";


export default function Header({categoryFilter, setCategoryFilter}){

    // const placeRandom

    return(
        <div className="Header-container">
            <div className='PPL-bar'><p>광고영역</p></div>
            <div className="Header-fit">
                <div className="Header-left"> {/* 로고 */}
                    <Link to='/Main'><img src={Logo} alt="Logo" /></Link>
                </div>
                <div className="Header-center"> {/* 검색 */}
                    <input type="text" placeholder='이벤트'/>
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
        </div>
    )

}