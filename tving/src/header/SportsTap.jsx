import { useState, useEffect } from "react";
import Section from "../section/Section";
import sportimg from '../../img/hal9o9hal9o9hal9.png'


export default function SportsTap(){

    
    const [sportslist, setSportsList]=useState([])



    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
        .then((res)=>{ return res.json() })
        .then((data)=>{ setSportsList(data)
            console.log('데이터') })
        .catch(()=>{})
        .finally(()=>{})
    },[])

    // if(!movilist || movilist.length !==0){
    //     return <p>로딩중...</p>
    // }
   const Sportsfilter = sportslist.filter((item)=> item.genres.includes('Sports'))


    return(
        <>
            <div className="list01">
                <img src={sportimg} alt="drning" 
                    style={{width:'1400px', height:'450px', margin:'0 auto', borderRadius:'20px', display:'flex'}} />
                        <h1>스포츠</h1>
                        <ul>                                                                                                                                                                   
                            {Sportsfilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={item.image.medium} alt={item.name} width='210px'/>
                                </li>
                            )).slice(0,40)}
                        </ul>
                    </div>
        </>
    )
}