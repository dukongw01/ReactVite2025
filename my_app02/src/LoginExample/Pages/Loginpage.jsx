import { useContext,useState } from "react";
import { AuthContext } from "../Context/AuthContext";
// useNavigate import 한다
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){
    // id, pw 상태 저장 변수 생성
    const[id, setId]=useState('');
    const[pw, setPw]=useState('');
    const {login} = useContext(AuthContext)
    // useNavigate을 변수로 지정
    const navigate = useNavigate();
    // id = 'admin' 이고 pw = '1234' 면 로그인 성공
    // 로그인 성공시 alert(로그인 성공) 이후 home페이지로 이동
    // 아니면 'id, pw확인'을 띄우기

    const handelLogin = () => {
        if(id === 'admin' && pw === '1234'){
            // 내가 입력한 내 ID를 Home에 출력해야함
            login(id) //Context에 사용자 정보 저장 -> AuthContext에 정의한 정보
            alert('로그인 성공');
            // 논리구현 함수 란에 <Link to=''> 쓸 수 없음.
            navigate('/Home'); //Home으로 이동
            // // 페이지 history가 존재해야 이동 가능
            // navigate(1) //현재 페이지 보다 한단계 앞으로
            // navigate(-1) //현재 페이지 보다 한단계 뒤로 이동
            // navigate(0) //현재 페이지 새로고침
        } else { alert('id와 pw를 확인 하세요.'); }
    }
    return (
        <div>
            <h2>로그인 페이지</h2>
            <input type="text" placeholder="ID입력" value={id} onChange={(e) => setId(e.target.value)}/>
            <input type="password" placeholder="PW입력" value={pw} onChange={(e) => setPw(e.target.value)}/>
            <button type="button" onClick={handelLogin}>로그인</button>
        </div>
    )
}