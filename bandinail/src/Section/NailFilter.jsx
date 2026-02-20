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
        else{ setTapFilter(''); }
    }

    return(
            <div className="section-container">
                <div className="top-category">{/* 빈 공간 */}
                    <ul>
                        <li><img src='bandi_img/Thumbnail01.jpg' alt="Thumbnail01" /><button onClick={()=>ClickTap(1)}>젤</button></li>
                        <li><img src='bandi_img/Thumbnail04.jpg' alt="Thumbnail04" /><button onClick={()=>ClickTap(2)}>글리터</button></li>
                        <li><img src='bandi_img/Thumbnail58.jpg' alt="Thumbnail58" /><button onClick={()=>ClickTap(3)}>폴리머</button></li>
                        <li><img src='bandi_img/Thumbnail60.jpg' alt="Thumbnail60" /><button onClick={()=>ClickTap(4)}>리무버</button></li>
                        <li><img src='bandi_img/Thumbnail64.jpg' alt="Thumbnail64" /><button onClick={()=>ClickTap(5)}>케어</button></li>
                        <li><img src='bandi_img/Thumbnail70.jpg' alt="Thumbnail70" /><button onClick={()=>ClickTap(6)}>툴</button></li>
                    </ul>
                </div>
                <div className="side-category">
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
                        <ul>
                            <li><p>색상</p></li>
                            <li><div className="colorChips01">빨</div></li>
                            <li><div className="colorChips02">주</div></li>
                            <li><div className="colorChips03">노</div></li>
                            <li><div className="colorChips04">초</div></li>
                            <li><div className="colorChips05">파</div></li>
                            <li><div className="colorChips06">보</div></li>
                            <li><div className="colorChips07">흰</div></li>
                            <li><div className="colorChips08">검</div></li>
                        </ul>
                    </div>
                    <div className="side-button">
                        <p>유형</p>
                        <button type="button">글리터</button>
                        <button type="button">무광</button>
                    </div>
                </div>
                <div className="shoping">
                    <ShopPage Datalist={nailDataList} FilterData={tapFilter} />
                    {/* NailFilter에서 ShopPage.jsx에 받아온 Datalist=nailDataList(APP.jsx)와 TapFilter를 프롭스 */}
                </div>
            </div>
    )

}