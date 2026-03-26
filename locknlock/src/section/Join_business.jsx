import { Link } from "react-router-dom";

import './Join_business.css';

export default function Join_business(){
    return(
        <div className='J-B-container'>
            <div className='J-B-form'>
                <h1>법인 회원가입</h1>
                <p>법인 정보를 입력해주세요.</p>
                <div className="J-B-gray-text"><strong>입력하신 개인정보는 안전하게 암호화되어 제공되며 저장됩니다.</strong></div>
                <div className='J-B-checkbox'>
                    <ul>
                        <li>
                            <p className="J-B">회사명<span className="red-star">*</span></p>
                            <input type="text" placeholder="회사명 입력"/>
                        </li>
                        <li>
                            <p className="J-B">사업자등록번호<span className="red-star">*</span></p>
                            <input type="text" placeholder="사업자등록번호 입력" />
                        </li>
                        <li>
                            <p className="J-B">담당자 연락처<span className="red-star">*</span></p>
                            <input type="tel" placeholder="담당자 연락처 입력" />
                        </li>
                    </ul>
                </div>
                <div className='J-B-prvnex'>
                    <Link to='/Join'><button className="J-B-prev">이전</button></Link>
                    <button className="J-B-next">다음</button>
                </div>
            </div>
        </div>
    )
}