import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './section.css';
import DramaTap from "../header/DramaTap";
import MovieTap from "../header/MovieTap";
import sectionImg from '../../img/6u5x4l6u5x4l6u5x.png'

export default function Section(){

    // 장르 담는 변수

    const [Genres, setGenres]=useState('')

    const [movilist, setMovieList]=useState([])
    
    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
        .then((res)=>{ return res.json() })
        .then((data)=>{ setMovieList(data)
            console.log('데이터') })
        .catch(()=>{})
        .finally(()=>{})
    },[])
// genres": ["Drama","Science-Fiction","Thriller"]

    const Dramafilter = movilist.filter((item)=> item.genres.includes('Drama'))
    const Thrillerfilter = movilist.filter((item)=> item.genres.includes('Thriller'))
    const Actionfilter = movilist.filter((item)=> item.genres.includes('Action'))
    const Horrorfilter = movilist.filter((item)=> item.genres.includes('Horror'))
    const Romancefilter = movilist.filter((item)=> item.genres.includes('Romance'))
    const SFfilter = movilist.filter((item)=> item.genres.includes('Science-Fiction'))
    const AdventureFfilter = movilist.filter((item)=> item.genres.includes('Adventure'))
    const FamilyFfilter = movilist.filter((item)=> item.genres.includes('Family'))
    const AnimeFfilter = movilist.filter((item)=> item.genres.includes('Anime'))
    const CrimeFfilter = movilist.filter((item)=> item.genres.includes('Crime'))
    const MysteryFfilter = movilist.filter((item)=> item.genres.includes('Mystery'))
    const ComedyFfilter = movilist.filter((item)=> item.genres.includes('Comedy'))

    // console.log(grfilter)
    //item.genres is not a function = > 장르가 배열로 되어있어서 찾을 수 없다.

    //장르 함수

    const ClickHandle = (num) => {
        if(num === 1){
            setGenres('Drama')
        }else if(num === 2){
            setGenres('Thriller')
        }else if(num === 3){
            setGenres('Action')
        }else if(num === 4){
            setGenres('Horror')
        }else if(num === 5){
            setGenres('Romance')
        }else if(num === 6){
            setGenres('Science-Fiction')
        }else if(num === 7){
            setGenres('Adventure')
        }else if(num === 8){
            setGenres('Family')
        }else if(num === 9){
            setGenres('Anime')
        }else if(num === 10){
            setGenres('Crime')
        }else if(num === 11){
            setGenres('Mystery')
        }else{
            setGenres('Comedy')
        }
    }

    return (
            <div className="section-container">
                <div className="centerbox">
                    <img src={sectionImg} alt="poster" />
                </div>
                <div className="buttonbox">
                    <button type="button" onClick={()=>ClickHandle(1)}>드라마</button>
                    <button type="button" onClick={()=>ClickHandle(2)}>스릴러</button>
                    <button type="button" onClick={()=>ClickHandle(3)}>액션</button>
                    <button type="button" onClick={()=>ClickHandle(4)}>공포(호러)</button>
                    <button type="button" onClick={()=>ClickHandle(5)}>로맨스</button>
                    <button type="button" onClick={()=>ClickHandle(6)}>SF</button>
                    <button type="button" onClick={()=>ClickHandle(7)}>모험</button>
                    <button type="button" onClick={()=>ClickHandle(8)}>가족</button>
                    <button type="button" onClick={()=>ClickHandle(9)}>애니메이션</button>
                    <button type="button" onClick={()=>ClickHandle(10)}>범죄</button>
                    <button type="button" onClick={()=>ClickHandle(11)}>미스터리</button>
                    <button type="button" onClick={()=>ClickHandle(12)}>코미디</button>
                </div>
                {/* Genres가 공백이면 리스트박스 기본으로 출력 */}
                {/* 공백이 아니면 내가 선택한 장르만 출력 */}
                {
                    Genres === '' ?
                
                (<div className="listbox">
                    <div className="list01">
                        <h1>드라마 시리즈</h1>
                        <ul>
                            {Dramafilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={item.image.medium} alt={item.name} width='210px'/>
                                </li>
                            )).slice(0,8)}
                        </ul>
                    </div>
                    <div className="list02">
                        <h1>호러 시리즈</h1>
                        <ul>
                            {Horrorfilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={item.image.medium} alt={item.name} width='210px'/>
                                </li>
                            )).slice(0,8)}
                        </ul>
                    </div>
                    <div className="list03">
                        <h1>액션 시리즈</h1>
                        <ul>
                            {Actionfilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={item.image.medium} alt={item.name} width='210px'/>
                                </li>
                            )).slice(0,8)}
                        </ul>
                    </div>
                    <div className="list04">
                        <h1>스릴러 시리즈</h1>
                        <ul>
                            {Thrillerfilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={item.image.medium} alt={item.name} width='210px'/>
                                </li>
                            )).slice(0,8)}
                        </ul>
                    </div>
                    <div className="list05">
                        <h1>로맨스 시리즈</h1>
                        <ul>
                            {Romancefilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={item.image.medium} alt={item.name} width='210px'/>
                                </li>
                            )).slice(0,8)}
                        </ul>
                    </div>
                    <div className="list06">
                        <h1>코미디 시리즈</h1>
                        <ul>
                            {ComedyFfilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={item.image.medium} alt={item.name} width='210px'/>
                                </li>
                            )).slice(0,8)}
                        </ul>
                    </div>
                </div>):(
                    <ul>
                            {(Genres === 'Drama' ? Dramafilter : 
                            Genres === 'Thriller' ? Thrillerfilter :
                            Genres === 'Action' ? Actionfilter :
                            Genres === 'Horror' ? Horrorfilter :
                            Genres === 'Romance' ? Romancefilter :
                            Genres === 'Science-Fiction' ? SFfilter :
                            Genres === 'Adventure' ? AdventureFfilter :
                            Genres === 'Family' ? FamilyFfilter :
                            Genres === 'Anime' ? AnimeFfilter :
                            Genres === 'Crime' ? CrimeFfilter :
                            Genres === 'Mystery' ? MysteryFfilter :
                            Genres === 'Comedy' ? ComedyFfilter :
                             Genres ).map((item,index)=>(
                                 <li key={index}>
                                    <img src={item.image.medium} alt={item.name} width='210px'/>
                                </li>
                            )).slice(0,40)}
                        </ul>
                 )} 
            </div>
    )
}