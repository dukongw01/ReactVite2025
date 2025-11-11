import { useState } from "react";

export default function MenuItemList(props){
    const tableMenu=[
        {id:1, name:'육회비빔밥', price:11900},
        {id:2, name:'참치비빔밥', price:10900},
        {id:3, name:'콩나물비빔밥', price:9000},
        {id:4, name:'갈비도시락', price:11900},
        {id:5, name:'삼겹도시락', price:11900},
        {id:6, name:'소세지도시락', price:10900},
        {id:7, name:'된장찌개', price:9000},
        {id:8, name:'김치찌개', price:10000},
        {id:9, name:'순두부찌개', price:9000}
    ]
    const [cart, setCart]=useState([]);
    const addCart=(tableMenu)=>{
        let cartCopy=[...cart]
        const index = cart.findIndex( (item) => item.id === tableMenu.id )
        if (index !== -1){
            cartCopy[index].quantity += 1;
        }else{
            cartCopy.push({id:tableMenu.id,
                name:tableMenu.name,
                price:tableMenu.price,
                quantity:1
            })
        }
        setCart(cartCopy);
    }
    return(
        <>
            <div>
                < MenuItemList [addCart={addCart}] />
            </div>
        </>
    )
}