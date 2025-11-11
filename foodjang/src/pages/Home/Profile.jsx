import { useContext } from "react";
import '../../common/Header/Login';
import { Link } from "react-router-dom";

export default function Profile(){
    const {user} = useContext('');

    if(!user){
        return(
            <div>
                <p>로그인이 필요합니다.</p>
                <Link to='/Login'>로그인 하러가기</Link>
            </div>
        )
    }
    return(
        <div>
            <h1>프로필 페이지</h1>
            <p>안녕하세요. {user}님,</p>
            <p>로그인 됐습니다.</p>
        </div>
    )
}