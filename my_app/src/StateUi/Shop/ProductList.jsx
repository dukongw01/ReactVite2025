import { useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props){
    // <ul>만 생성 할 예정
    return(
        <>
            <ul>
                {props.Products.map((product)=>(
                    <ProductItem key={product.id}
                    product={product}
                    addCart={props.addCart} />
                ))}
            </ul>
        </>
    )
}