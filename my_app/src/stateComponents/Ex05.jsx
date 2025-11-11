

import React,{useState} from "react";

export default function Exstate05(){
    const[count, stateCount]=useState(20)
    function inCount(){stateCount(count+1)}
    
    return(
        <>
            <p style={{fontSize:count}}>점점 커짐</p>
            <button onClick={(inCount)}>커져라</button>
        </>
    )
}