import { useState } from "react";
import { useContext } from "react";
import LikelistProvider from "./Likelist";

export default function LikelistPage(){
    const {likelist,removeLikelist}=useContext(LikelistContext)
    console.log(likelist)
    return(
        <div>
            <h2>찜 목록</h2>
            {likelist.length === 0?
            <p>빈 목록</p>:(
                <ul>
                    {likelist.map((item)=>(
                        <li key={item.id}>
                            {item.name}-{item.price.toLocaleString()}
                            <button type="button" onClick={()=>removeLikelist(item.id)}>찜 취소</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}