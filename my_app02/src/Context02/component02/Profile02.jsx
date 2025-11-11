import { useContext } from "react";
import { AuthContext } from "../context02/AuthContext02";
import { Link } from "react-router-dom";

// Profile 컴포넌트 정의
export default function Profile(){
    // user : 현재 로그인된 사용자 정보(로그인 안된 상태=null)
    const {user} = useContext(AuthContext)

    // 만약 로그인 상태가 아니라면 => user가 null이면
    // 로그인이 필요합니다. 메시지 출력, 로그인 페이지 이동
    if(!user){
        return(
            <div>
                <p>로그인이 필요합니다.</p>
                {/* 로그인 페이지로 이동하는 링크 */}
                <Link to='/LoginForm02'>로그인 하러가기</Link>
            </div>
        )
    }
    // 로그인 된 상태라면 프로필 화면 출력
    return(
        <div>
            <h1>프로필 페이지</h1>
            {/* 로그인 사용자 이름 출력 */}
            <p>안녕하세요. {user.name}님.</p>
            <p>오늘도 좋은 하루</p>
        </div>
    )
}