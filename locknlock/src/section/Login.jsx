import Naver from '../../public/LnL_img/naver.png';
import Kakao from '../../public/LnL_img/kakaotalk.png';
import './Login.css';

export default function Login(){


    return(
        <div className="Login-container">
            <div className="Login-form-box">
                <h1>로그인</h1>
                <p>좋은 것만 담은 락앤락을 만나보세요!</p>
                <div className="Login-id-pw">
                    <input type="text" name="user_id" id="user_id" placeholder="아이디"/>
                    <input type="password" name="user_pw" id="user_pw" placeholder="비밀번호"/>
                    <input type="checkbox"/>아이디 저장
                </div>
                {/* 본인인증 */}
                <div className="Login-id-pw-btn">
                    <button className="Member-Login">로그인</button>
                    <button className="Prt-Login">본인 인증 로그인</button>
                </div>
                <div className="Find-id-pw">
                    <ul>
                        <li>아이디 찾기</li>
                        <li>비밀번호 찾기</li>
                        <li>회원가입</li>
                    </ul>
                </div>
                {/* 간편 로그인 */}
                <div className="Ez-Login">
                    <button><img src={Naver} alt="Naver" /></button>
                    <button><img src={Kakao} alt="KAKAO" /></button>
                </div>
                {/* 비회원 */}
                <div className="Non-Login">
                    <input type="text" name="name" placeholder='주문자명'/>
                    <input type="number" name="der-number" placeholder='주문번호'/>
                    <button className='Search-oder'>주문 조회</button>
                    <p><strong>ⓘ주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.</strong></p>
                </div>
            </div>
        </div>
    )

}