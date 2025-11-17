import { useSelector,useDispatch } from "react-redux";
import { deleteItem,plusQuantity,minusQuantity } from "../store02/cartSlice";
import { useEffect, useState } from "react";

export default function CartPage(){
    const dispatch = useDispatch()
    const items = useSelector((state)=>state.cart.item)
    const [total, setTotal]=useState(0)

    // 총계 함수
    useEffect(()=>{
        let totalTemp = 0
        for(let i=0; i<items.length; i++){
            totalTemp += items[i].price * items[i].quantity }
        setTotal(totalTemp)
    },[items])

    return(
        <>
            <h3>장바구니 보기</h3>
            {items.length === 0? (<p>장바구니가 비었습니다</p>):(
                <ul>
                    {item.map((item) => (<li key={item.id}>
                        <img src={item.thumnail} alt={item.title} />
                        {item.title} x {item.quantity} -{item.price} - 원
                        
                        <button type="button" onClick={()=>dispatch(plusQuantity(item.id))}>+</button>
                        <button type="button" onClick={()=>dispatch(minusQuantity(item.id))}>-</button>
                    </li>))}
                </ul>
                    
                }
                /* 수량 증가 함수 */
                plusQuantity:(state, action)=>{
                    const id = action.payload //CartPage.jsx의 +버튼 클릭시 내보내지는 item.id값
                    // id가 같은 상품만 수량 증가 필요
                    // state없이 item 접근 불가능
                    // 배열이름.find() 함수는 값이 없으면 undefind가 출력
                    const itemId = state.items.find((item)=>item.id===id)
                    if(itemId !== undefind){
                        // 상품이 존재한다면
                        itemId.quantity += 1;
                    }
                /* 수량 빼기 함수 */
                minusQuantity:(state, action)=>{
                    const id = action.payload
                    const itemId = state.items.find((item)=>item.id===id)
                    if(itemId !== undefind && itemId.quantity > 1){
                        itemId.quantity -= 1;
                    }
            )}

            {/* 총계 */}
            <h3> 총계:{} </h3>
        </>
    )
}