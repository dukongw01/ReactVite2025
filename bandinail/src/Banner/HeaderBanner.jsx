import { useEffect, useRef, useState } from "react";
import './HeaderBanner.css';

export default function HeaderBanner(){

    //헤더 배너 BigSlide 이미지 접근
    const BigSdItem = [
        {id:1, imgname:'bandi_img/slide_01.jpg'},
        {id:2, imgname:'bandi_img/slide_02.jpg'},
        {id:3, imgname:'bandi_img/slide_03.jpg'},
        {id:4, imgname:'bandi_img/slide_04.jpg'}
    ];

    //슬라이드 인덱스
    const [bigsd, setBigSd] = useState(0);
    //배너 재생
    const [playBigsd, setPlayBigSd] = useState(true);
    //타이머
    const Slidetimer = useRef(null);
    const BigSlides = BigSdItem.length;
    
    //자동 슬라이드
    useEffect(()=>{
        if(playBigsd){
            Slidetimer.current=setInterval(()=>{
                setBigSd(index=>(index+1)%BigSlides);
            },3000);
        }return()=>{
            if(Slidetimer.current){
                clearInterval(Slidetimer.current);
            }
        };
    },[playBigsd, BigSlides]);

    //슬라이드 순서 버튼
    const BsdClick=(index)=>{ setBigSd(index); };
    //슬라이드 재생 정지
    const sdStop=()=>{ setPlayBigSd(playBigsd=>!playBigsd); };
    //이전 버튼
    const sdPrev=()=>{ setBigSd(previndex => previndex === 0? BigSlides -1 : previndex -1);}
    //다음 버튼
    const sdNext=()=>{ setBigSd(previndex => (previndex+1) % BigSlides);};


    return(
        <div className="BigSlideContainer">
            <div className="btnbox">
                <ul>
                    {BigSdItem.map((item, index) => (
                        // 현재 index가 같으면 'active' 부여
                        <li key={item.id} className={index === bigsd ? "active" : ""}
                            style={{ display: index === bigsd ? "block" : "none" }}>
                            <img src={item.imgname} alt={`${item.id}로 이동`} />
                        </li>
                    ))}
                </ul>
                {/* 슬라이드 앞뒤 조작 버튼 */}
                <button type="button" onClick={sdPrev} className="sdPrev">＜</button> {/* 뒤 */}
                <button type="button" onClick={sdNext} className="sdNext">＞</button> {/* 앞 */}
            </div>
            <div className="btnbox02">
                {/* 슬라이드 1234순번 버튼 */}
                <div className="Tap_btn">
                    {/* 정지 : 재생 */}
                    <button type="button" onClick={sdStop} className="sdStop">
                        {playBigsd ? <img src='./bandi_img/stop.png' alt="stopicon" /> : <img src='./bandi_img/play.png' alt="playicon" />}
                    </button>
                    {BigSdItem.map((_, index) => (
                        <button key={index} className={`slideBig ${index === bigsd ? "on" : "off"}`}
                        type="button" onClick={() => BsdClick(index)}
                        aria-label={`${index + 1}번째 슬라이드 이동`}>●</button>
                    ))}
                </div>
            </div>
        </div>

    )
}