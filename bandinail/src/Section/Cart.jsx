import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart({}){

    

    const [cartTotal, setCartTotal]=useState(0);


    //장바구니 전체 삭제
    const cartClear = () => {
        setCartList([]); //상태 초기화
        localStorage.removeItem('cartList');
    };

    //상품 개별 삭제
    const itemClear = (id) => {
        const CartList = cartList.filter((item) => item.id !== id);
        setCartList(CartList);
    };

    //수량 증가 감소
    const cartListCopy = [...cartList];
    const plus = (id) => {
        const findPlus = cartListCopy.find((cartItem) => cartItem.id === id)
        console.log(findPlus+"수량 증가");
        if(findPlus !== undefined){
            findPlus.count += 1;
            setCartList(cartListCopy)
        };
    };

    const minus = (id) => {
        const findMinus = cartListCopy.find((cartItem)=>cartItem.id === id)
        console.log(findMinus+"수량 감소")
        if(findMinus !== undefined && findMinus.count >1){
            findMinus.count=findMinus.count -1;
            setCartList(cartListCopy)
        }
    }

    //가격 총계
    useEffect(()=>{
        let totalPrice = 0;
        for(let i=0; i<cartList.length; i++){
            totalPrice += cartList[i].price * cartList[i].count;
        } setCartTotal(totalPrice);
    },[cartList])




    // ------------------ 테이블 --------------


    return(
        <div className="cart-container">
            {/* 장바구니 */}
            <div className="table-box">
                <table>
                    <caption>
                        <h1>dkdldl</h1>
                    </caption>
                </table>
            </div>
        </div>
    )


}