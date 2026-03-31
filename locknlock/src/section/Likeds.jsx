import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import cancelBtn from '../../public/LnL_img/cancel.png'; 

import './Likeds.css';

export default function Likeds({AllData}){


    // 찜목록 - localStorage 연동
    const [likedList, setLikedList] = useState(() => {
        const saved = localStorage.getItem('likedList');
        return saved ? JSON.parse(saved) : [];
    });

    // 찜목록 변경 시 localStorage 저장
    useEffect(() => {
        localStorage.setItem('likedList', JSON.stringify(likedList));
    }, [likedList]);

    // 찜 추가 / 제거 토글
    const toggleLiked = (item) => {
        setLikedList(prev => {
            const exists = prev.find(i => i.id === item.id);
            if (exists) return prev.filter(i => i.id !== item.id);
            else return [...prev, item];
        });
    };

    // 찜목록 전체 비우기
    const clearLiked = () => {
        if(window.confirm('찜목록을 전부 비우시겠습니까?')){
            setLikedList([]);
        }
    };

    // 찜목록 표시 토글
    const [showLiked, setShowLiked] = useState(true);



    return(

        <div className="Liked-container">
            {/* 헤더 */}
            <div className="Liked-top">
                <h2>♥ 찜목록 ({likedList.length})</h2>
                <div>
                    <button onClick={() => setShowLiked(prev => !prev)}>
                        {showLiked ? '목록 숨기기' : '목록 보기'}
                    </button>
                    <button onClick={clearLiked}>전체 삭제</button>
                </div>
            </div>

            {/* 찜목록 */}
            {showLiked && (
                <ul className="Liked-list">
                    {likedList.length === 0
                        ? <p className="Liked-empty">찜한 상품이 없습니다.</p>
                        : likedList.map(item => (
                            <li key={item.id} className="Liked-card">
                                {/* 상품 클릭 시 상세페이지 이동 */}
                                <Link to={`/DetailProd/${item.id}`}>
                                    <img
                                        src={`../LnL_img/allProductIMG/${item.thumbnail}-01.jpg`}
                                        alt={item.name}
                                    />
                                    <p>{item.name}</p>
                                    <p>{(item.basePrice * (1 - item.discountRate / 100)).toLocaleString()}원
                                        <strong>{item.discountRate ? `${item.discountRate}%` : null}</strong>
                                    </p>
                                </Link>
                                {/* 찜 제거 버튼 */}
                                <button onClick={() => toggleLiked(item)}><img src={cancelBtn} alt="cancelBtn"></img></button>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>

    )
}