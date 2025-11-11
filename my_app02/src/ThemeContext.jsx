import { useState } from "react";
// createContext => 데이터 공용 저장 장소 생성하는 라이브러르
import { createContext } from "react";

// 1번 : 데이터 저장소 Context 생성
// 내가 만든 저장소는 내보내기 해야한다 export
export const ThemeContext = createContext();
// 2번 : Provider 컴포넌트를 정의해서 만들어줘야한다
export default function ThemeProvider({children}){
    // 전역 변수 지정
    // toggle 버튼 (false => true, true => false)
    // toggle 버튼을 숨김/보임 상태를 저장하는 상태변수
    const [theme, setTheme] = useState(false)
    
    // 토글 함수 (상태 업데이트 함수)
    // setTheme(!theme) 기존 방식은 이렇지만 좀 더 업그레이드 한 방법이 있다.
    // prev는 이전의 값이라는 의미의 약어이다.
    // 이전(prev)엔 false였는데 지금은 true로 바뀌었단 사실을 알려준다.
    // react가 setTheme((prev)=>!prev) 형식으로 업데이트 함수를 작성하면
    // 아래의 함수 형식으로 이해해서 전환해준다.
    // function toggle ( prev ) { setTheme (!prev) }

    const toggleTheme = () => {
        setTheme((prev)=>!prev) // <- 업그레이드 함수, setTheme(!theme)는 기존 방식
        
    }
    // 공유 데이터는 값, 함수 모두가 가능하다
    return(
        // 내가 만든 데이터 저장소 이름.povider
        // ThemeContext.Provider 의 value={{}}로 값을 공유한다.
        // 여기서 공유할 데이터:theme, toggleTheme
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}