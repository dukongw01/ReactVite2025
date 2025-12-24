import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Cart.css';

export default function Cart({datalist}){

    // 장바구니 목록 
    const [cartlist, setCartlist] = useState(()=>{
            const saved = localStorage.getItem('cartlist');
            return saved? JSON.parse(saved):[];
            console.log("cart자료",saved);
        });

    // 장바구니 목록 삭제
    const clearcart = () => {
        setCartlist([]); //상태 초기화
        localStorage.removeItem('cartlist');
    };
    // 합계
    //const totalcart = cart.reduce((item)=>(item.price),0);

    const [count, setCount] = useState(1);
    const plus = () => setCount(count+1);
    const minus = () => { if (count > 1) setCount(count-1);}


    return(
        <div className="cart-container">
            <div className="table-box">
                <table> {/* 장바구니 테이블 */}
                    <caption><input type="checkbox" />장바구니 <p>총 상품:</p></caption>
                        <tr>
                            <th className="big-th">상품 정보</th>
                            <th className="small-th">수량</th>
                            <th className="small-th">주문금액</th>
                            <th className="small-th">배송정보</th>
                        </tr>
                        {/* 상품정보 */}
                            {cartlist.map((item)=>
                               <tr>
                                    <td key={item.id} className="table-center-title">
                                        <input type="checkbox" />
                                        <img src={`/img/${item.title}`} alt={item.name}/>
                                        <p>{item.name}</p>
                                    </td>
                                    <td>
                                        <div className="table-btnbox">
                                            <button type="button" onClick={minus}>-</button>
                                            <p>{count}</p>
                                            <button type="button" onClick={plus}>+</button>
                                        </div>
                                        {cartlist.length > 0 && ( <button onClick={clearcart}>삭제</button> ) } {/* 삭제 버튼 */}
                                    </td> {/* 수량 */}
                                    <td className="rmador"><p>{item.price.toLocaleString('ko')}원</p></td> {/* 주문금액 */}
                                    <td className="qothd" rowspan><p>배송비:<span></span></p></td>
                                </tr>
                            )}
                </table>
                <div className="table-btm">
                    <p><span>총 상품 금액: </span><strong>원</strong></p>
                    <button type="button">선택 상품주문</button>
                </div>
            </div>
            <div className="cart-buybtn">
                <button className="naverbtm" type="button">네이버 페이</button>
                <button className="cocobtm" type="button">주문하기</button>
            </div>
        </div>
    )
    
}