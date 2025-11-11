// createContext => 공유 데이터를 저장하는 저장소를 생성
// 반드시 import { createContext } 한다

import { useState,useEffect } from "react";
import { createContext } from "react";
// 상태 변수 사용 useState import 한다

// Context 생성 : wishlistContext
// Context 생성한 후 내보내야 함 = > 반드시 export
// 생성자 함수
export const wishlistContext = createContext()

// 공급자(Provider) : 데이터를 공급하는 컴포넌트
export default function wishlistProvider({children}){
    // 찜한 항목을 저장할 상태 변수를 정의
    // 초기값은 빈배열이다.
    // 1. localStorage에서 최초 랜더링 1회 불러오기
    const [wishlist, setWishlist]=useState(()=>{
        const saved = localStorage.getItem('wishlist');
        // 저장된 찜 목록이 있으면 복원, 없으면 빈배열
        return saved ? JSON.parse(saved) : [];
    })
    

    // [---- 엣지에서만 원활히 작동되는 코드]
    // // 1. localStorage에서 최초 랜더링 1회 불러오기
    // // useEffect이용해서 작성
    // useEffect(()=>{
    //     const saved=localStorage.getItem('wishlist')
    //     if(saved){
    //         setWishlist(JSON.parse(saved)) // 상태 갱신
    //     }
        // useEffect에선 return 방식은 cleanUp함수 작성 방법
        
    // },[])
    // [ 엣지에서만 원활히 작동되는 코드-----]

    // // 2. wishlist가 바뀔때마다 localStorage에 저장이 되어야한다.
    useEffect(()=>{
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    },[wishlist])
    
    // 찜한 상품을 추가하는 함수 생성
    // 이미 같은 id를 가진 상품이 존재하면 중복 추가 안되도록
    // 존재 유무를 확인해야 함
    const addToWishlist = (product) => {
        // 중복을 피하기 위해 같은 id가 존재하는지 유무
        // 확인 => 배열.find() 이용
        // 배열.find() => 찾는 항목이 존재하면 오브젝트 배열
        // 항목이 없으면 undefinded
        const listFind = wishlist.find((item) => item.id === product.id )
        // listFind에 같은 id가 존재하느냐? 존재하면 중복 추가가 되면 안된다
        if(listFind === undefined){
            // 찜 항목에 추가
            let listCopy = [...wishlist]
            listCopy.push(product) // 내가 선택한 항목 {id:1, name:마우스, price:3000}
            // 업데이트
            setWishlist(listCopy)
        }
    }
    // 찜 해제 filter()함수 이용해서 id 다른 항목만 남겨서 업데이트 하는 기능
    const removeFromWishlist = (id) =>{
        setWishlist(wishlist.filter((item)=> item.id !== id))
    }

    // 1. localStorage 통째로 삭제
    const clearWishlist = () => {
        setWishlist([])
        localStorage.removeItem('wishlist');
    }


    // isInWishlist : 이미 찜된 항목 확인을 위해 생성하는 함수
    // 해당 id의 상품객체가 존재하면 true, 없으면 false 반환
    // find()함수 이용 -> id가 있는지 없는지 확인하기 위해
    const isInWishlist = (id) => {
        // wishlist 항목에서 id가 일치하는 상품을 찾는다
        const findItem = wishlist.find((item)=>item.id === id)
        // 찾는 상품이 존재하면 findItem에 객체(Object)로 들어가고 없으면 undefinded
        if(findItem !== undefined){
            return true;
        }else{
            // 상품이 없으면 false로 반환
            return false;
        }
    }
    
    // 공급자 (Provider) 생성
    return(
        <wishlistContext.Provider value={{wishlist,addToWishlist,removeFromWishlist,isInWishlist,clearWishlist}}>
            {/* 여기서 children이란 wishlistContext의 하위 컴포넌트 모두를 의미한다 */}
            {children}
        </wishlistContext.Provider>
    )
}