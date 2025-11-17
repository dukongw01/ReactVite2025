import { createSlice } from "@reduxjs/toolkit";
import  axios from "axios";

const cartSlice = createSlice({
    name:'cart',
    initialState:{items:[]},
    reducers:{
        insertitem:(state, action)=>{
            // 만약 이미 담긴 상품이 존재하면 수량만 1씩 증가하고
            // 담긴 상품이 없다면 수량을 만들어라 : quantity
            // 존재 => 배열이름.find(()=>조건)
            // 찾는 값이 존재하면 그 값의 배열 출력, 없으면 undefined
            const newItem = action.payload
            // newitem = {id:1, ~~~ }
            const existIndex = state.items.find((item)=>item.id===newItem.id)
            // 얕은 복사 => [], {}
            // push()는 배열만 사용하는 함수
            if(existIndex === undefined){
                //장바구니에 같은 상품이 존재하지 않다는 의미
                //push, 수량까지
                // let newItemCopy = [...newItem] 이건 사용을 할 수 없다

                // ...이 들어가는 문법을 스프레드 문법이라고 한다. spread operator
                //newItem을 펼쳐서 보여준다
                //const newItem = { id:1, name:'사과', price:1000 } 펼친 곳
                // 여기서 quantity:1을 삽입시킴
                state.items.push({...newItem, quantity:1})
            }else{
                //같은 상품이 존재하면 +1만 하면 된다
                existIndex.quantity += 1;
            }
        },
        // 삭제하는 함수 생성
        deleteItem:(state, action)=>{
            //findindex()이용해서 작성
            const delIndex = state.items.findIndex((item)=>item.id === action.payload)
            // CartPage.jsx에서 삭제 버튼 클릭시 dicpatch()가 내보낸 item.id값
            if(delIndex !== -1){
                state.items.splice(delIndex,1)
            }
        }
    }
})

export const {insertitem,deleteItem,plusQuantity,minusQuantity} = cartSlice.actions
export default cartSlice.reducer