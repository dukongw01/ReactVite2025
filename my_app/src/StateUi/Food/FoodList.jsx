import { useState } from "react";

export default function FoodList(props){
    return(
        <>
            <ul>
                {props.istFood.map((istFood)=>(
                    <FoodList key={istFood.id}
                    istFood={istFood}
                    addCart={props.addCart} />
                ))}
                <li>
                {props.product.name} - {props.product.price}원
                <button type="button" onClick={()=> props.addCart(props.product)}>담기</button>
                </li>
            </ul>        
        </>
    )
}