import { useEffect, useState, useTransition } from "react";
import { Link, useParams } from "react-router-dom";

export default function ItemList(){
    const {id} = useParams();
    const[products, setProducts]=useState(null);

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

    return(
        <>
            <div>
                {products !== null && products !== undefined ? (
                    <div className="datail">
                        <h1>상품 상세</h1>
                        <h2>{products.title}</h2>
                        <img src={products.image} alt={products.title} width='200px'/>
                        <p>카테고리:{products.category}</p>
                        <p>카테고리:{products.price}</p>
                        <p>카테고리:{products.rating}</p>
                        <p>카테고리:{products.description}</p>
                        <Link to="/">목록 이동</Link>
                    </div>) : null
                }
            </div>
        </>
    )
}