import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context02/AuthContext02";

// LoginForm 컴포넌트 정의
export default function LoginForm02(){
    // AuthContext에서 user와 login 데이터 가져오기
    const {user, login, setUser} = useContext(AuthContext)
    const [username, setUsername]=useState('');
    
    // 폼 제출시 실행되는 함수 form -> submit
    const submitHandeler = () => {
        // 기본 폼 제출 시 자동 새로고침 막는 코드
        // e.preventDefault();
        // 입력 값이 공백이면 alert() 경고창 띄우기
        if(username === '') return alert('이름을 입력하세요.')
            // 로그인 함수 실행 -> 전역 상태에 로그인 정보 저장
        login(username)
    }
    return(
        <div>
            {/* user가 존재하면 (로그인 된 상태) */}
            {user ? (
                <div>
                    {/* 로그인 된 사용자 이름을 출력해야 한다 */}
                    <p>{user.name}님, 로그인 되었습니다.</p>
                    {/* Profile 로 가도록 */}
                    <Link to='/Profile02'><button type="button">프로필로 이동</button></Link>
                </div>
            ):(
                // user가 없으면 (로그아웃 상태) 로그인 폼을 보여주기
                <form onSubmit={submitHandeler}>
                    <h1>로그인</h1>
                    {/* 사용자 이름 입력하는 input */}
                    <input type="text" placeholder="이름 입력" value={user} onChange={(e)=>setUsername(e.target.value)}/>
                    {/* 로그인 버튼 -> 클릭하면 submitHandeler 실행 */}
                    <button type="submit">로그인</button>
                </form>
            )}
        </div>
    )
}