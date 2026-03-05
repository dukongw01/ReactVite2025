import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cart from '../../public/bandi_img/cart.png';
import './ShopPage.css';

//NailFilter.jsx에서 Datalist와 FilterData를 받아옴
export default function ShopPage({Datalist, FilterData}){

    const [cartList, setCartList] = useState(() => {
        const cartsave = localStorage.getItem('cartList');
        return cartsave ? JSON.parse(cartsave) : [];
    });
    
    //카트 목록
    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList));
        window.dispatchEvent(new Event('cartUpdate'));
    }, [cartList]);


    //카트 바뀜 localstorage 저장
    useEffect(()=>{
        localStorage.setItem('cartList', JSON.stringify(cartList));
    },[cartList]);

    //cart 버튼 클릭 핸들러
    const cartBtn = (item) => {
        setCartList(prevList => {
            const findItem = prevList.find((cartItem) => cartItem.id === item.id);
            if (!findItem) {
                alert(`${item.name} 장바구니에 담겼습니다.`);
                return [...prevList, { ...item, count: 1 }];
            } else {
                alert(`${item.name} 수량이 1개 추가되었습니다.`);
                return prevList.map(cartItem => 
                    cartItem.id === item.id 
                    ? { ...cartItem, count: cartItem.count + 1 } 
                    : cartItem
                );
            }
        });
    };

    


    const findItemFilter = Datalist.filter((item)=>item.type === FilterData);
    const cateTap = FilterData.length === 0 ? Datalist : findItemFilter;

    useEffect(()=>{
        console.log(FilterData)
        console.log(findItemFilter)
    },[FilterData])


    // 페이지 나누기
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const PageBtn = 20; // 한 페이지에 보여줄 개수

    // 페이지 구분
    const LastPage = currentPage * PageBtn; // 1페이지 = 20
    const FirstPage = LastPage - PageBtn; // 1페이지 = 0
    const currentItems = cateTap.slice(FirstPage, LastPage); // 현재 페이지

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(cateTap.length / PageBtn); i++) {
        pageNumbers.push(i);
    }

    // 페이지 1로 리셋
    useEffect(() => {
        setCurrentPage(1);
    }, [FilterData]);
   


    return(
        <div className="Main-container">
            {/* 상단 메뉴 탭 필터 */}
            <div className="Tap-filer">
                <ul>
                    {currentItems.map((item)=>(
                        <li key={item.id}>
                            <Link to={`/DetailPage/${item.id}`}>
                                <div className="catebox">
                                    {/* 상품 썸네일 */}
                                    <img src={`bandi_img/${item.title}.jpg`} alt={item.name} />
                                </div>
                                <div className="pricebox">
                                    {/* 가격 */}
                                    <h4>{item.name}</h4>
                                    <p className={`item-price ${item.sale ? 'is-sale' : 'is-normal'}`}> {item.price.toLocaleString('ko')}원 </p>
                                        {/* 할인 적용 표시 */}
                                        {item.sale && ( <p className="sale-price"> 
                                            <strong>
                                                {(item.price * (1 - parseInt(item.sale) / 100)).toLocaleString('ko')}원
                                                {/* 퍼센트 */}
                                                <span> {item.sale}</span>
                                            </strong> </p>)}
                                    {/* 상세보기 버튼 */}
                                    <button type="button">상세보기</button>
                                </div>
                            </Link>
                            <div className="cart-btn">
                                {/* 카트 담기 아이콘 */}
                                <button type="button"className="cart-icon" onClick={()=>cartBtn(item)}><img src={cart} alt="cart.png"></img> </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="pagination">
                    {pageNumbers.map(number => (
                        <button 
                            key={number} 
                            onClick={() => setCurrentPage(number)}
                            className={currentPage === number ? "active" : ""}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}