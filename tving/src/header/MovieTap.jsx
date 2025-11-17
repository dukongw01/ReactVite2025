import { useState, useEffect} from "react";
import './MovieTap.css';
import movieing from '../../img/ijykzdijykzdijyk.png'


export default function MovieTap(){

    // const [runTime, setRunTime] = useState(120)
    const [runlist, setRunList]=useState([])

    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
        .then((res)=>{return res.json()})
        .then((data)=>{setRunList(data)})
        .catch(()=>{})
        .finally(()=>{})
    },[])

    // runtime 이 없는 항목 , 즉 null인 값을 걸러내는 조건식 필요
    //  const runTimefilter=[]
    // if (runlist !== null && runlist.length>0){
    //      runlist?.filter((item)=>item.runtime === 120)
    // }
   
    // console.log('런타임')
    // console.log(runTimefilter)

    return(
        <>
            <div className="list01">
                <img src={movieing} alt="drning" 
                    style={{width:'1400px', height:'450px', margin:'0 auto', borderRadius:'20px', display:'flex'}} />
                <h1>영화</h1>
                <ul>
                    { (runlist !== null && runlist.length > 0)? runlist.filter((item)=>item.runtime >= 90)
                      .slice(0,40).map((item,index)=>(
                        <li key={index}>
                            <img src={item.image.medium} alt={item.name} width='210px'/>
                        </li>
                    )):null} 
                </ul>
            </div>
        </>
    )
}