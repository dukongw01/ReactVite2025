// 4단계 (3단계는 main.jsx파일) : 컴포넌트 UI
//          컴포넌트 useSelector로 상태를 읽고 useDispatch로 action(동작) = (increment, decrement, reset)을 호출
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement,reset, incrementByAmount } from "./counterSilce";

export default function Counter(){
    // 상태읽기
    const count = useSelector((state)=>state.counter.value)
    // 액션(동작)실행 준비 = 내보내기
    const dispatch = useDispatch()

    return(
        <>
            <h3>카운터 : {count}</h3>
            <button type="button" onClick={()=>dispatch(decrement())}>-</button>
            <button type="button" onClick={()=>dispatch(increment())}>+</button>
            <button type="button" onClick={()=>dispatch(reset())}>Reset</button>
            <button type="button" onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
        </>
    )
}