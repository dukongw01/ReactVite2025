import DaumPostCode from 'react-daum-postcode';
import { useState } from 'react';

export default function Postadd(){
    const[zipcode, setZipcode]=useState('') //우편
    const[address, setAddress]=useState('') //지번

    // 모달
    const completHand = (data) => {
        //우편 번호 검색
        let arr = ''
        if(data.userSelectedType === 'R'){
            arr = data.roadAddress; //도로
        }else{ arr = data.jibunAddress; // 지역
        }
        setZipcode(data.zonecode);
        setAddress(arr);
        setIsOpen(!isOpen);
    }

    const toggle = () =>{ setIsOpen(!isOpen) }
    
    return(
        <div>
            <input type="text" value={zipcode} name="post" id="post" placeholder='우편번호'/>
            <button id='userAddsearch' onClick={toggle}>우편 검색</button>
            <input type="text" value={address} placeholder='도로명' name='userAddress' id='userAddress' />
            <input type="text" placeholder='상세주소' name='dateAdd' id='detaAdd' />
            {/* 모달 */}
            {isOpen &&
            <div className='modalAdd' onClick={toggle}>
                <button className='close' onClick={toggle}>X</button>
                <DaumPostCode onComplete={completHand}/>
                </div>}
        </div>
    )

}