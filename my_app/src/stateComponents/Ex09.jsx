

import React,{useState} from "react";

export default function Exstate09(){
    const[Text01, setText01]=useState('')
    
    const [Text02, setDate]=useState('')
    setDate=()=>{ new Date().toLocaleDateString() }


    return(
        <>
            <input onChange={(e)=>{setText01(e.target.value)}} value={Text01}/>
            <button onClick={()=>{setText01('')}}>초기화</button>
            <p>{Text01}</p>

            <p>{Text02}</p>
            <button onClick={()=>{setDate('')}}갱신></button>

        </>
    )
}