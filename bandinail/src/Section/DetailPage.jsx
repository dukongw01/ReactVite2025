import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import like from '../../public/bandi_img/like.png';
import detailimg from '../../public/bandi_img/detailimg.jpg';
import './DetailPage.css';

export default function DetailPage({nailDataList}){

    //상세페이지


    const {id} = useParams();
    const findItem = nailDataList.find((item)=> item.id === Number(id))
    console.log(findItem.item);

    //수량 증가 감소
    const [count, setCount]=useState(1);
    const plusbtn = () => setCount(count+1);
    const minusbtn = () => { if (count>1) {setCount(count-1)}
        else {
            alert("최소 주문 수량은 1개입니다.");};    
        };

    //찜
    const [likeit, setLikeit] = useState(false);
    const likefull = ()=> setLikeit('♥');

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
            alert(`${item.name} 장바구니 담김`);
        }else{
            alert(`${item.name} 담긴 수량 추가`);
            findItem.count += count;}
        setCartIn(cartInCopy);
    }

    // 구매시 가격 할인 적용
    const discountRate = findItem.sale ? parseInt(findItem.sale) / 100 : 0;
    const unitPrice = findItem.sale ? findItem.price * (1 - discountRate) : findItem.price;

    //총 합계 + 수량
    const totalPrice = unitPrice * count;


    return(
        <div className="detailcontainer">
            <div className="container-sub">
                <div className="leftbox">
                    {/* 이미지 크기 영역 */}
                    <div className="imgbox">
                        <img src={`/bandi_img/${findItem.title}.jpg`} alt={findItem.name} />
                    </div>
                </div>
                {/* 상품설명영역 */}
                <div className="rightbox">
                    <h2>{findItem.name}</h2>
                    <div className="itemdemo">
                        <ul>
                            <li><p><strong>판매가</strong></p></li>
                            <li className="gray-text"><p>제조사</p></li>
                            <li className="gray-text"><p>원산지</p></li>
                            <li className="gray-text"><p>배송비</p></li>
                        </ul>
                        <ul>
                            <li>
                                {/* 원가 */}
                                <p className={`find-price ${findItem.sale ? 'is-sale' : 'is-normal'}`}> <strong> {findItem.price.toLocaleString('ko')}원</strong></p>
                                {/* 할인가 */}
                                <p>{findItem.sale && (
                                        <strong className="findItem-price">
                                            {(findItem.price * (1 - parseInt(findItem.sale) / 100)).toLocaleString('ko-KR')}원
                                            {/* 퍼센트 */}
                                            <span className="findItem-sale-percent">{findItem.sale}</span>
                                        </strong>
                                )} </p>
                            </li>
                            <li className="gray-text"><p>위미인터내셔널(주)</p></li>
                            <li className="gray-text"><p>대한민국</p></li>
                            <li className="gray-text"><p>3,000원(5만원 이상 구매시 무료)</p></li>
                        </ul>
                    </div>
                    <div className="paybuy">
                        <p>수량: </p>
                        <div className="pin-box">
                            <button onClick={minusbtn}>-</button>
                            <p>{count}</p>
                            <button onClick={plusbtn}>+</button>
                        </div>
                    </div>
                    {/* 총 개수 가격 할인 적용등 계산 */}
                    <div className="total-price-area">
                        <div className="total-label">
                            <p><span>총 상품 금액</span> ({count}개)</p>
                        </div>
                        <div className="total-amount">
                            <strong className="price-num">{totalPrice.toLocaleString('ko')}원</strong>
                        </div>
                    </div>
                    <div className="paytype-btn">
                        <button className="buybtn"><Link to='/Cart'>바로구매</Link></button>
                        <button className="cartbtn"><Link to='/Cart'>장바구니</Link></button>
                        <button className="giftbtn"><Link to='/LoginPage'>선물하기</Link></button>
                        <button className="likebtn"><Link to='/LoginPage'><img src={like} alt="like" /></Link></button>
                    </div>
                    <div className="subpaybtn">
                        <p className="blur-text">비회원 구매</p>
                        <button className="naverbtn">ⓝPAY 구매</button>
                        <button className="kakaobtn">KAKAO PAY</button>
                    </div>
                </div>
            </div>
            <div className="bigimgbox">
                <h5>상품 상세정보</h5>
                <img src={detailimg} alt="detailimg" />
            </div>
        </div>
    )
}