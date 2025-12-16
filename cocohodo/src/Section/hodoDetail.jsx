import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './hodoDetail.css';


export default function HodoDetail(){
    return(
        <div className="detail-container">
            <div className="sub-container">
                <div className="left-box">
                    <div className="tab-top">
                        <ul>
                            {/* 여기다 링크 엮기 */}
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>코코호도</Link></li>
                        </ul>
                        <div className="bic-img">
                            <div className="imgboxbic"></div>
                            <ul>
                                <li>
                                    <div className="imgboxsmall"></div>
                                </li>
                                <li>
                                    <div className="imgboxsmall"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-box">
                    <h3>딸기호두 과자</h3>
                    <div className="side-title">
                        <ul>
                            <li><p>5000원</p></li>
                            <li><p>공유아이콘</p></li>
                        </ul>
                    </div>
                    <hr/>
                    <h3>상품관련 안내사항</h3>
                    <p>배송방법</p>
                    <p>배송비</p>
                    <p>배송안내</p>
                    <hr/>
                    <p>수량*</p>
                    <select name="buyput" id="buyput">
                        <option value="">수량필수</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                    <div className="side-btn">
                        <ul>
                            <li>
                                <button type="button" className="sidebtn01">네이버페이</button>
                            </li>
                            <li>
                                <button type="button" className="sidebtn02">장바구니</button>
                            </li>
                            <li>
                                <button type="button" className="sidebtn03">찜하기</button>
                            </li>
                            <li>
                                <button type="button" className="sidebtn04">구매하기</button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="detail-imgbox">
                상세이미지영역
            </div>
        </div>
    )
}