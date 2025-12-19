import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './hodoDetail.css';
import { useParams } from "react-router-dom";

export default function HodoDetail({datalist}){

    // app.jsx에  <Route path='/:id' element={<HodoDetail datalist={data}/>}/> 에서 id를 useParams() hook으로 받아오기
    const {id} = useParams();
   
    const findId = datalist.find((item)=>item.id === Number(id) )
    console.log(findId);

    return(
        <div className="detail-container">
            <div className="sub-container">
                <div className="left-box">
                    <div className="tab-top">
                        <ul>
                            {/* 상세페이지 경로 구분 탭 */}
                            <li><Link to='/'>Home</Link> <strong> ＞ </strong> </li>
                            <li><Link to='#'>{findId.name}</Link></li>
                        </ul>
                        {/* 큰 썸네일 이미지 */}
                        <div className="bic-img">
                            <div className="imgboxbic">
                                <img src={`img/${findId.title}`} alt={findId.title} />
                            </div>
                            <ul>
                                <li>
                                    <div className="imgboxsmall">
                                        <img src={`img/${findId.title}`} alt={findId.title} />
                                    </div>
                                </li>
                                <li>
                                    <div className="imgboxsmall">
                                        <img src={`img/${findId.title2}`} alt={findId.title2} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-box">
                    <h3>{findId.name}</h3>
                    <div className="side-title">
                        <ul>
                            <li><p>{findId.price.toLocaleString('ko')}원</p></li>
                            <li><p>공유아이콘</p></li>
                        </ul>
                    </div>
                    <hr/>
                    <h3>상품관련 안내사항</h3>
                    <p>배송방법 <span>택배</span></p>
                    <p>배송비 <span>3,000원(3만원 이상 무료배송) | 도서산간 배송비 추가</span></p>
                    <p>배송안내 <span>오전 11시 이전 주문 시 당일 출고 / CJ대한통운 (신선택배) / 출고 후 1~2일 소요 / 주말 및 공휴일 휴무</span></p>
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
                                <button type="button" className="sidebtn03">♡ 찜하기</button>
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