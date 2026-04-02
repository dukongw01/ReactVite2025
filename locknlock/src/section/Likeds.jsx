import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import cancelBtn from '../../public/LnL_img/cancel.png'; 
import cart from '../../public/LnL_img/cart.png';

import './Likeds.css';

export default function Likeds(){

    

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

    // 장바구니 - localStorage 연동
    const [prodList, setProdList] = useState(() => {
        const listsave = localStorage.getItem('prodList');
        return listsave ? JSON.parse(listsave) : [];
    });

    // 장바구니 목록 - 상태 변동 저장
    useEffect(() => {
        localStorage.setItem('prodList', JSON.stringify(prodList));
        window.dispatchEvent(new Event('prodListUpdate'));
    }, [prodList]);

    // 장바구니 버튼 클릭 핸들러
    const cartHandle = (item) => {
        setProdList(prevCart => {
            const findProd = prevCart.find(pItem => pItem.sku === item.sku); // id 대신 sku로 비교
            if (!findProd) {
                alert(`${item.name} 장바구니에 담겼습니다.`);
                return [...prevCart, { ...item, count: 1 }];
            } else {
                alert(`${item.name} 수량이 1개 추가됐습니다.`);
                return prevCart.map(pItem =>
                    pItem.sku === item.sku ? { ...pItem, count: pItem.count + 1 } : pItem
                );
            }
        });
    };



    return(

        <div className="Liked-container">
            {/* 헤더 */}
            <div className="Liked-top">
                <h2>♥ 찜목록 ({likedList.length})</h2>
                <div>
                    <button onClick={clearLiked}>전체 삭제</button>
                </div>
            </div>

            {/* 찜목록 */}
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
                                {/* 장바구니 아이콘 */}
                                <div className="Cart-nonabsol">
                                    <button onClick={() => cartHandle(item)}>
                                        <img src={cart} alt="cart.png" />
                                    </button>
                                </div>
                                {/* 찜 제거 버튼 */}
                                <div className="cancel-like">
                                    <button onClick={() => toggleLiked(item)}><img src={cancelBtn} alt="cancelBtn"></img></button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
        </div>

    )
}