
function Ex09(){


    return(
        <>
            <h2>학생 정보</h2>
            <p><span style={{color:'blue'}}>이름:</span>김학생</p>
            <p><span style={{color:'green'}}>학번:</span>123512</p>
            <p><span style={{color:'red'}}>학과:</span>컴공</p>

            <nav style={{margin:'10px', padding:'10px', backgroundColor:'#2c414eff', borderRadius:'10px', fontSize:'20px'}}>
                <ul style={{display:'flex', listStyle:'none', margin:'0 auto', padding:'0'}}>
                    <li style={{margin:'10px auto'}}>
                        <a href="#" style={{textDecoration:'none',color:'white'}}>홈</a></li>
                    <li style={{margin:'10px auto'}}>
                        <a href="#" style={{textDecoration:'none',color:'white'}}>소개</a></li>
                    <li style={{margin:'10px auto'}}>
                        <a href="#" style={{textDecoration:'none',color:'white'}}>연락처</a></li>
                </ul>
            </nav>
            <div style={{border:'1px solid #555',width:'400px',height:'350px', padding:'10px', margin:'10px'}}>
                <img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400" alt="#" />
                <h3>무선 이어폰</h3>
                <p>고음질 블루투스 이어폰</p>
                <p><strong>89,000원</strong></p>
            </div>

        </>
    )
}
// 반드시 Export명령어로 내보내기 한다
// 내가 작성한 함수
export default Ex09