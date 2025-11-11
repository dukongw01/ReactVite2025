import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';


export default function Login(){

    const [userId, setUserId]=useState('');
    const [userPw, setUserPw]=useState('');
    const {login} = useContext(AuthloginContext)

    const navilogingate = useNavigate();

    const LoginHandeler = () => {
        if(userId === 'wasd' && userPw === '1234'){
            login(userId)
            alert('로그인 확인')
            navilogingate('/Home')
        }else{alert('Id, Pw 확인요청')}
    }

    return(
        <div>
            {user ? (
                <div>
                    <p>{user}님, 로그인 됐습니다.</p>
                    <button type="button" onClick={LoginHandeler}>이동</button>
                </div>
            ):(
                <form onSubmit={LoginHandeler}>
                    <h1>로그인</h1>
                    <input type="text" placeholder="아이디 입력" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
                    <button type="submit">로그인</button>
                </form>
            )}
        </div>
    )
}