import { use, useState } from "react";
// 자식인 무비아이템을 가져온다
import MovieItem from "./MovieItem";
// 무비앱의 손자

export default function MovieList(props){
    return(
        <>
            <ul>
                {/* li를 반복하기 위해 map()함수를 이용한다 */}
                {props.movie.map((movie)=>(
                    // 자식인 무비아이템을 태그한다.
                    // <li> 태그는 무비아이템에 그릴 예정
                    <MovieItem key={movie.id} movie={movie} onSelect={props.onSelect}/>
                ))}
            </ul>
        </>
    )
}