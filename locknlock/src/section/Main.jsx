import { useEffect, useRef, useState } from "react";
// 슬라이드 이미지 불러오기
import banner01 from '../../public/LnL_img/banner01.jpg';
import banner02 from '../../public/LnL_img/banner02.jpg';
import banner03 from '../../public/LnL_img/banner03.jpg';
import banner04 from '../../public/LnL_img/banner04.jpg';
// 스타일 CSS
import './Main.css';
import { Link } from "react-router-dom";

export default function Main({AllData}){

    //슬라이드 이미지 접근
    const PopslidIMG = [
        {id:1, name:'LnL_img/slide01.jpg'},
        {id:2, name:'LnL_img/slide02.jpg'},
        {id:3, name:'LnL_img/slide03.jpg'},
        {id:4, name:'LnL_img/slide04.jpg'},
        {id:5, name:'LnL_img/slide05.jpg'}
    ];

    //슬라이드 인덱스
    const [popSlide, setPopSlide] = useState(0);
    //슬라이드 재생
    const [playPop, setPlayPop] = useState(true);
    //슬라이드 타이머
    const slideTimer = useRef(null);
    const popSlider = PopslidIMG.length;

    //자동 슬라이드
    useEffect(()=>{
        if(playPop){
            slideTimer.current = setInterval(()=>{
                setPopSlide(index => (index + 1) % popSlider);
            }, 4000);
        }
        return () => {
            if(slideTimer.current){
                clearInterval(slideTimer.current);
            }
        };
    }, [playPop, popSlider]);

    //슬라이드 순서 버튼
    const popSlideNum=(index)=>{setPopSlide(index)};
    //슬라이드 재생 정지
    const popStop=()=>{setPlayPop(playPop=>!playPop)};
    //이전 슬라이드
    const slidePrev=()=>{setPopSlide(previndex=>previndex===0?popSlider -1 : previndex -1)};
    // 다음 버튼
    const slideNext=()=>{setPopSlide(previndex=>(previndex+1)%popSlider)}

    // 베스트 아이템 데이터
    const bestItems = AllData.filter(item => item.isBest);
    // 신상품 데이터
    const isNewItem = AllData.filter(item => item.isNew);


    return(
        <div className="Main-container">
            <div className="Main-top-fit">
                <div className="Main-slide"> {/* 슬라이드 */}
                    <ul>
                        {PopslidIMG.map((item, index) => (
                            <li key={item.id} className={index === popSlide ? "active" : ""}
                                style={{ display: index === popSlide ? "block" : "none" }}>
                                <img src={item.name} alt={`${item.name}`} />
                            </li>
                        ))}
                    </ul>
                    {/* 슬라이드 이전-다음 */}
                    <div className="Main-slide-btn">
                        <button type="button" onClick={slidePrev} className="prevBtn"> ◁ </button>
                        <button type="button" onClick={slideNext} className="nextBtn"> ▷ </button>
                    </div>
                    {/* 슬라이드 멈춤-재생 */}
                    <div className="Main-slide-number">
                        <button type="button" onClick={popStop} className="stopBtn">
                            {playPop ? <img src='./LnL_img/stop.png' alt="stopIcon"/> : <img src='./LnL_img/play.png' alt="playIcon"/>}
                        </button>
                        {/* 슬라이드 순서 버튼 */}
                        <div className="Main-slide-tap-btn">
                            {PopslidIMG.map((_, index)=>(
                                <button
                                    key={index}
                                    className={`slide${index === popSlide ? "on" : "off"}`}
                                    onClick={() => popSlideNum(index)}
                                    aria-label={`슬라이드 ${index + 1}`}
                                    type="button">
                                    {index === popSlide ? '●' : '○'}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="Main-center">
                    {/* 베스트 아이템 영역 */}
                    <h1>베스트 아이템</h1>
                    <ul>
                        {bestItems.map((item) => (
                            <li key={item.id}>
                                <div className="MaincenterImg-Box">
                                    <div className="MaincenterImg-thumbnail">
                                        {/* findProd → item 으로 통일, 템플릿 리터럴 문법 수정 */}
                                        <img src={`../LnL_img/allProductIMG/${item.thumbnail}-01.jpg`} alt={item.sku} />
                                    </div>
                                    {/* 클릭시 상세페이지 이동 */}
                                    <Link to={`/DetailProd/${item.id}`}>
                                        <p>{item.name}</p>
                                        <h5>{(item.basePrice * (1 - item.discountRate / 100)).toLocaleString()}원
                                            <strong>{item.discountRate ? `${item.discountRate}%` : null}</strong>
                                            <span>☆{item.rating} ({item.reviewCount})</span>
                                        </h5>
                                    </Link>
                                </div>
                            </li>
                        ))}
                        <div className="MoreItem"><Link to={`/ProductPage`}><button> 더보기 →</button></Link></div>
                    </ul>
                </div>
                <div className="Main-right">
                    {/* 신상품 영역 */}
                    <h1>신상품</h1>
                    <ul>
                        {isNewItem.map((item) => (
                            <li key={item.id}>
                                <div className="MainrightImg-Box">
                                    <div className="MainrightImg-thumbnail">
                                        {/* findProd → item 으로 통일, 템플릿 리터럴 문법 수정 */}
                                        <img src={`../LnL_img/allProductIMG/${item.thumbnail}-01.jpg`} alt={item.sku} />
                                    </div>
                                    {/* 클릭시 상세페이지 이동 */}
                                    <Link to={`/DetailProd/${item.id}`}>
                                        <p>{item.name}</p>
                                        <h5>{(item.basePrice * (1 - item.discountRate / 100)).toLocaleString()}원
                                            <strong>{item.discountRate ? `${item.discountRate}%` : null}</strong>
                                            <span>☆{item.rating} ({item.reviewCount})</span>
                                        </h5>
                                    </Link>
                                </div>
                            </li>
                        ))}
                        <div className="MoreItem"><Link to={`/ProductPage`}><button>더보기 →</button></Link></div>
                    </ul>
                </div>
            </div>
            <div className="Main-bottom">
                <h1>특별한 아이템</h1>
                <div className="banner-box00">
                    <div className="banner-box01">
                        <img src={banner01} alt="banner01" />
                        <h4>신선함을 높이는 방법</h4>
                        <p>진공 잠금 시스템을 확인하세요</p>
                    </div>
                    <div className="banner-box02">
                        <img src={banner02} alt="banner02" />
                        <h4>든든한 온기를 오래도록</h4>
                        <p>보온 도시락으로 피크닉 가요</p>
                    </div>
                    <div className="banner-box03">
                        <img src={banner03} alt="banner03" />
                        <h4>주방에 스타일을 더하다</h4>
                        <p>기능과 디자인을 한 번에 잡았습니다</p>
                    </div>
                    <div className="banner-box04">
                        <img src={banner04} alt="banner04" />
                        <h4>우리 아이와 함께 안심</h4>
                        <p>리틀럽으로 사랑을 전해요</p>
                    </div>
                </div>
            </div>
        </div>
    )

}