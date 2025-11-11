import { useEffect, useState } from "react";

export default function Ex02(){

    useEffect(() => {
        document.title ="Welcome to React"
    })
    return(
        <>
            <div>Title Changer</div>
            <p>브라우저를 확인해보세요.</p>
            <p>제목이 Welcome to React로 변경되었습니다.</p>
        </>
    )
}