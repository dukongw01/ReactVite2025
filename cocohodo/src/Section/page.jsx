import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './page.css';

export default function Page({datalist02}){
    // 섹션의 상품목록 페이지
    // 매장전용 또는 온라인구매 구분 버튼
    const buybtnfilter = datalist02.filter((item)=>item.buybtn === 0)
    const onbuybtnfilter = datalist02.filter((item)=>item.buybtn === 1)

    return(
        <div className="page-container">
            <div className="list-box">
                <ul>
                    {datalist02.map((item)=>(
                    <li key={item.id}>
                        <Link to={`/${item.id}`}>
                            <div className="hodoimgbox">
                                <img src={`/img/${item.title}`} alt={item.title}/>
                            </div>
                            <h3>{item.name}</h3>
                                <div className="pribuy">
                                    <p>{item.price.toLocaleString('ko')}원</p>
                                    <button type="button">{item.buybtn === 1 ? '매장전용' : '구매전용' }</button>
                                </div>
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}