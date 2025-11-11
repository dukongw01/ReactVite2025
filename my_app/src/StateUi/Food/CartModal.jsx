import { useState } from "react";

export default function CartModal(props){
    return(
        <>
            <div>
                <div>
                    <h3>장바구니</h3>
                    {props.cart.lehgth === 0 ?
                    <p>상품을 담아주세요.</p> : <ul>{props.cart.map((cartItem)=>(
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