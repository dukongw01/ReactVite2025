import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer(){
    return (
        <>
            <div className="footer-container">
                <hr/>
                <div className="footer-top">
                    <ul>
                        <li><Link to=''><p>고객센터</p></Link></li>
                        <li><Link to=''><p>이용약관</p></Link></li>
                        <li><Link to=''><p>개인정보처리방침</p></Link></li>
                        <li><Link to=''><p>청소년 보호정책</p></Link></li>
                        <li><Link to=''><p>법적고지</p></Link></li>
                        <li><Link to=''><p>이벤트</p></Link></li>
                        <li><Link to=''><p>인재채용</p></Link></li>
                    </ul>
                    <ul className="ftbrand">
                        <li><Link to=''><p>브랜드 바로가기 +</p></Link></li>
                        <li>|</li>
                        <li><Link to=''><p>그룹 계열사 바로가기 +</p></Link></li>
                    </ul>
                </div>
                <div className="footer-center">
                    <p>대표이사 : 최주희 | 사업자정보확인</p>
                    <p>사업자등록번호 : 188-88-01893 | 통신판매신고번호 : 2020-서울마포-3641호</p>
                    <p>사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동) | 호스팅사업자 : 아마존웹서비시즈코리아 유한책임회사</p>
                    <p>고객센터 (평일 09시~18시/공휴일 휴무) | 챗봇/채팅 상담</p>
                    <p>1:1 게시판 문의 | 대표메일 : tving@cj.net | 유료 ARS : 1670-1525(음성/메시지 안내)</p>
                    <p>ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-808-0780</p>
                    <p>Mnet 고객센터(방송편성문의) : 1855-1631</p>
                </div>
                <div className="footer-bottom">
                    <Link to=''><img src="img/snslogos.png" alt="logo" /></Link>
                    <p>© TVING Corp. ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </>
    )
}