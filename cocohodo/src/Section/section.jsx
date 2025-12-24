import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Page from "./page";
import './section.css';
import HdSilde from "../Header/Hdslide";

export default function Section({datalist}){

    // 탭 메뉴 클릭시 hododata.jsx의 category 구분 필터 생성
    const [tapfilter, setTapFilter]=useState('');
    const [categorys, setCategorys]=useState([]);

    
    useEffect(()=>{
        fetch({datalist})
        .then((res)=>{return res.datalist()})
        .then((data)=>{setCategorys(data)
            console.log('데이터')
        })
        .catch(()=>{})
        .finally(()=>{})
    },[])
    

    const nutsFilter = categorys.filter((item)=>item.category.includes('nuts'))


    return(
        <div className="section-container">
            <HdSilde/>
            <div className="top-title">
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
            </div>
            <div className="hodopage">
                <Page datalist02={datalist}/>
            </div>
                {/* 페이지 버튼 자리 */}
            {/* <div className="page-num">
                <p> 1 2 3 </p>
            </div> */}
        </div>
    )
}