import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name:'products',
    initialState:{items:[]},
    //동기적으로 상태를 변경하는 함수들 모임
    // 동기적이란? 버튼 클릭 또는 체인지 등의 변화가 있어야 사용이 가능한 것
    // 이런 변화가 없는 총계 구하는 함수 => 작성금지
    // reducers:{}
    reducers:{
        //set + 작명 => 업데이트의 의미를 가지는 함수를 생성하기로 약속되어있다.
        setProducts:(state,action)=>{
            state.items = action.payload
        },
    }
})

export const { setProducts } = productSlice.actions
export default productSlice.reducer
// 위의 export가 이뤄져야 store에 담긴다