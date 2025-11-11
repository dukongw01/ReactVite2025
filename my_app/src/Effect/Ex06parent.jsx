import {  useEffect, useState } from "react";
import Ex06child from '../Effect/Ex06child';

export default function Ex06parent(){
    // 내코드
    // const[show, setShow]=useState(true);


    // -----선생님 코드
    const[toggle, setToggle]=useState(false)
    // toggle => false <-> true 함수 작성
    const togglehandeler = () => {
        setToggle(!toggle)
    }

    return(
        <>
        {/* 내코드 */}
            {/* <div>
                <h1>Lifecycle Demo</h1>
                <button onClick={()=>setShow(!show)}>컴포넌트 보기</button>
                <p>{show && <Ex06child/>}</p>
                <p>F12를 눌러 콘솔을 확인하세요!</p>
                <p>컴포넌트의 마운트/언마운트 메세지가 출력됩니다.</p>
            </div> */}

            {/* -----선생님 코드 */}
            <div>
                <h1>Lifecycle Demo</h1>
                <button onClick={togglehandeler}>{toggle?'컴포넌트 숨기기':'컴포넌트 보이기'}</button>
                {/* 조건부 랜더링 toggle이 true일 때만 자식 컴포넌트 렌더링 */}
                {toggle && <Ex06child/>}
                <p>F12를 눌러 콘솔을 확인하세요!</p>
                <p>컴포넌트의 마운트/언마운트가 출력됩니다.</p>
            </div>
        </>
    )
}