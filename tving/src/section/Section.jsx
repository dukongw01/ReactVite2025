import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Section.css'

export default function Section(){

    const [movilist, setMovieList]=useState([])
    
    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
        .then((res)=>{ return res.json() })
        .then((data)=>{ setMovieList(data)
            console.log('데이터') })
        .catch(()=>{})
        .finally(()=>{})
    })

    

    return (
        <>
            <div className="section-container">
                <div className="list01">
                    <h1>드라마 시리즈</h1>
                    <ul>
                        {movilist.map((item,index)=>(
                            <li key={index}>
                                <img src={item.image.medium} alt={item.name} width='210px'/>
                            </li>
                        )).slice(0,8)}
                    </ul>
                </div>
                <div className="list02">
                    <h1>호러 시리즈</h1>
                    <ul>
                        {movilist.map((item,index)=>(
                            <li key={index}>
                                <img src={item.image.medium} alt={item.name} width='210px'/>
                            </li>
                        )).slice(0,8)}
                    </ul>
                </div>
                <div className="list03">
                    <h1>액션 시리즈</h1>
                    <ul>
                        {movilist.map((item,index)=>(
                            <li key={index}>
                                <img src={item.image.medium} alt={item.name} width='210px'/>
                            </li>
                        )).slice(0,8)}
                    </ul>
                </div>
                <div className="list04">
                    <h1>스릴러 시리즈</h1>
                    <ul>
                        {movilist.map((item,index)=>(
                            <li key={index}>
                                <img src={item.image.medium} alt={item.name} width='210px'/>
                            </li>
                        )).slice(0,8)}
                    </ul>
                </div>
                <div className="list05">
                    <h1>로맨스 시리즈</h1>
                    <ul>
                        {movilist.map((item,index)=>(
                            <li key={index}>
                                <img src={item.image.medium} alt={item.name} width='210px'/>
                            </li>
                        )).slice(0,8)}
                    </ul>
                </div>
            </div>
        </>
    )
}