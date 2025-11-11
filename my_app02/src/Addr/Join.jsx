import './Join.css'
import PostCode from './Postcode'

// 회원가입 함수
export default function Join(){
    return(
        <div className='joinWrap'>
            <h1>JOIN</h1>
            <p>회원가입 후 다양한 혜택을 누리실 수 있습니다.</p>
            <div className='title'>
                <h2>회원정보 입력</h2>
                <p>*필수입력사항</p>
            </div>
            <form action="#" method='post'>
                <ul className='joinForm'>
                    <li>
                        <label htmlFor="userID">아이디</label>
                        <input type="text" name="userID" id="userID"/>
                    </li>
                    <li>
                        <label htmlFor="userPw">비밀번호</label>
                        <input type="password" name="userPw" id="userPw"/>
                    </li>
                    <li>
                        <label htmlFor="userPwRe">비밀번호 확인</label>
                        <input type="password" name="userPwRe" id="userPwRe"/>
                    </li>
                    <li>
                        <label htmlFor="userName">이름</label>
                        <input type="text" name="userName" id="userName"/>
                    </li>
                    <li>
                        <label htmlFor="userEmail">E-mail</label>
                        <input type="email" name="userEmail" id="userEmail"/>
                    </li>
                    <li>
                        <label htmlFor="userPhone">휴대폰 번호</label>
                        <input type="tel" name="userPhone" id="userPhone"/>
                    </li>
                    <li>
                        <label>주소</label>
                        {/* 이부분에 postcode 태그를 불러올 예정 */}
                        <PostCode/>
                    </li>
                </ul>
                <button type="submit" id='joinBtn'></button>
            </form>
        </div>
    )
}