import { use, useEffect, useState } from "react";

export default function EffectTest01(){
    //Rect의 컴포넌트 생명주기(Lifecycle)흐름과 uesEffect의 관계

    // 1.랜더링마다실행하기
    // 2.의존성배열이없을때실행시점은컴포넌트가랜더링될때마다
    // useEffect가실행되고있다
    const [count, setCount]=useState(0);
    useEffect(() => {
        console.log("렌더링 발생!");
    });
    return(
        <>
            <div>
                <p>카운트:{count}</p>
                <button onClick={()=>setCount(count+1)}>+1</button>
            </div>
        </>
    )
}