import { useEffect, useState } from "react";
import NailFilter from "./NailFilter";

export default function ShopPage({nailData}){


   
    
    return(
        <div className="Main-container">
            {nailData.map((item)=>(
                <p>{item.name}</p>
            )) }
            {/* 상단 메뉴 탭 필터 */}
            <div className="Tap-filer">
                <h3>그날의 기분을 내 손톱 위에</h3>
                
            </div>
            {/* 중앙 상품 변화 */}
            <div className="Item-box">
                <p>제발나와라~~</p>

            </div>
        </div>
    )
}