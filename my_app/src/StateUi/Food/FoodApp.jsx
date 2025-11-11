import { useState } from "react";

import CartModal from "../Food/CartModal";
import FoodList from "../Food/FoodList";

export default function FoodApp(){
    const [istFood]=useState([
        {id:1, name:'치킨', price:12000},
        {id:2, name:'피자', price:25000},
        {id:3, name:'햄버거,', price:50000}
    ]);
    // 장바구니
    const[cart, setCart]=useState([]);
    const[showCart, setShowCart]=useState(false);

    const addCart = (istFood) => {
        let cartCopy = [...cart]

        const index = cart.findIndex( (item) => item.id === istFood.id )
        if (index !== -1){
            //수량 증가
            cartCopy[index].quantity += 1;
        }else{
            cartCopy.push({id:istFood.id,
                name:istFood.name,
                price:istFood.price,
                quantity:1})
        }
        setCart(cartCopy);
        console.log('담김?'+cartCopy)
    }

    return(
        <>
        <div>
           <h2>음식 주문🌭</h2>
            <button type="button" onClick={() => setShowCart(true)}>장바구니</button>
            {/* FoodList ui 출력 */}
            <FoodList istFood={istFood} addCart={addCart}/>
            {/* true면 CartModal 보이기, 아니면 null */}
            {showCart === true ? <CartModal cart={cart} onClose={()=>setShowCart(false)}/>:null}           
        </div>
        </>
    )
}