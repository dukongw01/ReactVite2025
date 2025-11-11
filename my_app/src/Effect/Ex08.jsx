import {  useEffect, useState, useTransition } from "react";

export default function Ex08(){
    // 입력하는 메세지가 여러개 담기는 상태 변수
    // 0 -> a, 1 -> b, 2 => c
    const[chat, setChat]=useState([]);
    // input 입력을 담는 상태 변수
    const[inputText, setInputText]=useState('');

    //useEffect => 메세지 a -> a, b -> b
    useEffect(()=>{
        if(chat.length >0){
            //마지막에 입력된 메세지 출력 시킴
            // 하나라도 입력되면 출력, 아닐 시 출력 금지라는 뜻
            let lastChat = chat[chat.length-1]
            console.log('새 메세지: '+lastChat)
        }
    },[chat])

    //inputHandeler 함수
    const inputHandeler = (e) => {
        setInputText(e.target.value)
    }
    //메세지 전송 함수
    const chatSubmit = () => {
        // 빈 메세지 방지 예외 처리
        if(inputText.trim()==='') return;
        // 입력받은 메세지 배열에 push
        // 얕은 복사 => 배열, 객체 [{}]
        const chatCopy = [...chat]
        chatCopy.push(inputText)
        setChat(chatCopy)
        setInputText('') //input 입력된 텍스트를 지워준다 -> 빈 텍스트로 리셋
    }

    return(
        <>
            <div>
                <h3>메세지 입력기</h3>
                {/* 메세지 입력 */}
                <input type="text" value={inputText} onChange={inputHandeler} placeholder="메세지를 입력하세요."/>
                <button type="button" onClick={chatSubmit}>전송</button>
                {/* 메세지 출력 */}
                <ul>
                    {chat.map((chat,index) => (
                        <li key={index}>{chat}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}