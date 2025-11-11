import { useState } from "react";

export default function Hover04(){
    // activeTap = null이면 이동할 탭 찾을 때 상용
    const[activeTap, setActiveTap]=useState(null)
    const taps=[
        {id:1, title:'HTML', content:'HTML은 웹의 구조를 담당한다.'},
        {id:2, title:'CSS', content:'CSS는 스타일을 담당한다.'},
        {id:3, title:'JavaScript', content:'JavaScript은 동작을 담당한다.'}
    ]

    // 활성화 된 탭 내용 찾는 코드 필요
    // 배열이름.find((요소,인덱스,원본배열)=>{return조건})
    // 조건을 만족하는 첫 번째 요소(그 객체 또는 값)을 반환
    // 만약 못 찾으면 undefind를 반환한다.
    // 검색이나 상세보기
    let contentText="탭 위에 마우스를 올려보세요" //기본 text
    if(activeTap !== null){
        //activetap과 같은 id를 가진 탭을 찾아야 함
        // 결론 findTap = 1, 또는 2, 3
        const findTap = taps.find((tap)=>tap.id === activeTap)
        console.log('여기까지')
        console.log(findTap)
        // 탭을 찾았으면 그 탭의 내용(content)를 contenText에 수정
        if(findTap){
            console.log('여기까지2')
            console.log(findTap)
            contentText = findTap.content
            console.log(contentText)
        }
    }
    
    return(
        <>
            <div style={{width:'400px', margin:'50px auto'}}>
                <h3>Hover Tap Menu</h3>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    {/* taps.map((요소(이름 별칭),index, 원본배열)=>()) */}
                    {/* taps.map((item)=>()):item은 tap */}
                    {taps.map((item)=>(
                        // map()=>반드시 태그의 고유번호(유일한)가 필요
                        // 고유 key={item.id}
                        <div key={item.id}
                        onMouseEnter={()=>setActiveTap(item.id)} //마우스 활성화
                        onMouseLeave={()=>setActiveTap(null)} //마우스 비활성화
                        >{item.title}</div>))}
                </div>
                {/* 탭 영역 */}
                <div style={{marginTop:'20px', padding:'15px', backgroundColor:'#fefefe', borderRadius:'5px', height:'50px'}}>
                    <div>{contentText}</div>
                </div>
            </div>
        </>
    )
}