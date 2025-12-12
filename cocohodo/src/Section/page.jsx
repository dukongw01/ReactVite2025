import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './page.css';

export default function Page(){

    //상품 정보값
    const Hodo = [
        // 견과류
        {id:1, name:'간식용 아몬드', title:'amond_1.jpg', price:5000, category:'nuts', quantity:1 },
        {id:2, name:'간식용 캐슈넛', title:'cashewnut_1.jpg', price:5000, category:'nuts', quantity:1 },
        {id:3, name:'코코너츠', title:'coconuts_1.jpg', price:21000, category:'nuts', quantity:1 },
        // 일반 호두과자
        {id:4, name:'간식용 호두과자', title:'cocosnack_1.jpg', price:21000, category:'snack', quantity:0 },
        {id:5, name:'단체 간식용 호두과자', title:'cocosnack_3.jpg', price:4000, category:'snack', quantity:1 },
        // 크림 호두과자
        {id:6, name:'딸기 크림치즈(소)', title:'cocosnack_6.jpg', price:5200, category:'cream', quantity:0 },
        {id:7, name:'딸기 크림치즈(대)', title:'cocosnack_7.jpg', price:10400, category:'cream', quantity:0 },
        {id:8, name:'플레인 크림치즈(소)', title:'cocosnack_8.jpg', price:5200, category:'cream', quantity:0 },
        {id:9, name:'플레인 크림치즈(대)', title:'cocosnack_9.jpg', price:10400, category:'cream', quantity:0 },
        // 앙버터
        {id:10, name:'반반 호두과자(소)', title:'cocosnack_35.jpg', price:4400, category:'butter', quantity:1 },
        {id:11, name:'반반 호두과자(대)', title:'cocosnack_36.jpg', price:8500, category:'butter', quantity:1 },
        {id:12, name:'앙버터 호두과자(소)', title:'cocosnack_37.jpg', price:4800, category:'butter', quantity:1 },
        {id:13, name:'앙버터 호두과자(대)', title:'cocosnack_38.jpg', price:9000, category:'butter', quantity:1 },
        // 초코딸기, 선물용
        {id:14, name:'딸기 호두과자', title:'cocosnack_10.jpg', price:5000, category:'gift', quantity:0 },
        {id:15, name:'초코 호두과자', title:'cocosnack_14.jpg', price:5000, category:'gift', quantity:0 },
        {id:16, name:'초코베리', title:'cocosnack_16.jpg', price:4000, category:'gift', quantity:0 },
        {id:17, name:'프리백', title:'cocosnack_17.jpg', price:6600, category:'gift', quantity:0 },
        {id:18, name:'레드컵', title:'cocosnack_19.jpg', price:4400, category:'gift', quantity:0 },
        {id:19, name:'미니케이스(미니)', title:'cocosnack_21.jpg', price:4200, category:'gift', quantity:1 },
        {id:20, name:'미니케이스(소)', title:'cocosnack_22.jpg', price:5200, category:'gift', quantity:1 },
        {id:21, name:'미니케이스(중)', title:'cocosnack_23.jpg', price:7500, category:'gift', quantity:1 },
        {id:22, name:'미니케이스(대)', title:'cocosnack_24.jpg', price:11000, category:'gift', quantity:1 },
        // 선물용
        {id:23, name:'선물용(소)', title:'cocosnack_25.jpg', price:15000, category:'present', quantity:1 },
        {id:24, name:'선물용(중)', title:'cocosnack_27.jpg', price:23000, category:'present', quantity:1 },
        {id:25, name:'선물용(대)', title:'cocosnack_29.jpg', price:34000, category:'present', quantity:1 },
        {id:26, name:'코코 스페셜(중)', title:'cocosnack_31.jpg', price:27000, category:'present', quantity:1 },
        {id:27, name:'코코 스페셜(대)', title:'cocosnack_33.jpg', price:41000, category:'present', quantity:1 },
    ]

    // 카테고리 구분용 버튼
    const [hodolist, setHodoList]=useState([])
    const buttonfiter = hodolist.filter((Hodo)=>Hodo.quantity.includes((`${Hodo.quantity[0]}`) === '매장전용'));


    return(
        <div className="page-container">
            <div className="list-box">
                <ul>
                    {Hodo.map((item)=>(
                    <li key={item.id}>
                        <img src={`/img/${item.title}`} alt={item.title} style={{width:'325px'}}/>
                        <h3>{item.name}</h3>
                        <p>{item.price}원</p>
                        <button type="button">{buttonfiter}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}