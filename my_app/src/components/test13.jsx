// 함수 이름은 반드시 대문자로 작성한다.
function Test13(){
    // 문제:score 값에 따라 다른 색상을 표시하시오
    // score가 80이상이면 파란색, 60이상이면 초록색, 그 외 빨간색
    // 단, 삼항 연산자 이용
    // 함수 안에는 반드시 return()안에 작성
    const isActive=false;
        

    return(
        <>
             <div className={isActive==true?'box active':'box'}>박스</div>
        </>
    )
}

export default Test13;