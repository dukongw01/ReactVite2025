import { useState } from "react";
// 내가 만든 저장소 가져오기 import
import { UserContext } from "./Context/UserContext";
import Header from "./Context/component/Header";

export default function UserApp(){
    // useState 이름 저장
    const [userName, setUsername]=useState();
    
    console.log('UserContext.Provider에 전달될 값', {userName, setUsername});

    // provider로 감싸서 전역의 데이터 값을 전달

    return(
        <UserContext.Provider value={{userName, setUsername}}>
            <div>
                <h2>Context API예제</h2>
                <Header/>
            </div>
        </UserContext.Provider>
    )
}