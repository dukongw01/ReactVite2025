import { useEffect, useState } from "react";

export default function Ex03(){
    // count 상태를 변경하는 변수
    const [count, setCount]=useState(0);
    // 의존성 배열에 count를 추가하여 생성
    useEffect(() => {
        console.log(`카운트 변경 ${count}`);
    },[count]);
    // [-] 핸들러와 [+] 핸들러를 따로따로 든다.
    // 마이너스 핸들러
    const minuHandeler = () => {
        setCount(count-1);
    }
    const plusHandeler = () => {
        setCount(count+1);
    }
    return(
        <>
            <div>
                <h1>Counter With useEffect</h1>
                <p>{count}</p>
                <button onClick={minuHandeler}>-</button>
                <button onClick={plusHandeler}>+</button>
                <p>콘솔을 확인하세요! 카운트가 변경될 때마다 로그가 출력됩니다.</p>
            </div>
        </>
    )
}