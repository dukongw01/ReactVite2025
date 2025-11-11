

import React,{useState} from "react";

export default function Exstate02(){
// input의 onChange()함수 이용해 작성
// onChange 함수 안에 element.target.value = e.target.value
// input 입력값을 가져올 수 있다.
    const[text, setText]=useState('')
// 업데이트 함수 생성
    const ChangeText=(e)=>{
        // updates는 setText(연산)
        setText(e.target.value)
    }
    return(
        <>
            <input onChange={ChangeText} placeholder="입력하세요"/>
            <p>입력:{Text}</p>
        </>
    )
}