import { use, useEffect, useState } from "react";

function Message() {
useEffect(()=>{
    // 컴포넌트가 나타날때 마운드(mount)
    console.log('Message 컴포넌트 나타남');
    return() => console.log('Message 컴포넌트 사라짐');
    //cleanUp함수 => 컴포넌트가 사라질 때 언마운트(unmount)
},[])
return <p>안녕하세요!</p>;
}

export default function EffectTest02(){
    const [show, setShow]=useState(true);
    return(
        <>
            <div>
                <button onClick={()=>setShow(!show)}>토글</button>
                {show && <Message/>}
            </div>
        </>
    )
}