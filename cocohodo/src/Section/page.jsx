import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './page.css';

export default function Page({datalist02, clickHandle}){

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

    // 탭 메뉴 클릭시 category 구분 필터 생성
    const [tapfilter, setTapFilter]=useState('');
    const [categorys, setCategorys]=useState([]);

    
    useEffect(()=>{
        fetch({datalist02})
        .then((res)=>{return res.datalist()})
        .then((data)=>{setCategorys(data)
            console.log('데이터')
        })
        .catch(()=>{})
        .finally(()=>{})
    },[])
    

    const nutsFilter = categorys.filter((item)=>item.category.includes('nuts'))
    const snackFilter = categorys.filter((item)=>item.category.includes('snack'))
    const creamFilter = categorys.filter((item)=>item.category.includes('cream'))
    const butterFilter = categorys.filter((item)=>item.category.includes('butter'))
    const giftFilter = categorys.filter((item)=>item.category.includes('gift'))
    const presentFilter = categorys.filter((item)=>item.category.includes('present'))

    // const clickHandle = (num) => {
    //     if(num === 1){
    //         setTapFilter('nuts')
    //     }else if(num === 2){
    //         setTapFilter('snack')
    //     }else if(num === 3){
    //         setTapFilter('cream')
    //     }else if(num === 4){
    //         setTapFilter('butter')
    //     }else if(num === 5){
    //         setTapFilter('gift')
    //     }else{
    //         setTapFilter('present')
    //     }
    // }
    
    return(
        <div className="page-container">
            <div className="list-box">
                {
                    tapfilter === '' ?
                
                (<div className="listbox">
                        <ul>
                            {nutsFilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={`/img/${item.title}`} alt={item.name}/>
                                </li>
                            ))}
                        </ul>
                    <div className="list02">
                        <ul>
                            {snackFilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={`/img/${item.title}`} alt={item.name}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="list03">
                        <ul>
                            {creamFilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={`/img/${item.title}`} alt={item.name}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="list04">
                        <ul>
                            {butterFilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={`/img/${item.title}`} alt={item.name}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="list05">
                        <ul>
                            {giftFilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={`/img/${item.title}`} alt={item.name}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="list06">
                        <ul>
                            {presentFilter.map((item,index)=>(
                                <li key={index}>
                                    <img src={`/img/${item.title}`} alt={item.name}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>):(
                    <ul>
                            {(categorys === 'nuts' ? nutsFilter : 
                            categorys === 'snack' ? snackFilter :
                            categorys === 'cream' ? creamFilter :
                            categorys === 'butter' ? butterFilter :
                            categorys === 'gift' ? giftFilter :
                            categorys === 'present' ? presentFilter :
                            categorys ).map((item,index)=>(
                                 <li key={index}>
                                    <img src={`/img/${item.title}`} alt={item.name}/>
                                </li>
                            ))}
                        </ul>
                 )} 
                {/* <ul>
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
                    </ul> */}
            </div>
        </div>
    )
}