// 내가 만든 UserContext를 반드시 import한다
// useComtext()훅을 import한다
// => 그래야 부모에서 보낸 데이터를 꺼내서 사용할 수 있다

import { useContext } from 'react'; //react 라이브러리 훅
import { UserContext } from '../Context/UserContext'; //내가 만든 저장소

export default function Profile(){
    // useContext 값 꺼내서 사용한다
    // useContext 값 꺼내서 담을때는 반드시 {} 중괄호 {usernamem setUsername} 입력한다.
    // UserApp의 정보를 받을 수 있다
    const [userName, setUsername]=useContext(UserContext)

    return(
        <div>
            <p>현재 사용자: {userName}</p>
            <button type='button' onClick={()=>setUsername('개나리')}>이름 바꾸기</button>
        </div>
    )
}