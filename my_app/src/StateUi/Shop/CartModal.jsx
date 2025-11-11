import { useLayoutEffect, useState } from "react";

export default function CartModal(props){
    return(
        <>
            <div>
                <div>
                    <h3>장바구니</h3>
                    {/* cart.length === 0 이면 '비어있습니다.' */}
                    {/* 아니면 랜더해서 그리기 */}
                    {props.cart.lehgth === 0 ?
                    <p>비어있습니다.</p> : <ul>{props.cart.map((cartItem)=>(
                        <li key={cartItem.id}>
                            <span>{cartItem.name}x{cartItem.quantity}</span>
                        </li>
                    ))}</ul>}
                    <button type="button" onClick={props.onClose}>닫기</button>
                </div>
            </div>
        </>
    )
}