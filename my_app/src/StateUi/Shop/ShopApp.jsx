import { useState } from "react";

import CartModal from "../Shop/CartModal";
import ProductItem from "../Shop/ProductItem";
import ProductList from "../Shop/ProductList";

export default function ShopApp(){
    // 프로덕트에 
    const [Products]=useState([
        {id:1, name:'노트북', price:1200000},
        {id:2, name:'마우스', price:25000},
        {id:3, name:'키볻,', price:50000}
    ]);
    // 상품목록엔 수량이 존재하지 않는다
    // 상품목록을 수정할 수 없다
    // 장바구니에 수량을 추가하여 담기 -> 기존 상품의 수량을 비교
    // 상품이 존재하면 수량만 증가 기능을 구현할 수 있다
    const[cart, setCart]=useState([]);
    // 장바구니 모달 출력
    // 장바구니 출력 여부 제어
    // 현재 false -> 모달 close 상태
    const[showCart, setShowCart]=useState(false);
    // 1.기존의 장바구니에 담긴 상품이 존재하는지 비교하여
    // 존재하면 수량만 1씩 증가, 존재 않으면 product 모두 장바구니에 추가
    // 기존의 상품이 존재하는지의 여부를 판단하려면 상품 매개변수 필요

    // 아래 addCart는 자바스크립트 방식으로 구현 ----------
    const addCart = (product) => {
        // cart 얕은 복사
        let cartCopy = [...cart]
        let findCheck = false; //같은 상품이 존재하는지 여부 체크

        // 장바구니에 담긴 상품과 상품목록의 상품의 id가
        // 같은 게 존재하는지 확인하고 수량만 증가하는 부분
        for(let i=0; i<cart.length; i++){
            //상품비교는 product의 id 비교 : 고유한 값이기때문
            if(product.id === cartCopy[i].id){
                //상품 같은 게 존재 => 수량만 증가
                cartCopy[i].quantity += 1;
                findCheck = true;
                break;
            }
        }
        // 장바구니에 기존으 ㅣ상품과 같은 상품이 없을 때는 cart배열에 상품추가
        if (!findCheck){
            cartCopy.push({id:product.id,
                name:product.name,
                price:product.price,
                quantity:1})
        }
        setCart(cartCopy);
        console.log('장바구니 담김?'+cartCopy)
    }

    // // React 방식으로 작성한 함수 ----------------
    // const addCart02 = (product) => {
    //     // cart 얕은 복사
    //     let cartCopy = [...cart]

    //     // 장바구니에 담긴 상품과 상품목록의 상품의 id가
    //     // 같은 게 존재하는지 확인하고 수량만 증가하는 부분
    //     // 배열이름.findIndex((요소, 인덱스, 원본배열)=>return조건)
    //     // => 찾고 싶은 항목이 존재하면 그 항목이 존재하는 배열의 인덱스 번호를 반환
    //     // => 찾고 싶은 항목이 존재하지 않으면 -1 반환한다.

    //     const index = cart.findIndex( (item) => item.id === product.id )
    //     // 존재하면 index = 1, index = -1 (없다)
    //     // 장바구니에 상품이 존재한다란 조건은 index에 -1이 존재하지 않냐는 뜻이다. / index !== -1
    //     if (index !== -1){
    //         //수량 증가 코드
    //         cartCopy[index].quantity += 1;
    //     }else{
    //         cartCopy.push({id:product.id,
    //             name:product.name,
    //             price:product.price,
    //             quantity:1})
    //     }
    //     setCart(cartCopy);
    //     console.log('장바구니 담김?'+cartCopy)
    // }

    return(
        <>
            <div>
                <h3>쇼핑몰 🛒</h3>
                <button type="button" onClick={() => setShowCart(true)}>장바구니</button>
                {/* 자식 컴포넌트 */}
                {/* productslist는 상품목록 ui 출력 */}
                <ProductList products={products} addCart={addCart}/>
                {/* 모달이 showCart = true이면 CartModal 보이기, 아니면 랜더 안되게 null 조건 */}
                {showCart === true ? <CartModal cart={cart} onClose={()=>setShowCart(false)}/>:null}
            </div>
        </>
    )
}