import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './page.css';
import carticon from '../../public/img/carticon.png';

export default function Page({datalist02, tapfilter}){

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
        const findItem = cartlist.find((cartItem) => cartItem.id === item.id)
        // find 결과가 존재할때 아래처럼 출력
        // {id: 2, name: "간식용 캐슈넛", title: "cashewnut_1.jpg", title2: "cashewnut_2.png", scrollimg: "small_1.jpg",…}
        // find 결과가 존재하지 않으면 undefined
        // findItem === undefined의 의미는 장바구니에 같은 상품이 없다는 뜻
        if(findItem === undefined){
            cartlistCopy.push({...item, count:1});
            alert(`${item.name} 장바구니에 담김`)
        }else{
            //같은 상품ㅇㅣ 이미 존재 할때
            alert(`${item.name}상품이 존재합니다.`)
            findItem.count += 1;
        }
        setCartlist(cartlistCopy)
        
    }

     // tapfilter.length === 0 면 datalist02로 그림을 그려라 아니면 findItemFilter로 그려라
    //const findItemFilter = tapfilter.length === 0 ? datalist02 : datalist02.filter((item)=>item.category === tapfilter);
    const findItemFilter = datalist02.filter((item)=>item.category === tapfilter);
    const dataTap = tapfilter.length === 0 ? datalist02 : findItemFilter;
    // dataTap에 있는 tapfilter가 0 이면 datalist02의 정보를 가져오고 아니면 findItemFilter의 값을 가져온다.
    // findItemFilter엔 datalist02 정보 값이 item, category필터가 이미 적용돼서 tapfilter에 들어있음.
    // 그런데 이 방식은 2줄로 너무 길어짐, 좀 더 축약할 수 있는 방식이
    //const findItemFilter = tapfilter.length === 0 ? datalist02 : datalist02.filter((item)=>item.category === tapfilter);


    
    useEffect(()=>{
        console.log(tapfilter)
        console.log(findItemFilter)
    },[tapfilter])
    
    return(
        <div className="page-container">
            <div className="list-box">
                <ul>
                    {dataTap.map((item)=>(
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
                             <button type="button" className="qkrnsl" onClick={()=>cartbtnHandelr(item)}> <img src={carticon} alt="carticon.png" /> </button>
                        </div>
                        </li>
                    ))}
                    </ul>
            </div>
        </div>
    )
}