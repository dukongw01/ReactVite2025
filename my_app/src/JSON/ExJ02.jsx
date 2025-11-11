import { useEffect, useState } from "react";

export default function ExJ02(){

    // JSON에서 받아온 데이터 상태 저장하는 변수
    const[post, setPost]=useState([])
    
    // JSON에서 받아온 데이터를 처음 1회만 실행하도록 만들 예정
    useEffect(()=>{
        // fetch().then().then().catch().finally()
        // 비동기로 네트워크에 접속해서 데이터를 요청한다
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        //res(Response(응답))객체의 res.json() 응답 받은 데이터의 파싱(해석)
        .then((res) => {
            //res.ok -> 에러체크
            // 데이터가 오류 아님 res.ok = true (200~299)
            // 데이터가 오류면 res.ok = false
            // http 400/500 에러를 fetch가 잡지 못한다
            // res.ok를 이용해서 error를 잡는 것이다
            // res.ok는 boolean 데이터 타입이다
            // boolean은 오직 true(참) false(거짓)만 가질 수 있다.
            if(!res.ok){
                throw new Error(`에러 메세지 ${res.status}`)}
                //res.status는 지금 현재 오류 상태가 출력됨
                // 예) 404 not Found
            return res.json()
        })
        .then((post) => {
            setPost(post)
            console.log(post) })
        .catch((err)=>{ console.log(`오류: ${err.message}`)})
        .finally(()=>{ console.log('요청 완료') })
    },[])

    return(
        <>
            <div>
                <h3>게시글 5</h3>
                {post && <div>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>}
            </div>
        </>
    )
}