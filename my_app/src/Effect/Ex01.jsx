import { useEffect, useState } from "react";

export default function Ex01(){
    // 모든 HOOK의 생명주기 존재
    // 1. => 마운트(렌더 시작)
    // 2. => 업데이트 (setUpdate())
    // 3. => 업데이트 된 내용이 리렌더 되고 난 후 언마운트(삭제)
    // useState() => 렌더, 업데이트 필요
    // useEffect() => 렌더 이외의 작업, 네트워크에서 자료 가져오는 일...
    // useEffect(()=>{}) => 랜더될때마다 실행 된다
    // useEffect(()=>{},[]) => 처음 랜더될때 1회만 실행
    // useEffect(()=>{},[의존성 배열]) => 의존성 배열이 실행될때마다 실행
    useEffect(()=>{
        console.log("컴포넌트가 마운트 되었습니다.")
    },[])
    return(
        <>
            <div>
                <h1>useEffect 기본예제</h1>
                <p>F12를 눌러 콘솔을 확인해 보세요!</p>
                <p>컴포넌트가 마운트 되었습니다. 메세지가 출력됩니다.</p>
            </div>
        </>
    )
}