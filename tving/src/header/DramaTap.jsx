import { useState, useEffect } from "react";
import Section from "../section/Section";


export default function DramaTap(){

    
    const [dramalist, setDramaList]=useState([])



    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
        .then((res)=>{ return res.json() })
        .then((data)=>{ setDramaList(data)
            console.log('데이터') })
        .catch(()=>{})
        .finally(()=>{})
    },[])

    // if(!movilist || movilist.length !==0){
    //     return <p>로딩중...</p>
    // }
   const Dramafilter = dramalist.filter((item)=> item.genres.includes('Drama'))


    return(
        <>
            <div className="list01">
                        <h1>드라마</h1>
                        <ul>                                                                                                                                                                   
                            {Dramafilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={item.image.medium} alt={item.name} width='210px'/>
                                </li>
                            )).slice(0,40)}
                        </ul>
                    </div>
        </>
    )
}