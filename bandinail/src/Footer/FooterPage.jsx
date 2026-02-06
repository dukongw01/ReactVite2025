import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './FooterPage.css';

export default function FooterPage(){
    return(
        <div className="FTcontainer">
            <div className="footer-box">
                <div className="left-box">
                    <div className="lefta-box">
                        <ul>
                            <li><h1>BANDI</h1></li>
                            <li><Link to='/'>회사소개</Link></li>
                            <li><Link to='/'>이용약관</Link></li>
                            <li><Link to='/'>개인정보처리방침</Link></li>
                            <li><Link to='/'>이용안내</Link></li>
                        </ul>
                    </div>
                    <div className="leftb-box">
                        <p>
                            법인명(상호) : 위미인터내셔날(주) /대표자(성명) : 배선미 /개인정보관리책임자 : 김희지 <br/>
                            주소 : 06123 반디빌딩 11층 서울특별시 강남구 봉은사로 114 (역삼동)<br/>
                            전화 : 080-021-0770 /팩스 : 02-539-0497<br/>
                            사업자 등록번호 : 211-88-15682 /통신판매업 신고 : 제 2012-서울강남-03415호 <strong>[사업자정보확인]</strong><br/>
                            COPYRIGHT © 반디네일. ALL RIGHTS RESERVED.
                        </p>
                    </div>
                </div>
                <div className="right-box">
                    <ul>
                        <li><h2>고객상담 : 080-021-0770</h2></li>
                        <li><h2>AS문의 : 070-4239-0701</h2></li>
                        <li><p>월-금 09:00~18:00 | 점심시간 12:30~13:30 | 토.일.공휴일 휴무</p></li>
                        <li>
                            <div className="sns-box">
                                <img src='./bandi_img/youtube.png' alt="SNSicon" />
                                <img src='./bandi_img/twitter.png' alt="SNSicon02" />
                                <img src='./bandi_img/kakaotalk.png' alt="SNSicon03" />
                                <img src='./bandi_img/instagram.png' alt="SNSicon04" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}