import { useState } from "react";

export default function LoginForm(props){

    // 이름
    const[name, setName] = useState('');
    // 비번
    const[pw, setPw] = useState('');
    // login 함수 필요
    const login = () => {
        if(!name || !pw) {return alert('입력해주세요.')}
        props.onSuccess(name);
    }

    // 로그인폼 화면
    return(
        <>
            <div className="loginForm">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름 입력" />
                <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="비밀번호 입력" />
                <button onClick={login}>로그인</button>
            </div>
        </>
    )
}