import { useEffect, useState } from "react";

export default function TopMenu(){
    
    // 검색창
    const [search, setSearch]=useState('');
    // 검색 필터 => 장르 검색
    const [findfilter, setFindFilter]=useState('Thriller')
    const [userData, setUserData]=useState([])
    const searchinput = (e) => [setSearch(e.target.value)]
    
    useEffect(()=>{
        // 파라미터
        fetch(`https://api.tvmaze.com/shows`)
        .then((res)=>{return res.json()})
        .then((data) => {
            setUserData(data)
            console.log(data)
        })
        .finally(()=>console.log("요청완료"))
    },[])

    // 검색 필터
        // if(!search.trim()){
        //     setFindFilter(item)
        //     return;
        // }

        const ReFindFilter = userData.filter((item)=>item.genres === findfilter )
    //    클릭 핸들러
    const clickHandler = (num) => {
        if(num === 1){
            setFindFilter('Thriller')
        }
    }
    return(

            <div>
                <button type="button" onClick={()=>clickHandler(1)}>스릴러</button>
                {/* <input type="text" value={search} onChange={() => setSearch(e.target.value)} placeholder="작품명을 입력하세요."/> */}
                {ReFindFilter.map((item)=>(
                    <li key={item.id}>{item.name}:{item.genres}</li>
                ))}
                {findfilter.length === 0 && <p>검색 결과 없음</p>}
            </div>

    )
}