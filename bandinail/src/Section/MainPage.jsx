import { useEffect, useState } from "react";

export default function MainPage(){

    return(
        <div className="Main-container">
            {/* 상단 메뉴 탭 필터 */}
            <div className="Tap-filer">
                <h3>그날의 기분을 내 손톱 위에</h3>
                <ul>
                    <li>젤네일</li>
                    <li>폴리쉬</li>
                    <li>네일케어</li>
                    <li>리무버</li>
                    <li>네일 툴</li>
                </ul>
            </div>
            {/* 중앙 상품 변화 */}
            <div className="Item-box">

            </div>
        </div>
    )
}