import { useEffect, useState } from "react";

export default function ExFecth(){
    // 1. 상태변수
    // 로딩 중 표시
    // 현재 loading = true면 로딩 중....
    // loading = false => 종료 / 종료를 안하면 계속 로딩 중이 된다.
    const[loading, setLoading]=useState(true);
    // 가져온 데이터 저장
    const[data, setData]=useState([]);
    // 에러메세지 저장
    const[errMsg, setErrMsg]=useState(null);

    useEffect(()=>{
        console.log('데이터 요청 시작');
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
            //res는 => response객체의 약어
            //이미 리액트의 객체로 존재한다.
            //상태가 정상이면 true를 반환하고, 상태가 정상이 아니면 false를 반환한다.
            //res.ok=true
            if(!res.ok){ // http 상태의 코드를 확인
                throw new Error(`HTTP ERROR! STATUS: ${res.status}`)
                }
                // JSON 파싱 (해석)
                return res.json()
        })
        .then((data)=>{ console.log( '가져온 데이터', data ) // <- 지금 불러온 데이터는 이 부분에만 존재한다.
            setData(data)//상태 저장
        })
        // err를 catch한다는 의미
        .catch((err)=>{ console.log('에러 발생!',err) //에러 상태 저장
            // .message response 객체가 가지고 있는 메소드
            setErrMsg(err.message)
        })
        // 실패하든 성공하든 무조건 실행
        .finally(()=>{ //다른 값을 별달리 가져올 게 아니라서 공란으로 둬도 무관하다.
            console.log('요청 완료')
            //로딩 종료
            setLoading(false) })
    },[]); //<- 빈 의존객체 배열을 이용하여 1회만 실행되게 함

    // 2. 화면에 불러오는 중.... 표시를 하고 싶다
    // 조건 : loading = true -> 위에 로딩이 트루 값이면 로딩중으로 표시되게끔 만들어뒀으니 출력만 하면 된다
    if(loading){ return <p>데이터 불러오는 중...</p> }
    //error도 출력하고 싶다면
    if(errMsg){ return <p>에러 : {errMsg} </p> }



    return(
        <>
            <div>
                <h2>사용자 목록</h2>
                <ul>
                    {data.map((data)=>(
                        <li key={data.id}> {data.name} </li>
                    ))}
                </ul>
            </div>
        </>
    )
}