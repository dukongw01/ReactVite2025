import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ai로 생성한 페이지.
const ScrollToTop = () => {
  const { pathname } = useLocation(); // useLocation => 지금 사용자가 어느 페이지에 있는지 확인

  useEffect(() => {
    // 페이지 경로가 변경될 때마다 실행
    window.scrollTo(0, 0); // 페이지의 지정 좌표로 이동 (x, y) => TOP버튼 형식
  }, [pathname]);

  return null;
};

export default ScrollToTop; // 이것을 APP.jsx에서 사용하기 위해 ScrollToTop는 이름의 데이터로 내보내기