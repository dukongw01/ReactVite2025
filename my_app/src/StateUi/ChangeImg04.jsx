import { useState } from "react";

export default function ChangeImg04(){

    const Imgs=[
        // 이미지 탭메뉴 출력
        // 조건에 만족하는 값을 하나가 아니라 여러개 배열로 추출
        // ㅐ열이름, 필터((요소, 이넥스, 원본배열))=>리턴 조건
        // 조건에 만족하는 새로운 배열을 반환
        // 조건에 만족하지 않으면 빈배열 반환
        // 조건 입력 -> 조건에 만족 [{},{},{},{},]
        {id:1, name:'pic-1.jpg', category:1},
        {id:2, name:'pic-2.jpg', category:1},
        {id:3, name:'pic-3.jpg', category:1},
        {id:4, name:'pic-4.jpg', category:1},
        {id:5, name:'pic-5.jpg', category:1},
        {id:6, name:'pic-6.jpg', category:1},
    ];
    const[selectCate, setSelectCate]=useState(1);
    const filterImg = Imgs.filter((img)=>img.category === selectCate)


    return(
        <>
            <div>
                <h3>이미지 탭 전환 예제</h3>
                <button type='button'>배경</button>
                <button type='button'>나무</button>
                <div className="img-area">
                    {/* 맵 필요. 맵->배열->필터로 돌림 */}
                    {filterImg.map((img))}
                </div>
            </div>
        </>
    )
}