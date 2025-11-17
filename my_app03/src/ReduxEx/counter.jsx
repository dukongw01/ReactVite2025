
// Counter.jsx 파일은 컴포넌트 파일로 UI
// useSelector와 useDispatch인 Hook을 이용하여 상태를 읽고, 액션을 보낸다
// useDispatch는 단순히 값만 보낸다
// counterReducer가 그 값을 처리해서 store에 저장한다
// Counter.jsx가 useSelector로 그걸 읽는다

import { useDispatch, useSelector } from "react-redux";

export default function Counter(){
    // useSelector를 이용해 state의 count를 읽어온다.
    const count = useSelector(state => state.count) //store에 있는 걸 오브젝트의 프로퍼티처럼 막 가져다 쓸 수 있다.
    console.log('처음', count)
    // useDispatch를 이용해서 내보낸다
    const dispatch = useDispatch()

    // + 버튼은 10까지만, 10이상이 되면 alert 띄우기
    // - 버튼은 0까지만, 0 이하로 내려가면 alert 띄우기
    const plusHandle = () => {
        if(count>=10){
            alert("10까지만 선택가능")
        }else{
            dispatch({type:'INCREMENT'})
        }
    }

    const minusHandle = () => {
        if(count<=0){
            alert("수량은 최소 1부터 선택가능")
        }else{
            dispatch({type:'DECREMENT'})
        }
    }

    return (
        <>
            <h1>Count {count}</h1>
            {/* <button type="button" onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
            <button type="button" onClick={()=>dispatch({type:'INCREMENT'})}>+</button> */}
            {/* 위의 수식이 편해지면 아래와 같다. alert 적용 버튼 */}
            <button type="button" onClick={minusHandle}>-</button>
            <button type="button" onClick={plusHandle}>+</button>
        </>
    )
}