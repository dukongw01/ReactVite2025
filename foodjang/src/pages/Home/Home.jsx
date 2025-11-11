import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Home/Home.css';


export default function Home(){

    const [MdList, setMdList]=useState([])
    const [BestList, setBestList]=useState('');

    useEffect(()=>{
        fetch ('https://dummyjson.com/recipes/meal-type/Dinner')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setMdList(data.recipes)
            console.log('MD리스트데이터')
        })
        .catch(()=>{})
        .finally(()=>{})
    })

    return(
        <>
            <div className="sectioncontainer">

                <div className="section01">
                    <h1><Link to=''>MD의 추천 상품 ></Link></h1>
                    <ul>
                        {MdList.map((item,index)=>(
                            <li key={index}>
                                <img src={item.image} alt={item.name} width='300px'/>
                                <p>{item.name}<span>({item.reviewCount})</span></p>
                                <p className="rubi">{item.ingredients}</p>
                                <p className="ratetext">평점 <strong>{item.rating}</strong></p>
                            </li>
                        )).slice(0,6)}
                    </ul>
                </div>

                <div className="section02">
                    <h1><Link to=''>지금 가장 핫한 상품 ></Link></h1>
                    <ul>
                        {MdList.map((item,index)=>(
                            <li key={index}>
                                <img src={item.image} alt={item.name} width='300px'/>
                                <p>{item.name}<span>({item.reviewCount})</span></p>
                                <p className="rubi">{item.ingredients}</p>
                                <p className="ratetext">평점 <strong>{item.rating}</strong></p>
                            </li>
                        )).slice(7,13)}
                    </ul>
                </div>

                <div className="section03">
                    <h1><Link to=''>NEW 새로나온 신상품 ></Link></h1>
                    <ul>
                        {MdList.map((item,index)=>(
                            <li key={index}>
                                <img src={item.image} alt={item.name} width='300px'/>
                                <p>{item.name}<span>({item.reviewCount})</span></p>
                                <p className="rubi">{item.ingredients}</p>
                                <p className="ratetext">평점 <strong>{item.rating}</strong></p>
                            </li>
                        )).slice(14,17)}
                    </ul>
                </div>

                <div className="section04">
                    <h1><Link to=''>냉장고를 채울 1만원 이하 꿀템 ></Link></h1>
                    <ul>
                        {MdList.map((item,index)=>(
                            <li key={index}>
                                <img src={item.image} alt={item.name} width='300px'/>
                                <p>{item.name}<span>({item.reviewCount})</span></p>
                                <p className="rubi">{item.ingredients}</p>
                                <p className="ratetext">평점 <strong>{item.rating}</strong></p>
                            </li>
                        )).slice(18,21)}
                    </ul>
                </div>

                <div className="section05">
                    <h1><Link to=''>후기가 인증하는 추천 상품 ></Link></h1>
                    <ul>
                        {MdList.map((item,index)=>(
                            <li key={index}>
                                <img src={item.image} alt={item.name} width='300px'/>
                                <p>{item.name}<span>({item.reviewCount})</span></p>
                                <p className="rubi">{item.ingredients}</p>
                                <p className="ratetext">평점 <strong>{item.rating}</strong></p>
                            </li>
                        )).slice(22,25)}
                    </ul>
                </div>
            </div>
        </>
    )
}