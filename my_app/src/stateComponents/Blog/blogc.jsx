// 부모 컴포넌트 : state는 모두 부모
import { useState } from "react";

// 자식 postlist.jsx, modal.jsx 파일을 import한다
// 그래야 부모가 자식컴포넌트를 카드 태그형식으로 가져올 수 있다
import PostList from "./Blog/PostList";
import Modal from "./Blog/Modal";

export default function BlogC(){
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

  return(

    <div>
        <PostList posts={posts} likes={likes} setModalOpen={setModalOpen} setInputValue={setInputValue} delPost={delPost} addLikes={addLikes}/>


        <div className='input-area'>
            <input type='text' onChange={(e)=>{setInputValue(e.target.value)}} value={inputValue} placeholder='글 제목 입력' />
            <button type='button' onClick={addPost}>글 발행</button>
        </div>
    </div>
  )

}