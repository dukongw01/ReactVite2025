

import React,{useState} from "react";

export default function Exstate10(){
    const [Text01, setDate]=useState('')
    const Changelog=()=>{setDate(new Date().toLocaleTimeString())}


    return(
        <>
            <p>{Text01}</p>
            <button onClick={Changelog}>갱신</button>

        </>
    )
}