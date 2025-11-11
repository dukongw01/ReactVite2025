

import React,{useState} from "react";

export default function Exstate06(){

    const[text, setText]=useState('red')
    const ChangeColor=()=>{
        setText(text=='red'?'blue':text=='blue'?'green':'red')}
        // 3번 반복해야하면 2번만 물어보면 된다.
        // 5번을 반복해야한다면? 4번만 물어보면 된다.
        // text=='red' 레드인가? -> 맞으니까 'blue'
        // 블루가 됐다면 다시 묻기 text=='blue' 블루인가? -> 맞으면 'green'
        // 마지막은 물어볼 필요가 없다. 'green'이라면 나머지는 레드. 'green':'red'
    return(
        <>
            <div style={{width:'100px', height:'100px', backgroundColor:text}}></div>
            <button onClick={ChangeColor}>변경</button>
        </>
    )
}