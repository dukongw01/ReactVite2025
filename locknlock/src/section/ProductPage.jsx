import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import cart from '../../public/LnL_img/cart.png';

import './ProductPage.css'



export default function ProductPage({AllData, cateFilter}){
    
    const cateNameMap = {
        'Appliances': '가전',
        'Cooking': '조리',
        'Kitchen': '주방',
        'Outdoor': '야외',
        'Storage': '보관',
        'Sundries': '잡화',
        'Best': '베스트',
    };

    //장바구니(카트)

    const [prodList, setProdList] = useState(()=>{
        const listsave = localStorage.getItem('prodList');
        return listsave ? JSON.parse(listsave):[];
    });
    
    //장바구니 목록 - 상태 변동 저장
    useEffect(()=>{
        localStorage.setItem('prodList',JSON.stringify(prodList));
        window.dispatchEvent(new Event('prodListUpdate'));
    },[prodList]);


    //장바구니 버튼 클릭 핸들러
    const cartHandle = (item) => {
        setProdList(prevCart => {
            const findProd = prevCart.find(pItem => pItem.sku === item.sku); // id 대신 sku로 비교 (카테고리마다 id 중복)
            if (!findProd) {
                alert(`${item.name} 장바구니에 담겼습니다.`);
                return [...prevCart, { ...item, count: 1 }];
            } else {
                alert(`${item.name} 수량이 1개 추가됐습니다.`);
                return prevCart.map(pItem =>
                    pItem.sku === item.sku ? { ...pItem, count: pItem.count + 1 } : pItem
                );
            }
        });
    };

    // 상품 필터 - cateFilter가 빈 문자열이면 전체, 아니면 해당 카테고리만
    const filterTap = 
        cateFilter === 'Best'
            ? AllData.filter((item) => item.isBest === true)  //베스트 필터
            : !cateFilter
            ? AllData  //전체
            : AllData.filter((item) => item.category === cateFilter);

    useEffect(() => {
        console.log('현재 카테고리:', cateFilter);
        console.log('필터 결과:', filterTap);
    }, [cateFilter, AllData]);

    // 페이지 나누기
    const [currentBtn, setCurrentBtn] = useState(1); //현재 페이지
    const PageNum = 15; //한 페이지에 보여줄 개수

    //페이지 구분
    const LastNum = currentBtn * PageNum; // 1 페이지 = 15
    const FirstNum = LastNum - PageNum; // 1페이지 = 0
    const currentItem = filterTap.slice(FirstNum, LastNum); //현재 페이지 데이터 자르기
    const pageNumBtn = [];
    for (let i=1; i<=Math.ceil(filterTap.length/PageNum); i++){ pageNumBtn.push(i); }
    // 페이지 1로 리셋
    useEffect(()=>{ setCurrentBtn(1); },[cateFilter]);


    return(
        <div className="ProductList-container">
            <div className="Prod-top-container">
                <h2>{cateFilter ? cateNameMap[cateFilter] : '전체 상품'}</h2>
                <h4>총 {filterTap.length}개 상품</h4>
            </div>
            <div className="Prod-list-container">
                <ul>
                    {currentItem.map(item => (
                        <li key={item.sku}>
                            <Link to={`/DetailProd/${item.id}`}>
                                {/* 썸네일 */}
                                <div className="Prod-card-IMG">
                                    <img src={`../LnL_img/allProductIMG/${item.thumbnail}-01.jpg`} alt={item.sku} />
                                </div>
                                {/* 상품정보 */}
                                <div className="Prod-card">
                                    <h5>{item.name}</h5> {/* 제목 */}
                                    <p style={{textDecoration:'line-through'}}>{item.basePrice}</p> {/* 원가 */}
                                    <p className="saleFont"> {/* 할인가 */}
                                        <strong>{(item.basePrice * (1 - item.discountRate / 100)).toLocaleString()}원 </strong>
                                        {item.discountRate ? `${item.discountRate}%` : null} {/* 퍼센티지 */}
                                    </p>
                                    <span>☆{item.rating} ({item.reviewCount})</span> {/* 평점 / 리뷰 */}
                                </div>
                            </Link>
                            <div className="Cart-Absolute"> {/* 장바구니 아이콘 */}
                                <button onClick={() => cartHandle(item)}><img src={cart} alt="cart.png" /></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="Prod-Page-Btn">
                {/* 페이지 버튼 */}
                {pageNumBtn.map(number =>(
                    <button key={number}
                        onClick={()=>setCurrentBtn(number)}
                        className={currentBtn === number ? "active" : ""}>
                        {number}
                    </button>
                ))}
            </div>
        </div>
    )
}