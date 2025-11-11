// Link : 페이지 이동을 위한 React Router 컴포넌트이다
import { Link } from 'react-router-dom';
// useContext : Context의 값을 가져올 수 있는 React Hook
import { useContext } from 'react';
// AuthContext : 내가 만든 데이터를 가져오기 위한 저장소
import { AuthContext } from '../context02/AuthContext02';

// Header 컴포넌트 정의 (화면 상단 네비게이션 역할)
export default function Header02(){

    const {user, logout}=useContext(AuthContext)
    
    return(
        <header>
            <h1>Context 인증 실습</h1>
            {/* 홈 링크 */}
            <Link to='/'>홈</Link>
            {/* user가 존재하면 (login상태) 로그아웃 되도록 */}
            {user ? (
                <div>
                    {/* 프로필 페이지로 이동하는 링크 */}
                    <Link to='/Profile02'>프로필</Link>
                    {/* 로그아웃 버튼 클릭시 logout()함수 실행 */}
                    <button type='button' onClick={logout}>로그아웃</button>
                </div>
            ):(
                // user가 null인 상태면 (logout상태) 로그인 되도록
                // 로그인 페이지로 이동하는 링크만 보여줌
                <Link to='/login'>로그인</Link>
            )}
        </header>
    )
}