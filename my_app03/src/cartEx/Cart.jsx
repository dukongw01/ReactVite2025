import {useSelector, useDispatch} from 'react-redux'
import { additem,removeitem,resetitem } from "./cartSlice";


export default function Cart(){
    const items = useSelector((state)=> state.cart.items)
    // 데이터 내보내기
    const dispatch = useDispatch();
    // 샘플 상품
    const sampleProducts = [
    { id: 1, name: '사과', price: 1000 },
    { id: 2, name: '바나나', price: 1500 },
    { id: 3, name: '오렌지', price: 1200 }, ];
    
    return(
        <div>
            <h2>장바구니</h2>
            <h3>상품목록</h3>
            <ul>
                {sampleProducts.map((item)=>(
                    <li key={item.id}>
                        {item.name}-{item.price}원
                        <button type="button" onClick={()=>dispatch(additem(item))}>장바구니 추가</button>
                    </li>
                ))}
            </ul>
            <h3>장바구니 추가</h3>
            <ul>
                {items.map((item,index)=>(
                    <li key={index}>
                        {item.name}-{item.price}원
                        {/* onClick={()=>dispatch(removeitem(item))를 사용해도 좋지만
                        첫번째도 두번째도 1번 값이 중복이다. 그래서 1번이 재쟁성 이후 삭제가 된다. */}
                        <button type="button" onClick={()=>dispatch(removeitem(item.id))}>삭제</button>
                    </li>
                ))}
            </ul>
            <button type="button" onClick={()=>dispatch(resetitem())}>장바구니 비우기</button>
        </div>
    )
}