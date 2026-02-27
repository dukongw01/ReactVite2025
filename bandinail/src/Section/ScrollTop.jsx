import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 경로가 변경될 때마다 실행
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;