import { use, useEffect, useState } from "react";

export default function Ex09(){

    // 검색 상태 변수
    const [inputText, setInputText]=useState('');
    // filter한 목록을 담아주는 상태 변수
    // 배열 이름,filter((요소, 인덱스, 원본배열)=>{return 조건})
    // 조건에 만족하는 데이터를 추출해서 새로운 배열을 반환한다.
    // 조건에 만족하지 않으면 빈배열을 반환한다.

    const [filterList, setFilterList]=useState([])

    const users = [
        { id:1, name:'Alice', email:'alice@example.com' },
        { id:2, name:'Bob', email:'bob@example.com' },
        { id:3, name:'Charlie', email:'charlie@example.com' },
        { id:4, name:'David', email:'david@example.com' }
    ];

    const inputChange = (e) => [setInputText(e.target.value)]

    useEffect(()=>{
        // 검색어가 없으면 전체 사용자가 표시되도록 예외처리
        // input 스페이스 바 입력으로 인한 공백이 입력된 경우에도
        // users 목록이 출력되도록 예외처리 함
        if(!inputText.trim()){ // ! inputText.trim () === false => true
            setFilterList(users)
            return;
        }
        // filter
        // toUpperCase -> 대문자만
        const ResultFilter = users.filter((user)=>user.name.toUpperCase().includes(inputText.toUpperCase()))
        setFilterList(ResultFilter)
    },[inputText])

    return(
        <>
            <div>
                <input type="text" value={inputText} onChange={inputChange} placeholder="이름 또는 이메일 입력" />
                <ul>
                    {filterList.map((list)=>(
                        <li key={list.id}>{list.name}:{list.email}</li>
                    ))}
                </ul>
                {/* 검색 결과가 존재하지 않을 때 출력문 */}
                {filterList.length === 0 && <p>검색 결과가 존재하지 않습니다.</p>}
            </div>
        </>
    )
}