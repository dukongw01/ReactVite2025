import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './page.css';

export default function Page({datalist02}){

      const [cartlist, setCartlist] = useState(()=>{
            const saved = localStorage.getItem('cartlist');
            return saved? JSON.parse(saved):[];
            console.log("cart자료",saved);
        });
        
     // cart가 바뀔때마다 localStorage에 저장
    useEffect(()=>{
        localStorage.setItem('cartlist', JSON.stringify(cartlist));
    },[cartlist]);

    //cart 버튼을 클릭하는 핸들러 함수
    const cartbtnHandelr = (item) => {
        // 배열은 반드시 얕은 복사
        // 얕은 복사를 하지 않으면 그림을 못 그린다.
        const cartlistCopy = [...cartlist]
        cartlistCopy.push(item)
        setCartlist(cartlistCopy)
        alert(`${item} 장바구니에 담김`)
    }

    // 섹션의 상품목록 페이지
    // 매장전용 또는 온라인구매 구분 버튼
    const buybtnfilter = datalist02.filter((item)=>item.buybtn === 0)
    const onbuybtnfilter = datalist02.filter((item)=>item.buybtn === 1)
    
    return(
        <div className="page-container">
            <div className="list-box">
                <ul>
                    {datalist02.map((item)=>(
                    <li key={item.id}>
                        <Link to={`/${item.id}`}>
                            <div className="hodoimgbox">
                                <img src={`/img/${item.title}`} alt={item.name}/>
                            </div>
                            <h3>{item.name}</h3>
                                <div className="pribuy">
                                    <p>{item.price.toLocaleString('ko')}원</p>
    
                                    <button type="button">{item.buybtn === 1 ? '매장전용' : '구매전용' }</button>
                                </div>
                        </Link>
                        <div className="btncart">
                             <button type="button" className="qkrnsl" onClick={()=>cartbtnHandelr(item)}><h1>+</h1></button>
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}