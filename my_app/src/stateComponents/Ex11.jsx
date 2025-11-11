

import React,{useState} from "react";

export default function Exstate11(){
    const [name, setName] = useState("홍길동");
    setName(name=='홍길동'?'개나리':'홍길동')
    const [age, setAge] = useState(20);

    return(
        <>
            <p>{name} ({age})</p>
            <button onClick={setName}>정보변경</button>
        </>
    )
}