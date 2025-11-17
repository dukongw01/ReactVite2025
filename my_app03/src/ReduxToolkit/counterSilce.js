// 1단계 : slice파일 만들기 - Redux에 상태+로직을 정의하는 부분이다.
//         위 단계에서는 state 구조, state를 변경하는 Reducer함수, 그리고 action 생성 함수를 정의.
//         생성하는 라이브러리는 createSlice()이며 import한다.
import {createSlice} from '@reduxjs/toolkit'

const countSilce = createSlice({
    // name, initialState, reducers는 모두 예약어이므로 변경 할 수 없다. 작명 금지.
    name:'counter', //state 이름으로 store에서 접근할때 key로 사용
    //초기값 = 0, 'A', boolean값(true, false), {item : []}, {object:{id:1, name:'키위'}}
    initialState: {value:0},
    reducers:{
        increment:(state)=>{state.value += 1},
        decrement:(state)=>{state.value -= 1},
        reset:(state)=>{state.value = 0},
        // 오브젝트 하나에 함수 1, 함수 2, 함수 3을 작업하는 과정 지금은 그게 count인 셈이다.

        // 5씩 더하는 함수를 생성, action의 payload를 이용해 상태를 변경
        incrementByAmount:(state,action)=>{
            state.value += action.payload;}, //payload = 업데이트를 하겠다. 예약어.
    } 
})


// countSilce.actions 는 action.type => {type:'counter/increment'} ..자동생성해준다.
export const {increment, decrement, reset, incrementByAmount} = countSilce.actions
console.log(countSilce.actions)
// countSilce.reducer는 Switch(action.type) {cace 'counter/increment':return state.value + 1} 함수를 의미
export default countSilce.reducer;