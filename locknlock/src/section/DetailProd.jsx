import likeIcon from '../../public/LnL_img/like.png';
import linkIcon from '../../public/LnL_img/link.png';
import GiftIcon from '../../public/LnL_img/gift.png';


import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

// import './DetailProd.css';


export default function DetailProd({AllData}){

    // 상세 페이지
    const {id} = useParams();
    const findProd = AllData.find((item) => item.id === Number(id));
    console.log(findProd);

    // 수량 증가 감소
    const [itemCount, setItemCount] = useState(1);
    const plusBtn = () => setItemCount(itemCount + 1);
    const minusBtn = () => {
        if (itemCount > 1) { setItemCount(itemCount - 1); }
        else { alert("최소 주문 수량은 1개 입니다."); }
    };

  
    // 찜
    const [likeThis, setLikeThis] = useState(false);
    const likeFull = () => setLikeThis(prev => !prev);

    //장바구니(카트)
    const [prodList, setProdList] = useState(() => {
        const listsave = localStorage.getItem('prodList');
        return listsave ? JSON.parse(listsave) : [];
    });
        
    //장바구니 목록 - 상태 변동 localStorag 저장
    useEffect(() => {
        localStorage.setItem('prodList', JSON.stringify(prodList));
        window.dispatchEvent(new Event('prodListUpdate'));
    }, [prodList]);

    //장바구니 버튼 클릭 핸들러
    const cartHandle = (item) => {
        setProdList(prevCart => {
            const existItem = prevCart.find(pItem => pItem.sku === item.sku);  {/* findProd → existItem (상단 findProd와 이름 충돌 방지) */}
            if (!existItem) {
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

    // 구매 가격 할인 적용
    const disRate = findProd.discountRate ? parseInt(findProd.discountRate) / 100 : 0;
    const undisRate = findProd.discountRate ? findProd.basePrice * (1 - disRate) : findProd.basePrice;

    // 총 합계 + 수량
    const totalRate = undisRate * itemCount;


    // 작은 썸네일 개수
    const [miniThum, setMiniThum] = useState(1); //현재 큰썸네일
    const countMini = 5; //작은 썸네일 최대 개수

    // // 썸네일 개수 구분
    // const MiniNum = [];
    // for (let i =1; i<=Math.ceil(filterTap.length/countMini); i++){
    //     MiniNum.push(i);
    // }

    // 썸네일 번호 배열 생성 (1~countMini)
    const MiniNum = Array.from({ length: countMini }, (_, i) => i + 1);

    // 썸네일을 1로 리셋 무한루프 방지
    useEffect(() => { setMiniThum(1); }, [findProd]);    

        
    return(
        <div className="Datail-container">
            <div className="Item-contailner">
                {/* 왼쪽 이미지 박스 영역 시작*/}
                <div className="Left-container">
                    {/* 큰 썸네일 */}
                    <div className="Big-thumnail">
                        <img src={`../LnL_img/allProductIMG/${findProd.thumbnail}-01.jpg`} alt={findProd.thumbnail} />
                    </div>
                    {/* 작은 썸네일 */}
                    <ul>
                        {MiniNum.map(number => (
                            <li key={number}
                                onClick={() => setMiniThum(number)}
                                className={miniThum === number ? "active" : ""}>
                                <img
                                    src={`../LnL_img/allProductIMG/${findProd.thumbnail}-${String(number).padStart(2, '0')}.jpg`}
                                    alt={`썸네일${number}`}
                                    onError={(e) => {
                                        // 이미지 로드 실패 시 li 태그 자체를 숨김
                                        e.currentTarget.parentElement.style.display = 'none';
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                {/* 왼쪽 이미지 영역 박스 끝 */}
                
                {/* 오른쪽 상품 설명 영역 시작 */}
                <div className="Right-container">
                    {/* 제품 코드와 좋아요 / 공유 아이콘 */}
                    <div className="DetailItemLikeLink">
                        <p className="Detail-Item-Name">{findProd.sku}</p> {/* 제품 코드 */}
                        <button onClick={likeFull}>  {/* likeFull 버튼에 연결 */}
                            {/* 좋아요 */}
                            {likeThis ? '♥' : '♡'}  {/* 찜 상태 표시 */}
                        </button>
                        <button><img src={linkIcon} alt="linkIcon" /> {/* 공유 링크 */}</button>
                    </div>
                    <h3>{findProd.name}</h3>
                    <div className='PriceBox'>
                        <p className="Discount">{findProd.discountRate}%</p> {/*할인가*/}
                        <p className="Baseprice">{findProd.basePrice.toLocaleString('ko')}</p> {/*원가*/}
                        <p className="Baseprice">☆{findProd.rating}</p> {/*평점*/}
                        <p className="Baseprice">{findProd.reviewCount}</p> {/*리뷰*/}
                    </div>
                    <p className='ItemCount'>수량:</p>
                    <div className='MinusPlus'> {/* 수량 버튼 영역 */}
                        <button onClick={minusBtn}>-</button>
                        <p>{itemCount}</p>
                        <button onClick={plusBtn}>+</button>
                    </div>
                    <p>배송비: {(totalRate >= 50000 ? 0 : 3000).toLocaleString('ko')}원</p>
                    <p className='ItemTotal'><span>총 상품금액: </span>{totalRate.toLocaleString('ko')}원</p> {/* 총금액 */}
                    <div className='Buy-Btn'>
                        <button className='GiftIcon'><img src={GiftIcon} alt="GiftIcon" /></button>
                        <button type='button' className='cartbtn' onClick={() => cartHandle(findProd)}>장바구니</button>
                        <button type='button' className='cartbtn'>바로구매</button>
                        {/* 비회원 구매 */}
                        <div className='naverkakao-Btn'>
                            <button className="naverbtn">ⓝPAY 구매</button>
                            <button className="kakaobtn">KAKAO PAY</button>
                        </div>
                    </div>
                </div>
                {/* 오른쪽 상품 설명 영역 끝 */}
            </div>
            <div className='Detail-Bottom-container'>
                <ul>
                    <li>상품상세정보</li>
                    <li>상품후기 {findProd.reviewCount}</li>
                    <li>상품문의</li>
                </ul>
                {/* 상품상세페이지 이미지 영역 */}
                <div className='IMG-Box'>
                    {MiniNum.map(number => (
                        <img
                            key={number}
                            src={`../LnL_img/allProductIMG/${findProd.thumbnail}_${String(number).padStart(2, '0')}.jpg`}
                            alt={`${findProd.thumbnail}-${number}`}
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )


}