import {  useEffect, useState } from "react";

export default function Ex04(){

    //time의 상태를 변경하는 변수
    const[time, setTime]=useState(0);
    // setInterval(()=>{},초) => 실행 반복
    // setTimeOut(()=>{},초) => 1번만 실행
    useEffect(()=>{
        const timer = setInterval(()=>{setTime(time+1)},1000)
        // clearnUp 함수 => 언마운트 될때 삭제되는 함수
        // return 함수
        return () => {clearInterval(timer)}
    })

    return(
        <>
            <div>
                <div>자동 타이머</div>
                <p>{time}</p>
                <p>초가 경과 하였습니다.</p>
            </div>
        </>
    )
}