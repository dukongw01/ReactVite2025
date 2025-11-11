

import React,{useState} from "react";

export default function Exstate08(){
    const[number, setNumber]=useState(0)

    function nCount(){
        setNumber(number+1)
    }

    return(
        <>
            <button onClick={nCount-1}>-</button>
            <p>{number}</p>
            <button onClick={nCount}>+</button>
            <p>{number % 2==0?'짝수':'홀수'}</p>
        </>
    )
}