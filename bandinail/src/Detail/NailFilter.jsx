import { useEffect, useState } from "react";

export default function NailFilter(){

    // ShopPage로 필터 내보내기

    //카테고리 구분
    const [nailfilter, setNailfilter] = useState('');

    //탭 필터 onClickTap
    const ClickTap = (num) =>{
        if(num === 1){ setNailfilter('color') }
        else if(num === 2){ setNailfilter('glitter') }
        else if(num === 3){ setNailfilter('polish') }
        else if(num === 4){ setNailfilter('remover') }
        else if(num === 5){ setNailfilter('care') }
        else if(num === 6){ setNailfilter('tool') }
        else{ setNailfilter(''); }
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
                          <NailList Naildata={filterNailData} />
                      </div>
            </div>    
        </div>
    )

    return nailfilter, setNailfilter, ClickTap
}