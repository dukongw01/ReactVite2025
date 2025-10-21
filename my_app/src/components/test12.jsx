// 함수 이름은 반드시 대문자로 작성한다.
function Test12(){
    // 문제:score 값에 따라 다른 색상을 표시하시오
    // score가 80이상이면 파란색, 60이상이면 초록색, 그 외 빨간색
    // 단, 삼항 연산자 이용
    // 함수 안에는 반드시 return()안에 작성
    const score=90;
    const col = document.querySelector('.colors');
    const getColors=(score)=>{
        if(score>=80){
            col.style.color='blue'
        }else if(score>=60){
            col.style.color='green'
        }else{
            col.style.color='red'
        }
    }

    return(
    // 빈태그 프래그 먼트를 이용해서 작성
        <>
        <p className="colors" style={{color:score>=80?'blue':score>=60?'green':'red'}}>점수:{score}</p>
        </>
    )
}
// Test12함수를 내보내기
export default Test12;