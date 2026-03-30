import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({setCateFilter}){


    const navigate = useNavigate();
    
    // 탭 버튼 클릭 시: 카테고리 상태 변경 + ProductPage로 이동
    const TapFilter = (num) => {
        // 카테고리 매핑
        const cateMap = {
            1: 'Appliances',
            2: 'Cooking',
            3: 'Kitchen',
            4: 'Outdoor',
            5: 'Storage',
            6: 'Sundries',
            7: 'Best'
        };
        // 전체(0)는 빈 문자열, 나머지는 매핑값 — App의 cateFilter 상태 업데이트
        setCateFilter(cateMap[num] ?? '');
        navigate('/ProductPage');  {/* 버튼 클릭 시 ProductPage로 이동 */}
    };
    


    return(

        <div className="Navbar-container">
            <div className='Nav-box'>
                <ul>
                    <li><button onClick={() => TapFilter(0)}>··· 전체상품</button></li>
                </ul>
                <ul>
                    <li><button onClick={() => TapFilter(7)}>베스트</button></li>
                    <li><button onClick={() => TapFilter(1)}>가전</button></li>
                    <li><button onClick={() => TapFilter(2)}>조리</button></li>
                    <li><button onClick={() => TapFilter(3)}>주방</button></li>
                    <li><button onClick={() => TapFilter(4)}>야외</button></li>
                    <li><button onClick={() => TapFilter(5)}>보관</button></li>
                    <li><button onClick={() => TapFilter(6)}>잡화</button></li>
                    <li><button><Link to='/Event'>이벤트</Link></button></li>
                </ul>
            </div>
        </div>

    )



}