import { useState } from "react";

export default function Hover03(){
    // isOpen = false면 안 보임
    const[isOpen, setIsOpen]=useState(false)
    
    return(
        <>
            <div onMouseEnter={()=>setIsOpen(true)}
            onMouseLeave={()=>setIsOpen(false)}
            style={{position:'relative', display:'inline-block'}}>
                <button type="button">메뉴</button>
                <ul
                style={{display:isOpen ?'block':'none', position:'absolute', top:'100%', left:0, backgroundColor:'#fff',
                    border:'1px solid #333', listStyle:'none', margin:0, padding:0, width:'150px'}}>
                    <li>항목1</li>
                    <li>항목2</li>
                    <li>항목3</li>
                </ul>
            </div>
        </>
    )
}