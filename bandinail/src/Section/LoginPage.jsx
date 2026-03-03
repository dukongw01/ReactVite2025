import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import naver from '../../public/bandi_img/naver.png';
import kakaotalk from '../../public/bandi_img/kakaotalk.png';
import './LoginPage.css';

export default function LoginPage(){

    return(
        <div className="login-table">
            <table>
                <caption>
                    <h2>로그인</h2>
                </caption>
                <tbody>
                    <tr className="id-pw">
                        <td><input type="text" placeholder="아이디 입력"/></td>
                        <td><input type="password" placeholder="비밀번호 입력"/></td>
                    </tr>
                    <tr className="rock-text">
                        <td><p>보안접속</p></td>
                    </tr>
                    <tr className="find-id-pw">
                        <td><Link to="/">아이디찾기</Link></td>
                        <td>|</td>
                        <td><Link to="/">비밀번호 찾기</Link></td>
                    </tr>
                    <tr className="table-login-btn">
                        <td><button type="button"><Link to="">로그인</Link></button></td>
                    </tr>
                    <tr className="qeek-btn">
                        <td><p>간편 로그인</p></td>
                    </tr>
                    {/* 중간 구분 */}
                    <hr/>
                    <tr className="na-ka-btn01">
                        <td><button type="button"><Link to="."><img src={naver} alt="naverlogin" />네이버 로그인</Link></button></td>
                    </tr>
                    <tr className="na-ka-btn02">
                        <td><button type="button"><Link to="."><img src={kakaotalk} alt="kakaologin" />카카오 로그인</Link></button></td>
                    </tr>
                    <tr className="table-join-btn">
                        <td><p><strong>아직 회원이 아니신가요?</strong> <br/>회원이 되시면 다양한 혜택을 받을 수 있습니다!</p></td>
                        <td><button type="button"><Link to="/JoinPage">회원가입</Link></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}