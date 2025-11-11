import { useEffect, useState } from "react";

export default function ExJ01(){
    // 앞으로 잘 지켜야할 규칙
    // 1. 상태 변수 생성 유무
    // 2. useEffect를 어디 사용할 것인가
    // 3. Ui는 어떻게 출력할 건지 생각
    // 4. 컴포넌트 분리 유무
    // 5. JSON을 이용해 데이터를 가져오는 상황 고려
    // userId 파라미터 상태를 저장하는 변수 필요
    // 6. 상태 변수를 사용하는 경우 useState(초기값)을 생각해야한다

    const [userId, setUserId]=useState(1)
    // user를 userId에 해당하는 부분만 출력되도록 물어보는 상태 변수 필요
    // 상태 변수 필요 -> 모달에 해당
    // user = true -> 화면에 출력
    // user = false -> null
    const [user, setUser]=useState(null) // (true)값 사용도 가능
    // useState([]) -> 배열 반복 출력. 아래 함수에서 map을 쓰면 된다.
    // 여러개의 자료가 반복되며 출력되어야 하므로 기본 반복문으로 출력하는 게 정석 (.map)

    // useEffect를 이용해서 JSON 데이터 받기

    // 여기서 잠깐!
    // 만약 JSON을 가져오는 함수가 어렵다면
    // const JSONdata = () => {
    //     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    //     .then((res)=>{ return res.json()})
    //     .then((data)=>{ setUser(data) })
    //     .finally(()=>{ console.log('요청 완료') })
    // }

    // useEffect(()=>{JSONdata()},[userId])

    // const idCountHandeler = () => { setUserId(userId + 1) }
    // //이와 같은 방식도 된다.

    // useEffect를 이용해서 JSON 데이터 받기 (이어서)

    useEffect(()=>{
        // JSON URL의 부분을 파라미터 형식으로 userId에 가져온다.
        // 사용방법 ~/user/${userId}
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        // = 'https://jsonplaceholder.typicode.com/users/1...2...3...4...' 몇번째를 가져올지는 위에 useState(1) 로 지정해주었다.
        // res의 원문은 response(요청하다)이다. 객체는 이미 React에 존재한다.
        // res는 줄임말이고 약속 같은 의미이다.
        .then((res)=>{ return res.json()}) //JSON 파싱(해석)
        // res.json()이 넘겨준 데이터를 뜻한다.
        .then((data)=>{ setUser(data) })
        // JSON에서 가져오는 데이터가 실패하든 성공하든 상관없이 무조건 출력
        .finally(()=>{ console.log('요청 완료') })
    },[userId])

    // userId를 증가시키는 함수
    // 핸들러 함수란 본인 혼자는 아무것도 할 수 없는 함수이다
    // 누군가 이벤트로 핸들러 함수를 사용해야 비로소 실행되는 함수
    const idCountHandeler = () => { setUserId(userId + 1) }

    //화면 그리기 영역

    return(
        <>
            <div>
                <h3>현재 선택된 사용자 ID:{userId} </h3>
                <button type="button" onClick={idCountHandeler}>다음 사용자 보기</button>
                {/* user가 값이 존재하면 div 태그를 렌더로 그리기 */}
                {/* user가 값이 null이면 div 태그를 그리지 않는다 */}
                {user && <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>}
            </div>
        </>
    )
}