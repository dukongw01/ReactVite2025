import { useEffect } from "react";
import { useState } from "react"; //데이터 뿌리기
// 반드시 axios는 import 해야 한다.
import axios from 'axios'

export default function Test(){

    const [data, setData] = useState([])

    useEffect(()=>{
        // load라는 비동기 함수를 만들어서 API 요청
        const load = async()=>{
            try{
                // axios.get()이용해서 API 호출
                // async() ~~~ await axios.get(URL)은 공식이다
                const res = await axios.get('https://dummyjson.com/products?limit=20')
                console.log(res.data)
                setData(res.data)
            }catch(err){
                console.log('요청실패'.err)
            }finally{
                // 로딩 성공이든 실패이든 무조건 실행
                console.log('요청완료')
            }
        }
    },[])
    
    return(
        <>
            <ul>
                {data.map((dataitem)=>(
                    <li key={ dataitem.id }>
                        {dataitem.tltle}
                    </li>
                ))}
            </ul>
        </>
    )
}