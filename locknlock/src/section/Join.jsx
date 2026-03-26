import { Link } from "react-router-dom";

import './Join.css';

export default function Join(){


    return(
        <div className="Join-container">
            <div className="Join-form">
                <h2>회원가입</h2>
                <p>락앤락 회원가입하고 더 많은 혜택을 받아보세요!</p>
                <div className="Join-box">
                        {/* 통합회원 */}
                    <div className="Join-in-p">
                        <Link to='/Join_personal'><h3>통합 회원 가입하기 </h3>
                        <p>통합 회원으로 가입하고 락앤락만의 특별한 멤버전용 혜택을 누리세요!</p></Link>
                        <span>〉</span>
                    </div>
                        {/* 법인회원 */}
                    <div className="Join-in-b">
                        <Link to='/Join_business'><h3>법인 회원 가입하기 </h3>
                        <p>법인 회원이시면 사업자 번호로 간편하게 가입하세요!</p></Link>
                        <span>〉</span>
                    </div>
                </div>
                <div className="Join-text-strong">
                    <strong>ⓘ판촉 및 사은품용 다량구매 시 별도 제작이 가능합니다. 맞춤/다량구매 페이지에서 상담 신청해 보세요.</strong>
                </div>
            </div>
        </div>
    )


};