import { use, useState } from "react";
// 자식 컴포터넌트 : 리스트, 모달
import MovieList from '../NewMovie/MovieList';
import MovieModal from '../NewMovie/MovieModal';

export default function NewMovie(){
    // 영화 제목, 리뷰 담는 변수
    const [movie, setMovie]=useState([])
    // 선택한 영화가 없으면 null을 반환하는 함수
    const [selectMovie, setSelectMovie]=useState(null)
    // 배열에 이미 0번 위치에 빈 오브젝트가 생선된 관계로 랜더가 되면서 무조건 빈 그림이 그려진다
    // 예외처리도 이미 랜더가 되고 난 후라 의미는 없다
    // const [movie, setMovie]=useState([{}]) 사용하지 말자
    
    const [title, setTitle]=useState('')
    const [review, setReview]=useState('')

    // 영화제목, 리뷰가 같이 저장되는 오브젝트 배열에 입력한 데이터가 삽입되는 함수 생성
    // 타이틀이 비어있으면 return으로 종료
    const addMovie =() => {
        if(title === '') return;
        //얕은 복사
        let movieCopy = [...movie]
        // movie = [{}] 삽입
        // 오브젝트 = {key:value, key:value, ....}
        // 오브젝트는 반드시 id:movie.length 로 삭제 이슈
        // 삭제 이슈 없이 작성하길 원하면 id:Date.now()
        movieCopy.push({id:movie.length, title:title, review:review})
        // 반드시 업데이트 setMovie()를 통해야 재랜더링이된다
        setMovie(movieCopy);
        // 타이틀, 리뷰의 인풋에 입력이 되고 난 후 입력된 글자
        // 비운채 추가
        setTitle('')
        setReview('')
    }
    

    return(
        <>
            <div>
                <h2>영화 리뷰 관리 앱</h2>
                <input type="text" placeholder="영화제목" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="영화리뷰" value={review} onChange={(e) => setReview(e.target.value)}/>
                <button type="button" onClick={addMovie}>추가</button>
                {/* 자식 컴포넌트 태그로 넣기 */}
                {/* 영화 목록 출력을 위해 무비, 셋셀렉트무비를 프롭스로 데이터 전달 */}
                <MovieList movie={movie} onSelect={setSelectMovie}/>
                {/* 모달이 열림/닫힘
                    setSelectMovie !=null 아니면 모달 출력, 아니면 null.
                    null은 React에서 빈값이 아닌 아무것도 랜더되지 않는 상태 */}
                {selectMovie != null ?
                <MovieModal selectMovie={selectMovie}
                onClose={()=>setSelectMovie(null)}/> : null }
            </div>
        </>
    )
}