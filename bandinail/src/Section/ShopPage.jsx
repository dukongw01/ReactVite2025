import { useEffect, useState } from "react";

//NailFilter.jsx에서 Datalist와 FilterData를 받아옴
export default function ShopPage({Datalist, FilterData}){

    //카트 목록
    const [cartList, setCartList] = useState(()=>{
        const cartsave = localStorage.getItem('cartList');
        console.log("cart자료", cartsave);
        return cartsave? JSON.parse(cartsave):[];
    });

    //카트 바뀜 localstorage 저장
    useEffect(()=>{
        localStorage.setItem('cartList', JSON.stringify(cartList));
    },[cartList]);

    //cart 버튼 클릭 핸들러
    const cartBtn = (item) => {
        const cartListCopy = [...cartList]
        const findItem = cartList.find((cartItem)=>cartItem.id === id)
        //find 결과가 존재하면 아래출력
        if (findItem === undefined){
            cartListCopy.push({...item, count:1});
            alert(`${item.name} 장바구니`)
        }else{ //같은 상품이미 존재시 출력
            alert(`${item.name} 장바구니`)
            findItem.count += 1;
        }
        setCartList(cartListCopy)
    }

    const findItemFilter = Datalist.filter((item)=>item.type === FilterData);
    const cateTap = FilterData.length === 0 ? Datalist : findItemFilter;

    useEffect(()=>{
        console.log(FilterData)
        console.log(findItemFilter)
    },[FilterData])
   


    return(
        <div className="Main-container">
            {/* 상단 메뉴 탭 필터 */}
            <div className="Tap-filer">
                <ul>
                    {cateTap.map((item)=>(
                        <li key={item.id}>
                            <Link to={`/${item.id}`}>
                                <div className="catebox">
                                    <img src={`/img/${item.title}`} alt={item.name} />
                                </div>
                                <div className="pricebox">
                                    <p>{item.price.toLocaleString('ko')}원</p>
                                    <button type="button">상세보기</button>
                                </div>
                            </Link>
                            <div className="cart-btn">
                                <button type="button"className="cart-icon" onClick={()=>cartBtn(item)}><img src={cart} alt="cart.png"></img> </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* 중앙 상품 변화 */}
            <div className="Item-box">
            </div>
        </div>
    )
}