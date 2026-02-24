import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart(){

    
    //장바구니 목록
    const [cartIn, setCartIn] = useState(()=>{
        const saved = localStorage.getItem('cartIn');
        console.log("cart", saved);
        return saved ? JSON.parse(saved):[];
    });

    const [cartTotal, setCartTotal]=useState(0);

    const handleCheck = (id, isChecked) => {
        if (isChecked) {
            setCheckedItems([...checkedItems, id]); // 체크 추가
        } else {
            setCheckedItems(checkedItems.filter((itemId) => itemId !== id)); // 해제 제거
        }
    };

    //전체 선택 및 해제
    const handleAllCheck = (isChecked) => {
        if (isChecked) {
            const allIds = cartIn.map((item) => item.id);
            setCheckedItems(allIds);
        } else {
            setCheckedItems([]);
        }
    };

    //선택 삭제 함수
    const deleteChecked = () => {
        if (checkedItems.length === 0) {
            alert("삭제할 상품 선택");
            return;
        }

        if (window.confirm("선택 상품을 삭제하시겠습니까?")) {
            const updatedList = cartIn.filter((item) => !checkedItems.includes(item.id));
            setCartIn(updatedList);
            setCheckedItems([]); // 삭제 후 체크 상태 초기화
        }
    };

    //선택해서 개별 삭제
    const [checkedItems, setCheckedItems] = useState([]);

    //장바구니 변경마다 localStorag 저장
    useEffect(()=>{
        localStorage.setItem('cartIn', JSON.stringify(cartIn));
    },[cartIn])


    //장바구니 전체 삭제
    const cartClear = () => {
        setCartIn([]); //상태 초기화
        localStorage.removeItem('cartIn');
    };

    //상품 개별 삭제
    const itemClear = (id) => {
        if (alert.confirm("장바구니를 비우시겠습니까?"))
            { setCartIn([]); }};

    //합계
    const cartInCopy = [...cartIn];
    //수량 증가
    const plusbtn = (id) => {
        const findPlus = cartInCopy.find((cartItem) => cartItem.id === id)
        console.log(findPlus+"수량 증가");
        if(findPlus !== undefined){
            findPlus.count += 1;
            setCartIn(cartInCopy)
        };
    };

    //수량 감소
    const minusbtn = (id) => {
        const findMinus = cartInCopy.find((cartItem)=>cartItem.id === id)
        console.log(findMinus+"수량 감소")
        if(findMinus !== undefined && findMinus.count >1){
            findMinus.count=findMinus.count -1;
            setCartIn(cartInCopy)
        }
    }

    //수량 변경
    const updateCount = (id, amount) => {
        setCartIn( cartIn.map((item) =>
            item.id === id ? { ...item, count: Math.max(1, item.count + amount) }: item)
    );};

    //가격 총계
    useEffect(()=>{
        let totalPrice = 0;
        for(let i=0; i<cartIn.length; i++){
            totalPrice += cartIn[i].price * cartIn[i].count;
        } setCartTotal(totalPrice);
    },[cartIn])





    // ------------------ 테이블 --------------


    return(
        <div className="cart-container">
            <div className="table-box">
                {/* 삭제버튼 선택 및 전체 */}
                <div className="cart-controls">
                    <button onClick={deleteChecked}>선택 삭제</button>
                    <button onClick={() => setCartIn([])}>전체 삭제</button>
                </div>
                {/* 테이블 영역 */}
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" 
                                    onChange={(e) => handleAllCheck(e.target.checked)}
                                    checked={checkedItems.length === cartIn.length && cartIn.length > 0}/>
                                전체선택
                            </th>
                            <th>상품명</th>
                            <th>가격</th>
                            <th>수량</th>
                            <th>합계</th>
                            <th>수량조절</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartIn.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <input type="checkbox" 
                                        checked={checkedItems.includes(item.id)}
                                        onChange={(e) => handleCheck(item.id, e.target.checked)}/>
                                    <img src={`bandi_img/${item.title}`} alt={item.name} />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}원</td>
                                <td>{item.count}개</td>
                                <td>{item.price * item.count}원</td>
                                <td>
                                    <button onClick={() => plusbtn(item.id)}>+</button>
                                    <p>{item.count}</p>
                                    <button onClick={() => minusbtn(item.id)}>-</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h3>총 결제 금액: {cartTotal}원</h3>
        </div>


    )

}
