function Ex02(){

    const rhkdlf=['사과','바나나','오렌지','포도']

    return(
        <>
            <div className="header">
                <h1>내 웹 사이트</h1>
            </div>
            <div className="main">
                <p>메인 컨텐츠 영역</p>
                <ul>
                    {rhkdlf.map((item,index)=>(<li key={index}>{item}</li>))}
                </ul>
            </div>
            <div className="footer">
                <p>2025 10월</p>
            </div>
        </>
    )
}
// 반드시 Export명령어로 내보내기 한다
// 내가 작성한 함수
export default Ex02