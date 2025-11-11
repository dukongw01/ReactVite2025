import { useEffect, useState } from "react";

export default function ExJ04(){
    // JSON에서 데이터 넘겨받을 상태 변수
    const [products, setProducts]=useState([])
    // category별 탭 메뉴 작성 위한 상태변수
    const [tabList, settabList]=useState("men's clothing");

    const imgJSON = () => {
        fetch('https://fakestoreapi.com/products')
        .then((res)=>{
            if(!res.ok){
                throw new Error(`오류${res.status}`)
                // throw new Error('에러상태', ${res.status})
                // 리액트 Error 생성하는 생성자 동작방식 때문에 생기는 문제
            }
            return res.json()
        }).then((data)=>{
            setProducts(data)
            // console.log(`JSON으로 ${data}`) => [Object, object]
            // 배열 또는 객체{}는 문자열로 바꾸어 출력하려고 한다.
            // .tostring() 자바스크립트가 가지고 있는 메소드 객체
            // Array나 Object의 기본 tostring()은 사람이 알아 볼 수 없는 상태
            // => [Object Object] 형태로 호출 / 문자열 변환 방식의 한계이다
            // 고로 여기서는 consol.log(인수1, 인수2)
            console.log(`JSON으로 받은 데이터 ${data}`)
        }).catch((err)=>{console.log(err.message)}).finally(()=>{console.log('요청 완료')})
    }
    useEffect(()=>{
        imgJSON()
    },[])

    const tabList
    const tabFilter = data.filter ((item) => item.category === tabList)
    // rating은 모든 제품 필터
    // 나중을 대비한 방지용 코드
    const rateFilter = data.filter ((item) => item.rating.rate > 0)
    // rateFilter 이용해 sort()함수로 정렬한다.
    // sort((a, b) => a - b) : 오름차순 정렬
    // sort((a, b) => b - a) : 내림차순 정렬
    const rateCopy =[...rateFilter]
    const rateSort = rateCopy.sort((a,b) => b.rating.rate - a.rating.rate)
    // onClick 핸들러 함수
    const ClickHandeler = (num)=>{
        if(num === 1){
            settabList("man's")
        }else if(num ===2){
            settabList("Jeweley")
        }else if(num ===3){
            settabList("electronics")
        }else{
            settabList("women's clothing")
        }
        setRateShow(false);
    }

    return(
        <>
            <div>
                <h1>Fake Store</h1>
                <button type="button" onClick={()=>ClickHandeler(1)}>men's clothing</button>
                <button type="button" onClick={()=>ClickHandeler(2)}>Jeweley</button>
                <button type="button" onClick={()=>ClickHandeler(3)}>electronics</button>
                <button type="button" onClick={()=>ClickHandeler(4)}>women's clothing</button>
                <button type="button" onClick={()=>setRateShow(true)}>rating</button>
                <ul>
                    {/* setRateShow(true) 이면 rateSort출력되고 아니면 tabfilter출력 */}
                    {(rateShow ? rateSort : tabFilter).map((item)=>(
                        <li key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            <p>{item.rating.rate}</p>
                        </li>
                    ))}
                    {products.map((item,index)=>(
                        <li key={index}>
                            <img src={item.image} alt={item.title}/>
                            <h4>{item.title}</h4>
                            <p>{item.price}
                            <span>{item.rating.rate}</span>
                            </p>
                        </li>
                    ))}
                    {tabFilter.map((item)=>{
                        <li key={item.id}>

                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}