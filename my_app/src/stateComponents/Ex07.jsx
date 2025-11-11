

import React,{useState} from "react";

export default function Exstate07(){
    const[text1, setText1]=useState('좋아요')
    const[text2, setText2]=useState('👍')

    const Changetext=()=>{
        setText1(text1=='좋아요'?'싫어요':'좋아요')
        setText2(text2=='👍'?'👎':'👍')
    }

    return(
        <>
            <div>
                <p>{text1} {text2}</p>
            </div>
            <button onClick={Changetext}>누르기</button>
        </>
    )
}