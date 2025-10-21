
// 구조분해 할당이란 : 변수지정한 값
// props란 부모에서 자식으로 데이터를 전달한다.
// 단, 읽기 전용 데이터이다. 자식은 수정할 수 없다.
// 서로 다른 파일에 존재하더라도 props로 가져오기가 된다
// 다만, props.name 처럼 직접 입력한다.
// {name}인 구조 분해 할당을 이용해도 된다.
function Child({name}){
    return(
        <>
            {/* props.name */}
            <h2>안녕하세요. {name}님</h2>
        </>
    )
}
export default Child