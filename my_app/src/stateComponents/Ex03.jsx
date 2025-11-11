

import React,{useState} from "react";

export default function Exstate03(){
 //text='red'
    const[text, setText]=useState('red')

    const ChangeText=()=>{
        setText(text==='red'?'blue':'red')
    }
    return(
        <>
            <div style={{backgroundColor:text, width:'100px', height:'100px'}}>
                <button onClick={ChangeText}>색변경</button>
            </div>
        </>
    )
}