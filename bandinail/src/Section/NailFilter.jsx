import { useEffect, useState } from "react";
import ShopPage from "./ShopPage";

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
        <div>
            <div className="section-container">
                <div className="top-title">{/* 빈 공간 */}</div>
                    <div className="page-tap">
                        <ul>
                            <li><button onClick={()=>ClickTap(0)}>전체</button></li>
                            <li><button onClick={()=>ClickTap(1)}>젤</button></li>
                            <li><button onClick={()=>ClickTap(2)}>글리터</button></li>
                            <li><button onClick={()=>ClickTap(3)}>폴리머</button></li>
                            <li><button onClick={()=>ClickTap(4)}>리무버</button></li>
                            <li><button onClick={()=>ClickTap(5)}>케어</button></li>
                            <li><button onClick={()=>ClickTap(6)}>툴</button></li>
                        </ul>
                    </div>
                    <div>
                        <ShopPage Datalist={nailDataList} FilterData={tapFilter} />
                        {/* ShopPage.jsx에 TapFilter와 Datalist=nailDataList(APP.jsx)를 프롭스 */}
                    </div>
            </div>    
        </div>
    )

}