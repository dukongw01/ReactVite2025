import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderBanner from "../Banner/HeaderBanner";
import SectionBanner from "../Banner/SectionBanner";
import cart from '../../public/bandi_img/cart.png';
import sns01 from '../../public/bandi_img/sns01.jpg';
import sns02 from '../../public/bandi_img/sns02.jpg';
import sns03 from '../../public/bandi_img/sns03.jpg';
import sns04 from '../../public/bandi_img/sns04.jpg';
import onebanner from '../../public/bandi_img/onebanner.jpg';
import './MainPage.css';

//APP에서 nailDataList를 받아옴
export default function MainPage({nailDataList}){
    
    // 장바구니
    const cartBtn = (item) => {
        alert(`${item.name} 상품이 장바구니에 담겼습니다.`);
        console.log("담긴 상품:", item);
    };

    //세일 데이터
    const saleItems = nailDataList.filter(item => item.sale).slice(4,8);

    return(

        <div className="main-container">
            <div className="main-top">
                {/* 헤더 슬라이드 */}
                <HeaderBanner />
            </div>
            <div className="main-middle">
                {/* 배너와 할인 상품 표시 - 쇼핑몰 가장 첫페이지 */}
                <div className="main-grup">
                    {/* 섹션 배너 */}
                    <div className="s-banner">
                        <SectionBanner />
                    </div>
                    {/* 아이템 */}
                    <div className="main-item">
                        <h2>Simply Irresistible Deals</h2>
                        <ul>
                            {saleItems.map((item) => (
                                <li key={item.id}>
                                    {/* 상세페이지 이동 */}
                                    <Link to={`/DetailPage/${item.id}`}>
                                        <div className="catebox">
                                            {/* 썸네일  */}
                                            <img src={`bandi_img/${item.title}.jpg`} alt={item.name} />
                                        </div>
                                        <div className="pricebox">
                                            {/* 상품명 */}
                                            <p className="item-name">{item.name}</p>
                                            {/* 원가 */}
                                            <p className="item-price">{item.price.toLocaleString('ko-KR')}원</p>
                                            {/* 할인가 */}
                                            {item.sale && (
                                                <p>
                                                    <strong>
                                                    {(item.price * (1 - parseInt(item.sale) / 100)).toLocaleString('ko-KR')}원
                                                        {/* 퍼센트 */}
                                                        <span className="sale-percent">{item.sale}</span>
                                                    </strong>
                                                </p>
                                            )}
                                            <button type="button" className="DetailPage-btn">상세보기</button>
                                        </div>
                                    </Link>
                                    <div className="cart-btn">
                                        {/* 카트 버튼 */}
                                        <button type="button" className="cart-icon" onClick={() => cartBtn(item)}>
                                            <img src={cart} alt="cart icon" />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button type="button" className="morebtn"><Link to='/NailFilter'>더보기</Link></button>
                    </div>
                </div>
                {/* 쇼핑몰 가장 첫페이지 끝 */}
            </div>
            {/* 중간 배너 하나 */}
            <div className="onebanner"><Link><img src={onebanner} alt="onebanner" /></Link></div>
            <div className="sns-review">
                <h2>BANDI INSTAGRAM</h2>
                <p>- FOLLOW ON @bandinail_official -</p>
                <div className="review-box">
                    <Link><img src={sns01} alt="sns01" /></Link>
                    <Link><img src={sns02} alt="sns02" /></Link>
                    <Link><img src={sns03} alt="sns03" /></Link>
                    <Link><img src={sns04} alt="sns04" /></Link>
                </div>
            </div>
        </div>

    )

}