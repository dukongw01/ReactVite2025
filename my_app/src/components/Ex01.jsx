function Ex01(){

    const user={name:'홍길동', age:25, ho:'독서, 운동'}

    return(
        <>
            <div className="profile">
                <h3>자기소개</h3>
                <p>이름:홍길동</p>
                <p>나이:25세</p>
                <p>취미:독서, 운동</p>
            </div>
            <div style={{backgroundColor:'#ddd', border:'1px solid #555', margin:'10px', padding:'10px', borderRadius:'10px'}}>
                <h3>자기 소개</h3>
                <p>이름:{user.name}</p>
                <p>나이:{user.age}세</p>
                <p>취미:{user.ho}</p>
            </div>
        
        </>
    )
}
// 반드시 Export명령어로 내보내기 한다
// 내가 작성한 함수
export default Ex01