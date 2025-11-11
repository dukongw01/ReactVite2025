import { useContext,useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login(){
    // 저장 변수
    const[User, setUser]=useState(null)
    
    const[userID, setUserId]=useState('');
    const[Pw, setPw]=useState('');
    
    //로그인
    const {login} = useContext(/*???*/) //여기에 Context를 연결하는데 이유를 모름
    login = (userName) => {
        setUser(userName);
    }
    
    //로그아웃
    const {logout} = useContext(/*???*/)
    logout = () => {
        setUser(null);
    }

    //navi 변수
    const navigate = useNavigate();

    //로그인 핸들
    const HandleLogin = () => {
        if(userID === 'admin' && Pw === '1234'){
            login(userID) // Context에 어떻게 저장이 되는지 이해불가
            alert('로그인 됐습니다.');
            navigate('/Header'); //홈으로 돌아감
        }else{ alert('ID와 PW를 확인하세요.') }
    }

    //로그아웃 핸들
    const HandleLogOut = () => {
        logout();
        navigate('/Header'); // 로그아웃 후 홈으로
    }

    return(

        <div>

            <div>
                <h1>로그인 페이지</h1>
                <input type="text" placeholder="ID" value={userID} onChange={(e) => setUserId(e.target.value)}/>
                <input type="text" placeholder="PW" value={Pw} onChange={(e) => setPw(e.target.value)}/>
                <button type="button" onClick={HandleLogin}>로그인</button>
            </div>

            {/* 어딘가에 붙여넣을 로그아웃 버튼 */}
            <button type="button" onClick={HandleLogOut}로그아웃></button>

        </div>
    )
}