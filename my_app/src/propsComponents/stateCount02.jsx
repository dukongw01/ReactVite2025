
// useState() 훅(hook)을 import
import React,{useState} from 'react'
// 한번에 export에서 함수 생성까지
export default function Counter02(){
    // uesState() 이용하여 변수지정
    // const[이름,set이름]=useState(초기값)
    const[count, stateCount]=useState(0) //초기값 0지정

    // 함수로 작성하기 : conut되는 함수
    function inCrease(){
        stateCount(count+1)
    }

    return(
        <>
            <div>
                <p>{count}</p>
                <button onClick={()=>stateCount(count-1)}>감소</button>
                <button onClick={(inCrease)}>증가</button>
                {/* <button onClick={()=>stateCount(count+1)}>증가</button> */}
            </div>
        </>
    )
}