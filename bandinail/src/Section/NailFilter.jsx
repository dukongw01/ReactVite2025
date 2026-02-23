import { useEffect, useState } from "react";
import ShopPage from "./ShopPage";
import './NailFilter.css';

//APP 에서 nailDataList를 받아옴
export default function NailFilter({nailDataList}){


  
    //카테고리 구분
    const [tapFilter, setTapFilter] = useState('');

    //탭 필터 onClickTap
    const ClickTap = (num) =>{
        if(num === 1){ setTapFilter('color') }
        else if(num === 2){ setTapFilter('glitter') }
        else if(num === 3){ setTapFilter('polish') }
        else if(num === 4){ setTapFilter('remover') }
        else if(num === 5){ setTapFilter('care') }
        else if(num === 6){ setTapFilter('tool') }
        else if(num === 7){ setTapFilter('glitter') }
        else{ setTapFilter(''); }
    }

    return(
            <div className="category-container">
                <div className="top-category">
                    <ul>
                        <li><button onClick={()=>ClickTap(1)}>
                            <img src='bandi_img/Thumbnail01.jpg' alt="Thumbnail01" />젤</button></li>
                        <li><button onClick={()=>ClickTap(2)}>
                                <img src='bandi_img/Thumbnail04.jpg' alt="Thumbnail04" />글리터</button></li>
                        <li><button onClick={()=>ClickTap(3)}>
                                <img src='bandi_img/Thumbnail58.jpg' alt="Thumbnail58" />폴리머</button></li>
                        <li><button onClick={()=>ClickTap(4)}>
                                <img src='bandi_img/Thumbnail60.jpg' alt="Thumbnail60" />리무버</button></li>
                        <li><button onClick={()=>ClickTap(5)}>
                                <img src='bandi_img/Thumbnail64.jpg' alt="Thumbnail64" />케어</button></li>
                        <li><button onClick={()=>ClickTap(6)}>
                                <img src='bandi_img/Thumbnail70.jpg' alt="Thumbnail70" />툴</button></li>
                    </ul>
                </div>
                <div className="side-cp">
                    <div className="side-category">
                        <h4>필터</h4>
                        <ul>
                            <li><button onClick={()=>ClickTap(0)}>전체</button></li>
                            <li><button onClick={()=>ClickTap(1)}>젤</button></li>
                            <li><button onClick={()=>ClickTap(2)}>글리터</button></li>
                            <li><button onClick={()=>ClickTap(3)}>폴리머</button></li>
                            <li><button onClick={()=>ClickTap(4)}>리무버</button></li>
                            <li><button onClick={()=>ClickTap(5)}>케어</button></li>
                            <li><button onClick={()=>ClickTap(6)}>툴</button></li>
                        </ul>
                        <div className="side-colorchip">
                            <h4>색상</h4>
                            <ul>
                                <li><div className="colorChips01"></div></li>
                                <li><div className="colorChips02"></div></li>
                                <li><div className="colorChips03"></div></li>
                                <li><div className="colorChips04"></div></li>
                                <li><div className="colorChips05"></div></li>
                                <li><div className="colorChips06"></div></li>
                                <li><div className="colorChips07"></div></li>
                                <li><div className="colorChips08"></div></li>
                            </ul>
                        </div>
                        <div className="side-button">
                            <h4>유형</h4>
                            <button type="button" onClick={()=>ClickTap(7)}>글리터</button>
                            <button type="button">무광</button>
                        </div>
                    </div>
                    <div className="shoping">
                        <ShopPage Datalist={nailDataList} FilterData={tapFilter} />
                        {/* NailFilter에서 ShopPage.jsx에 받아온 Datalist=nailDataList(APP.jsx)와 TapFilter를 프롭스 */}
                    </div>
                </div>
            </div>
    )

}