import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function useProduct(){
    const [data, setData]=useState([])

    const imgJSON = () => {
        fetch('https://fakestoreapi.com/products')
        .then((res)=>{
            if(!res.ok){
                throw new Error(`오류${res.status}`)
            }
            return res.json()
        }).then((data)=>{
            setProducts(data)

            console.log(`JSON으로 받은 데이터 ${data}`)
        }).catch((err)=>{console.log(err.message)}).finally(()=>{console.log('요청 완료')})
    }
    useEffect(()=>{
        imgJSON()
    },[])

    // JSON에서 받아온 data 상태변수를 return을 이용하여 반환해준다

    return data;
}