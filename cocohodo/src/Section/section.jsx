import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Page from "./page";
import './section.css';

export default function Section({datalist}){

    // console.log("여기까지 읽었어")
    // for(let i=0;i<props.Hodo.length; i++){
    //     console.log(props.Hodo[i].id)
    // }

    // console.log("여기는 ...")

    // 상품 카테고리 담는 수
    const [category, setCategory]=useState('');
    
    const [hodolist, setHodoList]=useState([]);
    
    // useEffect(()=>{
    //     fetch('hodolist.jsx')
    //     .then((res)=>{ return res.category()})
    //     .then((data)=>{ setHodoList(data)
    //         console.log('데이터') })
    //     .catch(()=>{})
    //     .finally(()=>{})
    // },[])

    return(
        <div className="section-container">
            <div className="top-title">
                <h1>온라인 몰{/*바뀌는 글씨 자리*/}</h1>
            </div>
            <div className="page-tap">
                <ul>
                    <li><Link to='/'>전체</Link></li>
                    <li><Link to='/'>BEST</Link></li>
                    <li><Link to='/'>선물용</Link></li>
                    <li><Link to='/'>답례용</Link></li>
                    <li><Link to='/'>앙버터</Link></li>
                    <li><Link to='/'>크림치즈</Link></li>
                    <li><Link to='/'>단체/간식용</Link></li>
                    <li><Link to='/'>견과류</Link></li>
                </ul>
                {/* 페이지 버튼 자리 */}
            </div>
            <div className="hodopage">
                <Page  datalist02={datalist}/>
            </div>
            <div className="page-num">
                <p> 1 2 3 </p>
            </div>
        </div>
    )
}