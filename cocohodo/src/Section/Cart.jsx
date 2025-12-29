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

    const [total, setTotal] = useState(0);   

      // cart가 바뀔때마다 localStorage에 저장
    useEffect(()=>{
        localStorage.setItem('cartlist', JSON.stringify(cartlist));
    },[cartlist]);    

    // 장바구니 전체 삭제
    const clearcart = () => {
        setCartlist([]); //상태 초기화
        localStorage.removeItem('cartlist');
    };
    
    // 합계
    //const totalcart = cart.reduce((item)=>(item.price),0);
    const cartlistCopy = [...cartlist]
    const plus = (id) => {
        
        const findplus = cartlistCopy.find((cartItem) => cartItem.id === id)
        console.log("장바구니 수량 증가")
        console.log(findplus);
        if(findplus !== undefined){
            findplus.count += 1;
            setCartlist(cartlistCopy)
        }
    }

    const minus = (id) => {
      //  const cartlistCopy = [...cartlist]
        const findminus = cartlistCopy.find((cartItem) => cartItem.id === id)
        console.log("장바구니 수량 감소")
        console.log(findminus);
        if(findminus !== undefined && findminus.count >1 ){
            findminus.count = findminus.count -1;
            // findminus.count -= 1
            setCartlist(cartlistCopy)
        }
    }

    const delbtn = (id) => {
     //   const cartlistCopy = [...cartlist]
        const delindex = cartlistCopy.findIndex((cartItem) => cartItem.id === id)
        if(delindex !== -1){
            cartlistCopy.splice(delindex,1)
            setCartlist(cartlistCopy)
        }
    }

    // 가격 총 합계
    useEffect(()=>{
        let totaltemp=0;
        for(let i=0; i<cartlist.length; i++){
            totaltemp += cartlist[i].price * cartlist[i].count;
        }
        setTotal(totaltemp);
    },[cartlist])


    return(
        <div className="cart-container">
            <div className="table-box">
                {/* 장바구니  */}
                <table>
                    <caption>
                        <div className="capbox">
                            <h2>장바구니<p>총: <strong>{cartlist.length}</strong>개</p></h2>
                            <button onClick={clearcart}>전체 삭제</button>
                        </div>
                    </caption>
                    <tbody>
                        <tr className="th-bold">
                            <th className="big-th">상품 정보</th>
                            <th className="small-th">수량</th>
                            <th className="small-th">주문금액</th>
                            <th className="small-th">배송정보</th>
                        </tr>
                        {/* 상품정보 */}
                            {cartlist.map((item, index)=>
                               <tr key={item.id}>
                                    <td  className="table-center-title">
                                        <input type="checkbox" />
                                        <img src={`/img/${item.title}`} alt={item.name}/>
                                        <p>{item.name}</p>
                                    </td>
                                    <td className="table-rigt">
                                        <div className="table-btnbox">
                                            <button type="button" onClick={()=>minus(item.id)}>-</button>
                                            <p>{item.count}</p>
                                            <button type="button" onClick={()=>plus(item.id)}>+</button>
                                        </div>
                                        <button onClick={()=>delbtn(item.id)}>삭제</button>
                                    </td>
                                    <td className="rmador"><p>{item.price.toLocaleString("ko")}원</p></td>
                                    {index === 0 && (<td className="qothd" rowSpan={cartlist.length}><p>배송비:<span>{item.price >= 50000 ? 0 : 3000}원<br/></span>(조건부 무료)</p></td>)}
                                </tr>
                            )}
                    </tbody>
                </table>
                <div className="table-btm">
                    <p><span>총 상품 금액: </span><strong>{total.toLocaleString("ko")}원</strong></p>
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