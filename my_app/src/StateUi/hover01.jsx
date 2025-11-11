import { useState } from "react";

export default function Hover01(){
    // isHoverd = false면 hover 아닌 상태
    const[isHoverd, setIsHoverd]=useState(false)
    
    return(
        <>
            <div onMouseEnter={()=>setIsHoverd(true)}
            onMouseLeave={()=>setIsHoverd(false)}
            style={{backgroundColor:isHoverd?'blue':'gray', padding:'20px', cursor:'pointer'}}>

            </div>
        </>
    )
}