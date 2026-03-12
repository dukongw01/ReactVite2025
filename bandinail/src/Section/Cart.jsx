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
    useEffect(() => { //useEffect 훅을 사용하여 장바구니 상태(cartList)가 변할 때마다 데이터를 저장
        localStorage.setItem('cartList', JSON.stringify(cartList)); //.stringify 객체나 배열을 하나의 긴 문자열(String)로 만드는 역할
        //컴퓨터 메모리에 복잡하게 얽혀 있는 데이터를 어딘가에 저장하거나 전송하기 쉬운 '텍스트' 형태로 포장 = .stringify
        // 수량이 변경
        window.dispatchEvent(new Event('cartUpdate'));
        //.dispatchEvent 보통 리액트의 상태는 부모-자식 간에만 전달되지만, 이 코드는 브라우저 전체에 신호를 보낸다.
        //데이터가 멀리 떨어져 있어도 실시간 수신할 수 있게 만들어준다.
    }, [cartList]);

    //합계 금액 계산
    const cartTotal = useMemo(() => { //useMemo는 계산 결과값을 메모리(캐시)에 저장해두는 훅이다.
        //미리 계산해둔 값을 그대로 재사용 할 수 있어서 편리하다.
        //목록이 안 변했으면 다시 계산하지 말고 전에 계산한 것 적용
        return cartList.reduce((sum, item) => sum + item.price * item.count, 0);
    }, [cartList]);


    // --- 핸들러 ---

    // 체크박스 개별 조절
    const handleCheck = (id, isChecked) => {
        // 체크박스가 체크된 상태(true)인지 해제된 상태(false)인지 알리는 불리언(Boolean) 값
        if (isChecked) {
            setCheckedItems(prev => [...prev, id]);
            // Spread 연산자: 기존 배열(...prev)의 내용물을 낱개로, 맨 뒤에 새 id를 붙여서 배열을 만든다.
            // 상태를 변경할 때 원본을 직접 수정하지 않고 부여하는 방식
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
        }if (window.confirm("선택한 상품을 삭제하시겠습니까?")) { //.confirm => 의사 결정. 모달 띄우기
            const updatedList = cartList.filter((item) => !checkedItems.includes(item.id));
            // 배열이나 문자열에 특정한 값이 포함되어 있는지를 확인, 결과에 따라 true 또는 false를 반환하는 함수
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
        // max 값을 정해서 가장 큰 수를 선택. 가장 큰 수를 결과로 내놓는다.
        // 장바구니 수량이 최소 1개 밑으로 내려가지 않도록 한다.
        // Math.max(1, 0) 는 1 은 0보다 크므로 1에서 멈춤
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
                                            {/* e.target => 내가 요소(Element)를 콕 찝어서 이벤트를 실행시킨다. */}
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