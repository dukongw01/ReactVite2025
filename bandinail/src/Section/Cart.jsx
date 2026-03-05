import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import './Cart.css';

export default function Cart() {
    
    // 장바구니 목록 초기화 localStorage
    const [cartList, setCartList] = useState(() => {
        const saved = localStorage.getItem('cartList');
        return saved ? JSON.parse(saved) : [];
    });


    //선택된 아이템 ID 관리
    const [checkedItems, setCheckedItems] = useState([]);


    //장바구니 변경 시 localStorage 자동 저장 및 헤더 알림
    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList));
        // 수량이 변경
        window.dispatchEvent(new Event('cartUpdate'));
    }, [cartList]);

    //합계 금액 계산
    const cartTotal = useMemo(() => {
        return cartList.reduce((sum, item) => sum + item.price * item.count, 0);
    }, [cartList]);


    // --- 핸들러 ---

    // 체크박스 개별 조절
    const handleCheck = (id, isChecked) => {
        if (isChecked) {
            setCheckedItems(prev => [...prev, id]);
        } else {
            setCheckedItems(prev => prev.filter((itemId) => itemId !== id));
        }
    };

    // 전체 선택/해제
    const handleAllCheck = (isChecked) => {
        if (isChecked) {
            const allIds = cartList.map((item) => item.id);
            setCheckedItems(allIds);
        } else {
            setCheckedItems([]);
        }
    };

    // 선택 삭제
    const deleteChecked = () => {
        if (checkedItems.length === 0) {
            alert("삭제할 상품을 선택해주세요.");
            return;
        }if (window.confirm("선택한 상품을 삭제하시겠습니까?")) {
            const updatedList = cartList.filter((item) => !checkedItems.includes(item.id));
            setCartList(updatedList);
            setCheckedItems([]); // 삭제 후 체크 상태 초기화
        }
    };

    // 장바구니 전체 비우기
    const cartClear = () => {
        if (window.confirm("장바구니를 모두 비우시겠습니까?")) {
            setCartList([]);
            setCheckedItems([]);
        }
    };

    // 수량 변경
    const updateCount = (id, amount) => {
        setCartList(prevList => 
            prevList.map((item) =>
                item.id === id 
                    ? { ...item, count: Math.max(1, item.count + amount) } 
                    : item)
        );
    };


    return (
        <div className="cart-container">
            <h2>장바구니 <strong>({cartList.length}</strong>)</h2> {/* 상품 가지 수 */}
            <div className="table-box">
                <div className="cart-controls">
                    <button className="ch-btn" onClick={deleteChecked}>선택 삭제</button>
                    <button className="de-btn" onClick={cartClear}>전체 삭제</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" id="all-check"
                                    onChange={(e) => handleAllCheck(e.target.checked)}
                                    checked={cartList.length > 0 && checkedItems.length === cartList.length}/>
                                <label htmlFor="all-check">
                                    전체선택
                                </label>
                            </th>
                            <th>상품명</th>
                            <th>수량</th>
                            <th>가격</th>
                            <th>{/* 공란 */}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartList.length > 0 ? (
                            cartList.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <input 
                                            type="checkbox" 
                                            checked={checkedItems.includes(item.id)}
                                            onChange={(e) => handleCheck(item.id, e.target.checked)} />
                                        <img src={`bandi_img/${item.title}.jpg`} alt={item.name} />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.count}개</td>
                                    <td>{(item.price * item.count).toLocaleString()}원</td>
                                    <td>
                                        <div className="count-control">
                                            <button onClick={() => updateCount(item.id, -1)}>-</button>
                                            <span>{item.count}</span>
                                            <button onClick={() => updateCount(item.id, 1)}>+</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>장바구니가 비어 있습니다.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="total-buy-btn">
                <button className="tt-b-btn01">선택 상품주문</button>
                <button className="tt-b-btn02">전체 상품주문</button>
            </div>
            <div className="total-section">
                <h4>총 주문 금액:</h4>
                <h3> {cartTotal.toLocaleString()}원</h3>
            </div>
            <div className="buy-pay-btn">
                <p className="opacity-text">비회원 구매</p>
                <button className="npay-btn">ⓝPAY 구매</button>
                <button className="kaopay-btn">KAKAO PAY</button>
            </div>
        </div>
    );
}