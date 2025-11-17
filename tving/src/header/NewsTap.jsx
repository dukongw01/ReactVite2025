import { useState, useEffect } from "react";
import Section from "../section/Section";
import newsimg from '../../img/r30ricr30ricr30r.png'



export default function NewsTap(){

    
    const [newslist, setNewsList]=useState([])



    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
        .then((res)=>{ return res.json() })
        .then((data)=>{ setNewsList(data)
            console.log('데이터') })
        .catch(()=>{})
        .finally(()=>{})
    },[])

    // if(!movilist || movilist.length !==0){
    //     return <p>로딩중...</p>
    // }
   const Newsfilter = newslist.filter((item)=> item.name.includes('News'))


    return(
        <>
            <div className="list01">
                <img src={newsimg} alt="drning" 
                    style={{width:'1400px', height:'450px', margin:'0 auto', borderRadius:'20px', display:'flex'}} />
                        <h1>뉴스 관련</h1>
                        <ul>                                                                                                                                                                   
                            {Newsfilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={item.image.medium} alt={item.name} width='210px'/>
                                </li>
                            )).slice(0,40)}
                        </ul>
                    </div>
        </>
    )
}