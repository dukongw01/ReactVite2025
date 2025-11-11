import { useState } from "react";
export default function Test(){
    const [item, setItem]=useState([])
    const addTime=()=>{
// consol의 아이템 배열에 값이 추가 디어도
// 리액트 입장에서는 아이템의 주소가 바뀌지 않는다 판단
// 화면을 얻데이트 안한다
//그래서 리랜더링 하지 않아 화면에는 출력되지 않는다
        // item.push(`아이템${item.length +1}`)
        console.log(`아이템:${item}`)
        setItem([...item, `아이템${item.length+1}`])
        // setItem(...item, item.push(`아이템${item.length +1}`))
    }

        return(
            <>
                <button onClick={addTime}> 추가 </button>
                {/* <button onClick={()=>{setItem([...item, `아이템:${item.length +1}`])}}> 추가 </button> */}
                <ul>
                    {item.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </>
        )    
}