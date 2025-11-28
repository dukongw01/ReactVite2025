import LoginCookie from 'js-cookie';
import { useState } from 'react';
// import './LoginCookieTest.css';

export function LoginCookieTest(){
    // 쿠키 값
    const [userId, setUserID]=useState(LoginCookie.get('userId')||'');
    const [userPw, setUserPW]=useState('');

    // 아이디 저장 체크박스가 체크되면 => 아이디 저장, true, false이용
    const saveId = LoginCookie.get('userId')
    const [idChk, setIdChk]=useState(saveId?true:false);

    // 아이디 저장 체크박스 핸들러
    const idChkHandler = (e) => {
        setIdChk(e.target.checked);
    }

    // 로그인 버튼 클릭 핸들러
    // form 안에 로그인 버튼을 클릭하면 기본으로 페이지가 새로고침된다.
    // 새로고침 되면 react의 상태가 초기화된다
    // 화면에 input값과 체크박스 상태도 모두 사라진다.
    // 위의 오류를 해결하려면 반드시 e.preventDefault()
    const logHandler = (e) => {
        e.preventDefault(); //폼의 기본 제출 동작을 막는다
        // 1분뒤 cookie 만료
        if(idChk){
            const oneMinute = new Date(Date.now()+1*60*1000);
            LoginCookie.set('userId',userId,{expires:oneMinute,path:'/'})
        }else{
            // 아이디 저장 체크가 안되어 있으면 cookie는 삭제
            LoginCookie.remove('userId',{path:'/'})
        }
        alert(`로그인 시도: ${userId}`)
    }




    return(
        <div>
            <h1>LOGIN PAGE</h1>
            <fieldset>
                <form onSubmit={logHandler}>
                    <p>ID와 비밀번호</p>
                    <hr/>
                    <ul>
                        <li>이름<input type="text" id="userId" name='userId' value={userId} onChange={(e)=>setUserID(e.target.value)} /></li>
                        <li>비번<input type="password" id="userPw" name='userPw' value={userPw} onChange={(e)=>setUserPW(e.target.value)} /></li>
                        <input type="checkbox" onChange={idChkHandler} /> 아이디 저장
                    </ul>
                    <button>로그인</button>
                </form>
            </fieldset>
        </div>
    )

}