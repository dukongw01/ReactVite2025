import { useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux'
import axios from "axios";
import { setProducts } from "../store02/productSlice";
import { insertitem } from "../store02/cartSlice";

export default function Section(){
    const {items} = useSelector((state)=>state.products)
    const dispatch = useDispatch()
    // axios를 이용해서 api호출
    useEffect(()=>{
        const load = async()=>{
            try{
                const res = await axios.get('https://dummyjson.com/products')
                console.log(res.data.products)
                //productsSlice의 setProducts() 저장
                // 마치 useState의 set~ 함수처럼이용
                // 반드시 데이터를 내보내야 하기 때문에 dispatch()가 먼저 온다
                dispatch(setProducts(res.data.products))
            }
            catch(err){ console.log('데이터 호출 실패',err) }
            finally{ console.log('데이터 요청 실패') }
        }
        load();
    },[dispatch])

    // 핸들러 함수
    // 장바구니에 상품이 담길때마다 alert 띄움
    const ClickHandler = (product) => {
        dispatch(insertitem(product))
        alert(`${product.title} 장바구니 추가`)
    }

    return(
        <>
            <h3>상품 목록</h3>
            <div>
                <ul>
                    {items.map((item)=>{
                        <li key={item.id} onClick={()=>ClickHandler(item)}><img src={item.thumnail} alt={item.title} />
                        <h4>{item.title}</h4>
                        <p>{item.price}</p>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}
