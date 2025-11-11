
// useState() 훅(hook)을 import
import React,{useState} from 'react'
// 한번에 export에서 함수 생성까지
export default function Counter02(){
    console.log("1.컴포넌트 마운트 됨-함수 실행")
    // uesState() 이용하여 변수지정
    // const[이름,set이름]=useState(초기값)
    const[count, stateCount]=useState(0) //초기값 0지정
    console.log("2. useState 호출-초기값0",count)

    console.log("3.초기 랜더링 중-화면에 카운트 표시됨")
    // 함수로 작성하기 : conut되는 함수
    function inCrease(){ 
        stateCount(count+1)
    }

    return(
        <>
            <div>
                <p>{count}</p>
                <button onClick={()=>{
                    console.log("4. 이벤트 발행-셋카운트 실행 요청")
                    stateCount(count+1)
                    console.log("5.셋카운트 호출 후, 비동기 상태 대기")
                    }}>콘솔용 증가</button>
                {/* <button onClick={(inCrease)}>증가</button> */}
                {/* <button onClick={()=>stateCount(count+1)}>증가</button> */}
            </div>
        </>
    )
}