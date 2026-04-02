import { useEffect, useState } from "react";

import './TopBtn.css';


export default function TopBtn() {

    // 버튼 표시 여부 — 일정 스크롤 이후 표시
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 200); // 200px 이상 스크롤 시 표시
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // 클린업
    }, []);

    // 최상단 이동
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showTop && (
                <button className="Top-btn" onClick={scrollToTop}>TOP</button>
            )}
        </>
    );
}