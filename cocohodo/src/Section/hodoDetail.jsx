import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './hodoDetail.css';
import { useParams } from "react-router-dom";
import HodoCart from "./hodoCart";
import linkimg from "../../public/img/linkimg.png";

export default function HodoDetail({datalist}){
    // 상세 페이지
    // app.jsx에  <Route path='/:id' element={<HodoDetail datalist={data}/>}/> 에서 id를 useParams() hook으로 받아오기
    const {id} = useParams();
   
    const findId = datalist.find((item)=>item.id === Number(id) )
    console.log(findId);

    // 수량 증가감소 버튼
    const [count, setCount] = useState(1);
    const plus = () => setCount(count+1);
    const minus = () => { if (count > 1) setCount(count-1);}

    return(
        <div className="detail-container">
            <div className="sub-container">
                <div className="left-box">
                    <div className="tab-top">
                        <ul>
                            {/* 상세페이지 경로 구분 탭 */}
                            <li><Link to='/'>Home</Link> <strong> ＞ </strong> </li>
                            <li><Link to='#' style={{color:'#61182a', fontWeight:'bold'}}>{findId.name}</Link></li>
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
                    <h2>{findId.name}</h2>
                    <div className="side-title">
                        <ul>
                            <li><p>{findId.price.toLocaleString('ko')}원</p></li>
                            <li><img src={linkimg} alt="linkimg" /></li>
                        </ul>
                    </div>
                    <hr/>
                    <h3>상품관련 안내사항</h3>
                    <p>배송방법 <span>택배</span></p>
                    <p>배송비 <span>3,000원(3만원 이상 무료배송) | 도서산간 배송비 추가</span></p>
                    <p>배송안내 <span>오전 11시 이전 주문 시 당일 출고 / CJ대한통운 (신선택배) / 출고 후 1~2일 소요 / 주말 및 공휴일 휴무</span></p>
                    <hr/>
                    <h4>수량*</h4>
                    <select name="buyput" id="buyput">
                        <option value="" >수량필수</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <div className="count-box">
                        <button type="button" onClick={minus}>-</button>
                        <p>{count}</p>
                        <button type="button" onClick={plus}>+</button>
                    </div>
                    <div className="side-btn">
                        <ul>
                            <li>
                                <button type="button" className="sidebtn01">네이버페이</button>
                            </li>
                            <li>
                                <button type="button" className="sidebtn02"><Link to={HodoCart}></Link>장바구니</button>
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
                <img src={`img/${findId.scrollimg}`} alt={findId.scrollimg} />
            </div>
        </div>
    )
}