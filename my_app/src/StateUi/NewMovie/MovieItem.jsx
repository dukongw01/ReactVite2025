import { use, useState } from "react";

// 무비 리스트 부모의 자식
// 무비 app의 손자

export default function MovieItem(props){
    return(
        <>
            <li>
                {/* MovieItem이 부모로부터 물려받은 데이터는 Movie이다
                    Movie=[id:va, title:va, review:val] */}
                {props.movie.title}
                <button type="button" onClick={()=>props.onSelect(props.movie)}>상세보기</button>
            </li>
        </>
    )
}