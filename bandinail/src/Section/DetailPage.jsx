import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import like from '../../public/bandi_img/like.png';
import detailimg from '../../public/bandi_img/detailimg.jpg';

export default function DetailPage({nailDataList}){

    //상세페이지


    const {id} = useParams();
    const findItem = nailDataList.find((item)=> item.id === Number(id))
    console.log(findId);

    //수량 증가 감소
    const [count, setCount]=useState(1);
    const plusbtn = () => setCount(count+1);
    const minusbtn = () => {if(count>1) setCount(count-1);};

    //찜
    count [likes, setLikes] = useState(false);
    const likes = ()=> setLikes('♥');

    //장바구니
    const [cartIn, setCartIn] = useState(()=>{
        const saved = localStorage.getItem('cartIn');
        return saved ? JSON.parse(saved):[];
    });

    //localStorag 저장
    useEffect(()=>{
        localStorage.setItem('cartIn', JSON.stringify(cartIn));
    },[cartIn])

    //담긴 모달
    const cartModal = (item)=>{
        const cartInCopy = [...cartIn];
        const findItem = cartIn.find((cartItem)=>cartItem.id === item.id);
        if(findItem === undefined){
            cartInCopy.push({...item, count:count});
        }else{
            alert(`${item.name} 담긴 수량 추가`);
            findItem.count += count;}
        setCartIn(cartInCopy);
    }


    return(
        <div className="detailcontainer">
            <div className="container-sub">
                <div className="leftbox">
                    {/* 이미지 크기 영역 */}
                    <div className="imgbox">
                        <img src={`${findItem.title}`} alt={findItem.name} />
                    </div>
                    <p>상품 상세정보</p>
                    <div className="bigimgbox">
                        <img src={detailimg} alt="detailimg" />
                    </div>
                </div>
                {/* 상품설명영역 */}
                <div className="rightbox">
                    <h2>{findItem.name}</h2>
                    <div className="itemdemo">
                        <ul>
                            <li><p><strong>판매가</strong></p></li>
                            <li><p>제조사</p></li>
                            <li><p>원산지</p></li>
                            <li><p>배송비</p></li>
                        </ul>
                        <ul>
                            <li><p><strong>{findItem.price}원</strong></p></li>
                            <li><p>위미인터내셔널(주)</p></li>
                            <li><p>대한민국</p></li>
                            <li><p>3,000원(5만원 이상 구매시 무료)</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}