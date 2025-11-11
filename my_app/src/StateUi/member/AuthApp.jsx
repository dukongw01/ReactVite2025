import { useState } from "react";
import LoginForm from '../member/LoginForm';
import Meassage from '../member/Meassage';
import SingupForm from '../member/SingupForm';

// 부모 컴포넌트로 회원가입 상태, msg만 관리함
export default function AuthApp(){
    const[isLogin, setIsLogin]=useState(true)
    const[msg, setMsg]=useState('');
    return(
        <>
            <div style={{padding:'20px'}}>
                <h2>🙍‍♀️로그인/📤가입</h2>
                <Meassage msg={msg}/>
                {/* 회원가입시 완료 버튼을 클릭하면 가입환영 메세지를 띄우기 */}
                {/* 로그인 완료시 버튼 클릭하면 로그인 환영 메세지를 띄우기 */}
                {isLogin ? <LoginForm onSuccess={(name)=>setMsg(`환영합니다! ${name}님`)}/>
                  : <SingupForm onSuccess={(name) => setMsg(`${name}님의 가입을 환영!`)}/>
                }
                <button onClick={()=>{setIsLogin(!isLogin); setMsg('');}}>
                    {isLogin?'회원가입하기':'로그인하기'}</button>
            </div>
        </>
    )
}