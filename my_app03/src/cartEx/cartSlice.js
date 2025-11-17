import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    // name은 store에 저장될 key되는 이름임, 아주 중요
    name:'cart',
    // item=[]빈 배열 생성
    // initialState는 예약어라 작명 불가
    initialState:{items:[]},
    // reducers는 로직, 예약어라 작명 불가
    reducers:{
        // additem:(state)=>{ //액션을 잘 쓰지 못할때는 이와 같은 함수를 쓸 수는 있지만 문제는
        //     state.items.push({id:1, name:'사과', price:1000}) //계속 사과만 표시될 예정이다. 값을 사과만 직접지정헀으니까.
        // }
        additem:(state, action)=>{
            console.log('잘 삽입됐니?')
            console.log(action.payload)
            state.items.push(action.payload) 
        },
        // removeItem()=>삭제 함수 생성
        removeitem:(state, action)=>{
            console.log('아이디 뭐야?')
            console.log(action.payload)
            
            // state.items.splice(action.payload,1) 이렇게 해도 삭제는 되지만 정답은 아니다
            // state.items.splice(action.payload,1) 같은 상품이 존재하면 삭제, 아니면 삭제 불가
            // 배열이름.findIndex(()=>조건) 존재하는 인덱스 번호 출력
            // 존재하지 않으면 -1 출력
            const delIndex = state.items.findIndex((item)=> item.id === action.payload)
            if(delIndex !== -1) {/* 찾는 값이 존재하면 => 삭제 */
                // state.items.splice(delIndex,1)
                state.items = state.items.filter((item)=> item.id !== action.payload)
            }
        },
        // 위 코드는 오류가 모두 존재한다. 중복값이 여럿이기 때문이다.
        // 전통적으로 하려면 같은 상품은 수량만 증가하는 함수가 생성되어야하고
        // 그 값을 하나씩 지우는 함수가 필요하다 모두 연습 코드이다.
        resetitem:(state)=>{
            state.items=[]
        }
    }
})

// 위에서 작성한 로직, 이름은 모두 export로 내보내줘야한다.
export const {additem,removeitem,resetitem} = cartSlice.actions
// cartSlice // switch ~ cace문을 이용한 함수를 자동생성하는 부분
export default cartSlice.reducer