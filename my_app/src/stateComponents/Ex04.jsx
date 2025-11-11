

import React,{useState} from "react";

export default function Exstate04(){
    const[count, stateCount]=useState(0)
    function inCount(){stateCount(count+1)}

    const[text, setText]=useState('none')
    const ChangeText=()=>{ setText(text=='none'?'block':'none')}
    
    return(
        <>
            <p>👍{count}</p>
            <button onClick={(inCount)}>좋음</button>
            <div style={{display:text}}>
                <img src="vite.svg" alt="" />
            </div>
            <button onClick={(ChangeText)}>toggle</button>
        </>
    )
}