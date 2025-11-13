import { useState, useEffect } from "react";


export default function Comedy(){

    const [comedylist, setComedyList]=useState([])

    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
        .then((res)=>{ return res.json() })
        .then((data)=>{ setComedyList(data)
            console.log('데이터') })
        .catch(()=>{})
        .finally(()=>{})
    },[])

    const Comedyfilter = comedylist.filter((item)=> item.genres.includes('Comedy'))


    return(
        <>
            <div className="list01">
                        <h1>예능</h1>
                        <ul>
                            {Comedyfilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={item.image.medium} alt={item.name} width='210px'/>
                                </li>
                            )).slice(0,40)}
                        </ul>
                    </div>
        </>
    )
}