import React,{useState} from "react";

// props는 부모에서 자식으로 데이터를 읽기전용으로 보내준다
// props 값, 변수, 함수 모두 props로 보내진다.
// 부모 컴포넌트 부모 변경함수를 넘겨주기

export default function Blog(){

    // 블로그 제목용
    const [posts, setPosts]=useState(['남자코트 추천','강남 우동맛집','파이썬 독학']);
    console.log('글 배열 보여줘'+posts)
    // 좋아요용 변수
    const [likes, setLikes]=useState([0,0,0]);
    // 블로그 글발행용 변수
    const [inputValue, setInputValue]=useState('');

    // 실행 로직 함수-----
    // 글 추가 함수
    const addPost=()=>{
        //글 입력하면 위로 추가 .unShift 이용
        // 배열이나 오브젝트 또는 오브젝트 배열은 리액트에서 useState로 갈때
        // 힙의 메모리 주소가 같은지 다른지를 비교하여 랜더링을 한다.
        // 고로 얕은 복사를 해야 한다.
        // 얕은 복사 형식 : [...배열이름]

        //예외처리는 혹시 모를 데이터의 필요없는 오류로부터 데이터가 정확하게 입력되도록
        // 로직으로 예외를 처리해주는 것이다.
        // input입력받은 값이 공백일 때는 추가 금지하는 코드 필요
        if(inputValue.trim()===''){ return alert('자료를 입력하세요.') }
        let postCopy=[...posts]
        // 위로 추가
        postCopy.unshift(inputValue)
        //setPosts 함수형 변수에 변경된 변수를 담아야한다.
        setPosts(postCopy)

        // 좋아요 코드 추가
        let likesCopy=[...likes]
        likesCopy.unshift(0)
        setLikes(likesCopy)
        
        // 인풋에 입력한 글이 발행버튼 클릭과 동시에 동시에 지워져야한다.
        setInputValue('')
    }

    const delPost=(index)=>{
        // 배열 삭제 프로퍼티 : splice(시작위치, 삭제할 길이)
        let postCopy=[...posts]
        let likesCopy=[...likes]
        //글 삭제
        postCopy.splice(index,1)
        setPosts(postCopy)
        //좋아요 삭제
        likesCopy.splice(index,1)
        setLikes(likesCopy)
    }

    // 좋아요 증가 함수
    // 증가해야하는 index번호를 모르면 증가가 안된다
    //function addLikes(index){}
    const addLike=()=>{
        let likesCopy=[...likes]
        //증가 코드
        likesCopy[index]+=1;
        //업데이트
        setLikes(likesCopy)
    }

    //-----------
    // react에서 로직 함수 생성 후 return의 태그에 지정하는 방식의 차이로 인해
    //랜더링이 안 될 수 있다.
    //1. onClick={addPost} : 클릭 할 때마다 실행. (정상)
    //2. onClick={()=>addPost} : 클릭 할 때마다 실행(정상)
    //3. onClick={addPost() : 랜더링 시 바로 실행. 일명 즉시 함수. (웬만하면 쓰지 않기) 랜더링시 한 번 작동하고 더는 실행 안됨.


    return(
        <>
          <div className="blog2">
               {posts.map((post, index) => {
                    // 글제목 부분
                    <div className="list" key={index}>
                        <h4>{post}<span style={{cursor:'pointer'}} onClick={() => addLike(index)}>👍{likes[index]}</span></h4>
                        <p>11월 1일 발생</p>
                        <button type='button' onClick={() => delPost(index)}>삭제</button>
                    </div>
               })}
                {/* 글 입력 */}
                <div className="input-area">
                    <input type="text" onChange={(e)=>{setInputValue(e.target.value)}} value={inputValue} placeholder="글 제목 입력" />
                    <button type="button" onClick={addPost}>글 발행</button>
                </div>
          </div>
        </>
    )
}