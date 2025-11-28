import COOKIE from 'js-cookie'; //작명 COOKIE
import { useState } from 'react';

export function CookieTest(){
    // cookie를 읽어서 cookievalue 상태 변수에 저장한다.
    // cookie에서 값을 읽어오는 명령어 : cookie.get()
    // cookie가 1분 뒤에 자동삭제 되면 홍길동이 화면에서 같이 사라지게 하고 싶음
    // COOKIE.get('userName')||''
    const [cookievalue, setCookieValue]=useState(COOKIE.get('userName')||'');
//    const [cookievalue, setCookieValue]=useState(COOKIE.get('userName')); //위에서 import js-cookie에 작명한 이름.get

    // cookie를 저장하는 함수 생성
    const cookieSave = () => {
        // cookie 값을 저장할때 명령어 cookie.set(key, value, {expires}) 키, 값, {만료시간}
        // {expires:1} => 1일 동안 유지
        // 1분 동안만 userName이 유지 되도록 변경
        // 1초가 1000ms, 1분 = 60초. 1분 = 60 * 1000
        const oneMinute = new Date(Date.now()+1*60*1000)
        COOKIE.set('userName','홍길동',{expires:oneMinute,path:'/'});//작명한 js-cookie
//        COOKIE.set('userName','홍길동',{expires:1});
        setCookieValue('홍길동');
        alert('쿠키 저장됨');
    }

    // cookie 확인하는 함수 생성

    const cookieChk =()=>{
        const value = COOKIE.get('userName');
        // COOKIE.get()은 값이 없으면 undefined를 반환한다.
        console.log(value)
        if(value !== undefined){
            // cookie에 저장된 값이 존재한다
        alert(`쿠키 ${value}`)
    }else{ alert('쿠키 없음')}
    }

    // cookie 삭제하는 함수 생성
    const cookieDel = () => {
        // cookie.remove('key')
        COOKIE.remove('userName')
        setCookieValue('')
        alert('쿠키 삭제됨')
    }

    return(
        <div>
            <h2>쿠키 예제</h2>
            <p>현재 쿠키 값 : {cookievalue} </p>
            <button type='button' onClick={cookieSave} style={{backgroundColor:'dodgerblue',color:'#fff'}}>쿠키 저장</button>
            <button type='button' onClick={cookieChk} style={{backgroundColor:'dodgerblue',color:'#fff'}}>쿠키 확인</button>
            <button type='button' onClick={cookieDel} style={{backgroundColor:'dodgerblue',color:'#fff'}}>쿠키 삭제</button>
        </div>
    )
}