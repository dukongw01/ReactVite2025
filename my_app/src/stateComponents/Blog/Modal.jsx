// 자식 : Ui
export default function Modal(props){
    return(
    <>
      <div className='modal' style={{backgroundColor:props.color}}>
        <h4>{props.title[props.index]}</h4>
        <p>날짜 : 11월 1일</p>
        <p>상세내용 여기에 내용을 넣어보기</p>
        <button onClick={update}>글 수정</button>
        <button onClick={props.onClose}>닫기</button>
      </div>
    </>
  )
}