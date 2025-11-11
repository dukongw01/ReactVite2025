import React,{useState} from "react";

// props는 부모에서 자식으로 데이터를 읽기전용으로 보내준다
// props 값, 변수, 함수 모두 props로 보내진다.
// 부모 컴포넌트 부모 변경함수를 넘겨주기

export default function Exstate12(){
    const [num, setNum]=useState(0)

    return(
        <>
            <p>값:{num}</p>
            <Child18 increase={()=>{setNum(num+1)}}/>
        </>
    )
}

//자식 컴포넌트
 function Child18(props){

    return(
        <>
            <button onClick={props.increase}>+1</button>
        </>
    )
}