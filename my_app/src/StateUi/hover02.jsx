import { useState } from "react";

export default function Hover02(){
    // isTooltip = false면 Tooltip 안 보임
    const[isTooltip, setIsTooltip]=useState(false)
    
    return(
        <>
            <div>
                <button type="button" onMouseEnter={()=>setIsTooltip(true)}
            onMouseLeave={()=>setIsTooltip(false)}>마우스를 올려보세요</button>
                {/* {isTooltip && <div>도움말 메세지</div>} */}
                {isTooltip ? <div>도움말 메세지</div> : null}
            </div>
        </>
    )
}