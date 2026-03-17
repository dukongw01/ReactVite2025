import { Link } from "react-router-dom";
import './Footer.css';



export default function Footer(){


    return(
        <div className="Footer-container">
            <div className="Footer-fit">
                <div className="Footer-left">
                    <p>주식회사 락앤락</p>
                    <p>서울특별시 중구 세종대로 14(남대문로5가) 그랜드 센트럴 A동 18층</p>
                    <p>대표 : 이영상</p>
                    <p>사업자 등록번호 : 214-85-34765</p>
                    <p>통신판매업신고번호 : 제 2022-서울중구-0892호</p>
                    <p>TEL : 1566-9905</p>
                    <p>FAX : 050-5500-9595</p>
                    <p>개인정보 보호책임자 : 박성훈</p>
                    <p>E-mail : webmaster@locknlock.com</p>
                    <p>사업자 등록정보 락앤락몰 상품이미지를 포함한 모든 컨텐츠는 저작권법 제 98조에 의거하여 보호를 받고 있습니다.</p>
                    <p>ⓒCopyright 주식회사 락앤락 All Rights Reserved.</p>
                </div>
                <div className="Footer-center">
                    <p>고객센터</p>
                    <h5>1566-9905</h5>
                    <p>상담시간 : 평일 09 : 00 ~ 18 : 00</p>
                    <p>점심시간 12 : 00 ~ 13 : 00</p>
                    <br/>
                    <p>고객님은 안전거래를 위해 당사에서 가입한 구매안전 서비스를 이용하실 수 있습니다. [서비스 가입사실 확인]</p>
                </div>
                <div className="Footer-right">
                    <ul>
                        <h5>회사소개</h5>
                        <li>락앤락 소개</li>
                        <li>개인정보처리방침</li>
                        <li>이용약관</li>
                        <li>오프라인 매장 안내</li>
                        <li>맞춤/다량구매</li>
                    </ul>
                    <ul>
                        <h5>고객센터</h5>
                        <li>공지사항</li>
                        <li>자주 묻는 질문</li>
                        <li>1:1문의</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}