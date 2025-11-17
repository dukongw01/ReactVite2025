import { useState, useEffect } from "react";
import comedying from '../../img/1yrv8z1yrv8z1yrv.png'


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
                <img src={comedying} alt="drning" 
                    style={{width:'1400px', height:'450px', margin:'0 auto', borderRadius:'20px', display:'flex'}} />
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