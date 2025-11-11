import { useState } from "react";
import MovieItem from ".MovieApp/MovieItem";
import MovieModal from ".MovieApp/MovieModal";

export default function MovieList(){

    // 영화 제목
    const[movieChart, setMovieChart] =useState([
        {id:0, title:'사랑과 영혼', comment:'도자기 잘굽네'},
        {id:1, title:'인셉션', comment:'나도 자고 싶어'}
    ]);
    const [ListPlus, setListPlus]=useState('');
    const [ReviewPlus, setReviewPlus]=useState('');

    // 리뷰 열고 닫기 모달
    const [MentOpen, setMentOpen]=useState(false);
    
    // 영화리스트 추가
    const addListplus=()=>{
        if(ListPlus.trim()===''){ return alert('영화명을 입력해주세요.')}
        let ListPlusCopy=[...ListPlus]
        ListPlusCopy.unshift(ListPlus)
        setListPlus(ListPlusCopy)
    }
    // 리뷰내용 추가
    const addReviewPlus=()=>{
        if(ReviewPlus.trim()===''){ return alert('후기를 입력해주세요.')}
        let ReviewPlusCopy=[...ReviewPlus]
        ReviewPlusCopy.unshift(ReviewPlus)
        setReviewPlus(ReviewPlusCopy)
    }
    const notText = () => {
        if(!movietitle || !moviecoment)
            { return alert('영화명과 후기를 입력해주세요.')}}
    
    return(
        <>
            <div>
                <h2>영화 리뷰 관리🎥</h2>
                <input type="text" value={ListPlus} placeholder="영화 제목"/>
                <input type="text" value={ReviewPlus} placeholder="리뷰"/>
                <button onClick={movieChart}>추가</button>
                <div>
                    {MentOpen && <div>{setMovieChart.comment}</div>}
                    <button onClick={() => setMentOpen(!MentOpen)}>{MentOpen ? '상세보기':'닫기'}</button>
                </div>
            </div>
        </>
    )
}