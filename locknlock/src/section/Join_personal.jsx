import { useState } from "react";
import { Link } from "react-router-dom";

import './Join_personal.css';

export default function Join_personal(){

    // 체크박스 상태
    const [agree, setAgree] = useState({ //이용약관, 개인정보, 3자 제공
        Terms: false, Privacy: false, Third: false
    })

    // 전체 동의 체크
    const allAgreeCheck = (e) => {
        const isChecked = e.target.checked;
        setAgree({
            Terms: isChecked,
            Privacy: isChecked,
            Third: isChecked
        });
    };

    // 개별 체크
    const sigCheck = (e) => {
        const { name, checked } = e.target;
        setAgree(prev => ({ ...prev, [name]: checked }));
    };

    //모든 항목 체크 확인
    const isAllChecked = Object.values(agree).every(value => value === true);


    return(
        <div className='J-P-container'>
            <div className='J-P-form'>
                <h1>회원가입</h1>
                <div className="J-P-all-check">
                    <label For="all-check">
                        <input type="checkbox" id="all-check" checked={isAllChecked} onChange={allAgreeCheck} />
                        <strong>락앤락몰의 모든 약관을 확인하고 전체 동의합니다. <span className="gray-text">(필수, 선택항목 포함)</span></strong>
                    </label>
                </div>
                <div className='J-P-checkbox'>
                    <ul>
                        <li>
                            <label For="Terms">
                                <input type="checkbox" id="Terms" name="Terms" checked={agree.Terms} onChange={sigCheck} />
                                이용약관(필수)
                            </label>
                            <strong className='dldyd'>약관보기</strong>
                        </li>
                        <li>
                            <label For="Privacy">
                                <input type="checkbox" id="Privacy" name="Privacy" checked={agree.Privacy} onChange={sigCheck} />
                                개인정보 수집 및 이용(필수)
                            </label>
                            <strong className='dldyd'>약관보기</strong>
                        </li>
                        <li>
                            <label For="Third">
                                <input type="checkbox" id="Third" name="Third" checked={agree.Third} onChange={sigCheck} />
                                개인정보 제 3자 제공(선택)
                            </label>
                            <strong className='dldyd'>약관보기</strong>
                        </li>
                        <li>
                            <button className='J-P-phone'>휴대폰 본인인증</button>
                        </li>
                    </ul>
                </div>
                <div className='J-P-prvnex'>
                    <Link to='/Join'><button className="J-P-prev">이전</button></Link>
                    <button className="J-P-next">다음</button>
                </div>
            </div>
        </div>
    )
}