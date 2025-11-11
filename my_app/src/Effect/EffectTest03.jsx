import { use, useEffect, useState } from "react";

export default function EffectTest03(){

    // // fetch~then() 비동기함수사용-------
    // //사용자 목록을 담을 state
    // const [users, setUesers] = useState([]);
    // useEffect(() => {
    //     //1. 컴포넌트가 처음 렌더링 될 때 실행
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     //2.서버에서 응답(Response)을 받으면 JSON으로 변환
    //     .then(res => res.json())
    //     //3.변환된 데이터를 users 상태에 저장
    //     .then(data => setUesers(data));
    // },[]); //4. [] 마운트 시 1회만 실행


    // async~ await  비동기함수사용 ----------
    const [users, setUsers] = useState([]);
    useEffect(() => {
        //1. 비동기 함수 정의 (async)
        // fetch는 비동기 함수이기 때문에 await를 쓰려면 async 함수 안에서 실행해야 함
        const load = async () => {
            // 2. 서버(API)에서 데이터 가져오기 (fetch는 Promise 반환)
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            // 3. 응답(response)을 JSON 형태로 변환 (이것도 비동기)
            const data = await res.json();
            // 4. 받아온 데이터를 state에 저장 (랜더링 갱신)
            setUsers(data);
        };
        load();
    });
    return(
        <>
        {/* fetch~then() 비동기함수사용 ----- */}
            {/* <div>
                <h3>사용자 목록</h3>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div> */}

            {/* async~ await  비동기함수사용 ----- */}
            <div>
                <h3>사용자 목록</h3>
                <ul>
                    {users.map((u)=>(
                        <li key={u.id}>{u.email}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}