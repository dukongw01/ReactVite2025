import { useEffect, useState } from "react";

// React에서는 화면 상태도 데이터로 관리한다.
export default function LoginView(){
    // 로그아웃 상태이다
    // isLogin = falce
    const [isLogin, setIsLogin] = useState(false)
    return(
        <>
            <div>
                { isLogin ? <h1>Welcome Back!</h1> : <h1>Please Login </h1> }
                <button onClick={() => setIsLogin(!isLogin)}>{ isLogin ? '로그아웃' : '로그인' }</button>
            </div>
        </>
    )
}