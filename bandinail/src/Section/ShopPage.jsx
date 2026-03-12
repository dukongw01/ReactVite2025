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
    
    //카트 목록 //ai가 추가한 함수
    useEffect(() => { // useEffect라는 훅은 내부의 함수가 바뀔때 실행되는 것이다.
        localStorage.setItem('cartList', JSON.stringify(cartList)); //.stringify로 객체를 문자열로 변환시키고 localStorage저장 한 아이템을 꺼내씀.
        //윈도우(브라우저)에 변경 사항을 dispatchEvent 로 알림을 주어 new Event 새로운 이벤트 상황을 실시간으로 변경
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

    // 페이지 구분 (ai에 slice 명령문을 입력하여 함수추출)
    const LastPage = currentPage * PageBtn; // 1페이지 = 20
    const FirstPage = LastPage - PageBtn; // 1페이지 = 0
    const currentItems = cateTap.slice(FirstPage, LastPage); // 현재 페이지에 특정 데이터만 자르겠다. slice

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(cateTap.length / PageBtn); i++) {
        // Math.ceil => 표(페이지) 안에 지정한 데이터의 개수만 담겠다. 예) 한 페이지에 20개의 상품만 노출 시키기
        //cateTap.length라는 데이터가 담기는 수를 따라 페이지 버튼 1,2,3 ... 등을 생성
        pageNumbers.push(i); // pageNumbers에 새로운 항목을 뒤에 추가해서 넣는다. i에 지정한 배열(Array)
    }

    // 페이지 1로 리셋 (ai 추출)
    useEffect(() => {
        setCurrentPage(1); //현재 페이지 상태를 무조건 1로 만든다.
        // 필터 조건이 바뀔 때, 현재 보고 있던 페이지를 가장 첫 페이지로 만든다는 뜻.
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