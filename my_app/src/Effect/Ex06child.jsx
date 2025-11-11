import {  useEffect, useState } from "react";

export default function Ex06child(){
    // 내 코드
    // useEffect(()=>{
    //     console.log('컴포넌트 나타남')
    //     return() => console.log('컴포넌트 사라짐')
    // },[])

    // ----선생님 코드
    // props는 부모가 자식에게 넘겨준 게 없으면 안 써도 된다.
    // 부모가 자식에게 주는 것이 있을때만 쓴다.

    useEffect(()=>{
        console.log('컴포넌트가 마운드 되었습니다.')
        // cleanUp 함수 작성
        return () => {console.log('컴포넌트가 언마운트 되었습니다.')}
    },[]) // <=[] 빈배열로 작성하면 마운트시 1회, 언마운트시 1회 실행됨
    return(
        <>
            <p>안녕하세요. 전 toggle이에요.</p>
                {/* <p>안녕하세요!</p> */}
        </>
    )
}