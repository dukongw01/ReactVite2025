import { useState, useEffect } from "react";
import Section from "../section/Section";
import aniing from '../../img/3im52o3im52o3im5.png'



export default function AnimeTap(){

    
    const [animelist, setAnimeList]=useState([])



    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
        .then((res)=>{ return res.json() })
        .then((data)=>{ setAnimeList(data)
            console.log('데이터') })
        .catch(()=>{})
        .finally(()=>{})
    },[])

    // if(!movilist || movilist.length !==0){
    //     return <p>로딩중...</p>
    // }
   const Animefilter = animelist.filter((item)=> item.genres.includes('Anime'))


    return(
        <>
            <div className="list01">
                <img src={aniing} alt="drning" 
                style={{width:'1400px', height:'450px', margin:'0 auto', borderRadius:'20px', display:'flex'}} />
                <h1>애니메이션</h1>
                <ul>                                                                                                                                                                   
                    {Animefilter.map((item,index)=>(
                        <li key={index}>
                            <img src={item.image.medium} alt={item.name} width='210px'/>
                        </li>
                    )).slice(0,40)}
                </ul>
            </div>
        </>
    )
}