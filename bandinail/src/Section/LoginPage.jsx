import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage(){

    return(
        <div className="login-table">
            <table>
                <caption>
                    <h2>로그인</h2>
                </caption>
                <tbody>
                    <tr>
                        <th>회원 로그인</th>
                        <th>비회원(주문조회)</th>
                    </tr>
                    <tr>
                        <td><input type="text" placeholder="아이디 입력"/></td>
                        <td><input type="text" placeholder="비밀번호 입력"/></td>
                    </tr>
                    <tr>
                        <td><p>보안접속</p></td>
                    </tr>
                    <tr>
                        <td><button type="button"><Link to="/">로그인</Link></button></td>
                    </tr>
                    <tr>
                        <td><Link to="/">아이디찾기</Link></td>
                        <td>|</td>
                        <td><Link to="/">비밀번호 찾기</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/">네이버 아이콘</Link></td>
                        <td><Link to="/">네이버 로그인</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/">카카오 아이콘</Link></td>
                        <td><Link to="/">카카오 로그인</Link></td>
                    </tr>
                    <hr/>
                    <tr>
                        <td><p>아직 회원이 아니신가요? <br/>회원이 되시면 다양한 혜택을 받을 수 있습니다!</p></td>
                        <td><button type="button"><Link to="/JoinPage">회원가입</Link></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}