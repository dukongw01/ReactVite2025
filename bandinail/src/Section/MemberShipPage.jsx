import { useState } from 'react';
import membership from '../../public/bandi_img/membership.jpg';
import { Link } from "react-router-dom";

export default function MemberShipPage() {

    //ai로 버튼 생성
    // 마우스 호버
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        width: '200px',
        height: '50px',
        fontSize: '18px',
        fontWeight: '600',
        borderRadius: '10px',
        border: 'none',
        // 호버 배경색
        backgroundColor: isHovered ? '#075985' : '#0369a1', 
        color: '#ffffff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0px auto',
        padding: '0px'
    };

    // Link의 textDecoration 제거
    const linkStyle = {
        color: '#ffffff',
        textDecoration: 'none',
        width: '200px',
        height: '50px',
        lineHeight: '50px',
        display: 'block',
        textAlign: 'center'
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <img src={membership} alt="membership" 
                style={{ display: 'block', margin: '0px auto', maxWidth: '1900px' }} 
            />
            
            <div className='membership-btn' style={{ marginTop: '50px', marginBottom: '50px', width: '100%' }}>
                <button style={buttonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Link to='/JoinPage' style={linkStyle}>
                        회원가입
                    </Link>
                </button>
            </div>
        </div>
    );
}