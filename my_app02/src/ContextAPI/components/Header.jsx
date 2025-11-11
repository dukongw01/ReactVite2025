// 공유한 데이터 꺼내오는 HOOK 을 import하기 useContext
import { useContext } from "react";
// 내가 만든 공유데이터 저장소 이름 import한다 ThemeContext
import { ThemeContext } from "../../ThemeContext";

export default function Header(){
    // 내가 공유한 데이터를 가져오기
    const {theme, toggleTeme} = useContext(ThemeContext)

    return(
        <header className={`header ${theme ? 'dark':'light'}`}>
            <h2>Theme Switch</h2>
            <button type="button" onClick={toggleTeme}>{theme?'light':'dark'}로 전환</button>
        </header>
    )
}