import { useState } from "react";

export default function SingupForm(props){
    
    // 이름
    const[name, setName] = useState('');
    // 비번
    const[pw, setPw] = useState('');
    // 회원가입 함수
    const singup = () => {
        // 예외처리
        if(!name || !pw){ return alert('입력해주세요.')}
        props.onSuccess(name);
    }

    // 가입폼 화면
    return(
        <>
            <div className="singForm">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름 입력" />
                <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="비밀번호 입력" />
                <button onClick={singup}>회원가입</button>
            </div>
        </>
    )
}