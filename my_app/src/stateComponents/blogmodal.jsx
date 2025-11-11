import React,{useState} from 'react'

export default function BlogModal(){
  // 블로그 제목용 변수
  const [posts, setPosts] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  // 좋아요용 변수
  const [likes, setLikes] = useState([0, 0, 0]);
  // 블로그 글 입력용 변수
  const [inputValue, setInputValue] = useState('');
  // 모달 창이 안보이는 상태를 false로 지정
  const [modalOpen, setModalOpen] = useState(false);
  // 선택된 글의 인덱스 지정
  const [selectedIndex, setSeletedIndex] = useState(null);
  //-------------------------------------
  // 실행 로직 함수
  //  글 추가 함수
  const addPost = () =>{
      // 글을 입력하면 위로 추가 배열이름.unShift이용
      // 배열 또는 오브젝트 또는 오브젝트 배열은 React에서 useState 훅사용시
      // 힙의 메모리 주소가 같은지 다른지를 비교하여 랜더링을 한다.
      // 고로 얕은 복사를 해야 한다.
      // 얕은 복사 형식 : [...배열이름]

      // 예외처리 : 혹시 모를 데이터의 필요없는 오류로 부터
      //           데이터가 정확하게 입력되도록 로직으로 예외를 처리하는 작업
      // input 입력받은 값이 공백일 때는 추가 금지하는 코드 필요
      if(inputValue.trim() === ''){
         return alert('자료를 입력하세요')
      }
      let postCopy = [...posts]
      // 위로 추가
      postCopy.unshift(inputValue)
      // setPosts 함수형 변수에 변경된 변수를 담아 둔다.
      setPosts(postCopy)

      // ==========================
      // 좋아요 추가 코드
      let likesCopy =[...likes]
      likesCopy.unshift(0)
      setLikes(likesCopy)

      // input 입력한 글이 발행버튼 클릭과 동시에 지워지는 코드
      setInputValue('')
  }

  // 글 삭제 함수
  // 삭제할 글의 index번호를 모르면 삭제 안됨
  const delPost = (index) =>{
    // 배열삭제 프로퍼티 : splice(시작위치, 삭제할 길이)
    // 얕은 복사
    let postCopy = [...posts]
    let likesCopy = [...likes]
    // 글 삭제
    postCopy.splice(index,1)
    setPosts(postCopy)

    // 좋아요 삭제
    likesCopy.splice(index,1)
    setLikes(likesCopy)
  }
  // 좋아요 증가 함수
  // 증가해야 하는 index번호 모르면 증가가 안됨
  // function addLikes(index){}
  const addLikes = (index) => {
    // 얕은 복사
    let likesCopy = [...likes]
    // 좋아요 증가 코드
    likesCopy[index] += 1;
    // 업데이트 
    setLikes(likesCopy)
  }
 // ------------------------------------
//  react에서 로직함수 생성 후 return의 태그에 지정하는 방식의
//  차이로 인해 랜더링이 안될 수 있다.
//  1. onClick = {addPost} : 클릭 할 때마다 실행(정상)
//  2. onClick = {() => addPost()} : 클릭 할 때마다 실행(정상)
//  3. onClick = {addPost()} : 랜더링 시 바로 실행, 일명 즉시 실행 함수임


  return(
    <>
       <div className='blog'>
        {/* 블로그제목, 블로그 좋아요 */}
            {posts.map((post,index)=>(
              // 글목록 부분
                <div className='list' key={index}>
                    <h4 onClick={()=>{setModalOpen(true); setSeletedIndex(index);}}>{post}<span style={{cursor:'pointer'}} onClick={()=>addLikes(index)}>👍{likes[index]}</span></h4>
                    <p>11월 1일 발생</p>
                    <button type='button' onClick={()=>delPost(index)}>삭제</button>
                    {/* 자식 modal데이터 보내기 */}
                    {/* 글제목, 글index, 모달 닫기 함수, color */}
                    {modalOpen && <modal color={'lightgray'}
                    title={posts}
                    setPosts={setPosts}
                    index={selectedIndex}
                    onClose={()=>setModalOpen(false)}
                    />}
                </div>
            ))}
            {/* 글 입력 */}
            <div className='input-area'>
                <input type='text' onChange={(e)=>{setInputValue(e.target.value)}} value={inputValue} placeholder='글 제목 입력' />
                <button type='button' onClick={addPost}>글 발행</button>
            </div>
       </div>
    </>
  )

}

// 자식 컴포넌트 모달
function Modal(props){
// 업데이트 함수 필요
// 업데이트 조건 = 얕은 복사 필요
// 1. props.title 얕은 복사
//    let titleCopy=[...poros.title]
// 2. prompt("새 제목 입력", --- )
//    titleCopy[props.index] = prompt("새 제목을 입력하세요", itleCopy[props.index])
// 3. titleCopy[props.index] = titleCopy[0] => 남자 코드 추천
// 4. 수정 한 글제목 업데이트 해야함
//    props.setPosts(titleCopy)

  const update=() => {
    let titleCopy = [...props.title]
    titleCopy[props.index] = prompt("새 글 제목 입력", titleCopy[props.index]) || titleCopy[props.index]
    props.setPosts(titleCopy);
  }

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