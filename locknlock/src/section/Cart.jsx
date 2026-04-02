import { useState, useEffect, useMemo } from "react";
import './Cart.css';

export default function Cart() {

    // 장바구니 목록 초기화 localStorage
    const [cartList, setCartList] = useState(() => {
        const saved = localStorage.getItem('prodList');
        return saved ? JSON.parse(saved) : [];
    });

    // 선택된 아이템 sku 관리
    const [checkedItems, setCheckedItems] = useState(() => {
        const saved = localStorage.getItem('prodList');
        const list = saved ? JSON.parse(saved) : [];
        return list.map(item => item.sku); // 전체 sku를 기본 체크 상태
    });

    // 전체 선택 상태 여부
    const isAllChecked = cartList.length > 0 && checkedItems.length === cartList.length;
    
    // 장바구니 변경 시 localStorage 자동 저장 및 이벤트 발생
    useEffect(() => {
        localStorage.setItem('prodList', JSON.stringify(cartList));
        // 브라우저 전체에 수량 변경 신호 발생
        window.dispatchEvent(new Event('cartUpdate'));
    }, [cartList]);

    // cartList 변경 시 새로 추가된 항목 자동 체크
    useEffect(() => {
        const allSkus = cartList.map(item => item.sku);
        setCheckedItems(allSkus);
    }, [cartList]);

    // 선택된 아이템들의 합계 금액만 계산
    // useMemo: 목록이 안 변했으면 캐시된 값 재사용
    const selectedTotal = useMemo(() => {
        return cartList
            .filter(item => checkedItems.includes(item.sku))
            .reduce((sum, item) => {
                const discounted = Math.floor(item.basePrice * (1 - (item.discountRate || 0) / 100));
                return sum + discounted * item.count;
            }, 0);
    }, [cartList, checkedItems]);


    // --- 핸들러 ---

    // 체크박스 개별 조절
    const checkItem = (sku, isChecked) => {
        if (isChecked) {
            setCheckedItems(prev => [...prev, sku]);
        } else {
            setCheckedItems(prev => prev.filter((id) => id !== sku));
        }
    };

    // 전체 선택 / 해제
    const checkAll = (isChecked) => {
        if (isChecked) {
            const allSkus = cartList.map((item) => item.sku);
            setCheckedItems(allSkus);
        } else {
            setCheckedItems([]);
        }
    };

    // 선택 삭제
    const removeChecked = () => {
        if (checkedItems.length === 0) {
            alert("삭제할 상품을 선택해주세요.");
            return;
        }
        if (window.confirm("선택한 상품을 삭제하시겠습니까?")) {
            setCartList(cartList.filter((item) => !checkedItems.includes(item.sku)));
            setCheckedItems([]);
        }
    };

    // 장바구니 전체 비우기 — 인라인에서 함수로 분리
    const clearCart = () => {
        if (window.confirm("전체 삭제하시겠습니까?")) {
            setCartList([]);
            setCheckedItems([]);
        }
    };

    // 수량 변경
    // Math.max(1, ...) — 최소 1개 미만으로 내려가지 않도록 제한
    const changeCount = (sku, amount) => {
        setCartList(prevList =>
            prevList.map((item) =>
                item.sku === sku
                    ? { ...item, count: Math.max(1, item.count + amount) }
                    : item
            )
        );
    };


    return (
        <div className="cart-container">
            {/* 타이틀 */}
            <h2>장바구니 <strong>({cartList.length})</strong></h2>

            <div className="table-box">
                {/* 컨트롤 버튼 */}
                <div className="cart-controls">
                    <button className="ch-btn" onClick={removeChecked}>선택 삭제</button>
                    <button className="de-btn" onClick={clearCart}>전체 삭제</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th className="th-check">
                                <input
                                    type="checkbox"
                                    id="all-check"
                                    onChange={(e) => checkAll(e.target.checked)}
                                    checked={isAllChecked}
                                />
                                <label htmlFor="all-check">전체선택</label>
                            </th>
                            <th className="th-name">상품명</th>
                            <th className="th-count">수량</th>
                            <th className="th-price">가격</th>
                            <th className="th-control">{/* 공란 */}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartList.length > 0 ? (
                            cartList.map((item) => {
                                const unitPrice = Math.floor(item.basePrice * (1 - (item.discountRate || 0) / 100));
                                return (
                                    <tr key={item.sku}>
                                        <td className="td-check">
                                            <div className="td-check-inner">
                                                <input
                                                    type="checkbox"
                                                    checked={checkedItems.includes(item.sku)}
                                                    onChange={(e) => checkItem(item.sku, e.target.checked)}
                                                />
                                                <img
                                                    className="cart-thumb"
                                                    src={`../LnL_img/allProductIMG/${item.thumbnail}-01.jpg`}
                                                    alt={item.name}
                                                />
                                            </div>
                                        </td>
                                        <td className="td-name">{item.name}</td> {/* 아이템 이름 */}
                                        <td className="td-count">{item.count}개</td> {/* 아이템 수량 */}
                                        <td className="td-price">
                                            {(unitPrice * item.count).toLocaleString()}원 {/* 아이템 할인가 */}
                                            <strong>{item.discountRate ? `${item.discountRate}%` : null}</strong> {/* 퍼센티지 */}
                                        </td>
                                        <td className="td-control"> {/* 아이템 수량 버튼 */}
                                            <div className="count-control">
                                                <button onClick={() => changeCount(item.sku, -1)}>-</button>
                                                <span>{item.count}</span>
                                                <button onClick={() => changeCount(item.sku, 1)}>+</button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={5} className="td-empty">장바구니가 비어 있습니다.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* 총 금액 */}
            <div className="total-section">
                <h4>선택 상품 총 합계:</h4>
                <h3>{selectedTotal.toLocaleString()}원</h3>
            </div>

            {/* 주문 버튼 */}
            <div className="total-buy-btn">
                <button className="tt-b-btn01" disabled={checkedItems.length === 0}>선택 상품주문</button>
                <button className="tt-b-btn02" disabled={cartList.length === 0}>전체 상품주문</button>
            </div>
            <div className="pay-gateways">
                <p className="non-member-order">비회원 구매</p>
                <button className="npay-btn">ⓝPAY 구매</button>
                <button className="kaopay-btn">KAKAO PAY</button>
            </div>
        </div>
    );
}