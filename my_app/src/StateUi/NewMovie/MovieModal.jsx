import { use, useState } from "react";

export default function MovieModal(props){
    // 모달 -> 투명 회색 오버레이 위에 모달 출력되도록 작성
    return(
        <>
            <div style={{position:'fixed', top:0, left:0, width:'100%', height:'100%',
                 background:'rgba(0,0,0,0.2)', display:"flex", justifyContent:'center', alignItems:'center'}}>
                    <div style={{backgroundColor:'white', padding:'20px', borderRadius:'5px', width:'300px'}}>
                        {/* 영화 제목 */}
                        <h4>{props.selectMovie.title}</h4>
                        {/* 영화 리뷰 부분 */}
                        <p>{props.selectMovie.review === '' ? '아직 작성된 리뷰가 없습니다.': props.selectMovie.review}</p>
                        <button type="button" onClick={props.onClose}>닫기</button>
                    </div>
                 </div>
        </>
    )
}