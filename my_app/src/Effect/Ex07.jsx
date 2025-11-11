import {  useEffect, useState } from "react";

export default function Ex07(){

    // 현재 시간을 저장하는 상태 변수 생성
    // new Date() => 오늘 날짜/현재 시간을 반환한다.
    // new Date() => 코어 객체이다 => {key:value ... }
    // 객체가 같다 -> 같은 주소에 존재 = 같으니 렌더 포기
    const[currTime, setCurrTime]=useState(new Date());

    // 컴포넌트가 화면에 나타날때, 시간 업데이트 시작
    useEffect(()=>{
        // 1초마다 실행되는 함수
        const timer = setInterval(()=>{
            const currNow= new Date(); //얕은 복사와 같은 형식 : 서로 다른 주소에 존재하니까 다른 아이라고 정의
        setCurrTime(currNow) // 상태를 업데이트하면 화면도 같이 바뀜
        },1000)
        // cleanUp 함수
        return () => clearInterval(timer)
    },[])

    // 시:분:초 => 두 자리씩 출력하는 함수 생성
    // 10이하의 모든 숫자에 앞에 0을 붙인다
    const twoTime =(num) => (num<10?`0${num}`:num)
    // 시:분:초 추출
    const hour = twoTime(currTime.getHours()) //시
    const minute = twoTime(currTime.getMinutes()) //분
    const second = twoTime(currTime.getSeconds()) //초

    return(
        <>
            <div>
                <h3>DIGITAL CLOCK</h3>
                {/* 시:분:초 => 00:00:00 */}
                <p>{hour}:{minute}:{second}</p>
                {/* 날짜 : 2025년 10월 30일 목요일 */}
                {/* 현재 지금 지역의 날짜를  */}
                <p>{currTime.toLocaleDateString()}</p>
            </div>
        </>
    )
}