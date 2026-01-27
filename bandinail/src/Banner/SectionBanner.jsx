import { useEffect, useState, useRef } from "react";

export default function SectionBanner(){
    //헤더 배너 MSlide 이미지 접근
    const MSdItem = [
        {id:1, imgname:'bandi_img/banner01.jpg'},
        {id:2, imgname:'bandi_img/banner02.jpg'},
    ];

    //슬라이드 인덱스
    const [Msd, setMSd] = useState(0);
    //배너 재생
    const [playMsd, setPlayMSd] = useState(true);
    //타이머
    const Slidetimer = useRef(null);
    const MSlides = MSdItem.length;
    
    //자동 슬라이드
    useEffect(()=>{
        if(playMsd){
            Slidetimer.current=setInterval(()=>{
                setMSd(index=>(index+1)%MSlides);
            },3000);
        }return()=>{
            if(Slidetimer.current){
                clearInterval(Slidetimer.current);
            }
        };
    },[playMsd, MSlides]);

    //슬라이드 순서 버튼
    const MsdClick=(index)=>{ setMSd(index); };
    //슬라이드 재생 정지
    const sdStop=()=>{ setPlayMSd(playMsd=>!playMsd); };
    //이전 버튼
    const sdPrev=()=>{ setMSd(previndex => previndex === 0? MSlides -1 : previndex -1);}
    //다음 버튼
    const sdNext=()=>{ setMSd(previndex => (previndex+1) % MSlides);};


    return(
        <div className="MSlideContainer">
            <div className="btnbar">
                <ul>
                    {MSdItem.map((item, index) => (
                        // 현재 index가 같으면 'active' 부여
                        <li key={item.id} className={index === Msd ? "active" : ""}
                            style={{ display: index === Msd ? "block" : "none" }}>
                            <img src={item.imgname} alt={`${item.id}로 이동`} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="btnbar02">
                {/* 슬라이드 조작 버튼 */}
                <button type="button" onClick={sdPrev} className="sdPrev">←</button> {/* 뒤 */}
                <button type="button" onClick={sdStop} className="sdStop">
                {playMsd ? <h1>■</h1> : <h3>▶</h3>} {/* 정지 : 재생 */}
                </button>
                <button type="button" onClick={sdNext} className="sdNext">→</button> {/* 앞 */}
            </div>
            <div className="Tap_btn02">
                {/* 슬라이드 순번 버튼 */}
                {MSdItem.map((_, index) => (
                    <button key={index} className={`slideM ${index === Msd ? "on" : "off"}`}
                    type="button" onClick={() => MsdClick(index)}
                    aria-label={`${index + 1}번째 슬라이드 이동`}><h2>●</h2></button>
                ))}
            </div>
        </div>

    )
}