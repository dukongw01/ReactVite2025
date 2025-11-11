// createContext => 공유 데이터를 저장하는 저장소를
//    생성하는 함수이다.
// 반드시 import {createContext} 한다.
import { createContext, useState } from "react";
// 상태 변수 사용 useState import한다.

// Context 생성  : wishlistContext
// Context 생성한 후 내보야 함 => 반드시 export함
// 생성자 함수
export const wishlistContext = createContext()

//Provider(공급자) : 데이터를 공급하는 컴포넌트
export default function WishlistProvider({children}){
//   찜한 항목을 저장할 상태변수 정의
    //  초기값 빈배열이다.
    const [wishlist, setWishList] = useState([])

    // 찜한 상품을 추가하는 함수 생성
    // 이미 같은 id를 가진 상품이 존재하면 중복 추가 안됨
    // 존재 유무를 확인 해야 함
    const addToWishlist = (products) =>{
        // 중복을 피하기위해 같은 id가 존재하는지 유무
        // 확인 => 배열.find() 이용
        // 배열.find() => 찾는 항목이 존재하면 오브젝트 배열로 출력,
        //                항목이 없으면 undefinded 출력
        const listFind = wishlist.find((item) => item.id === products.id )
        // listFind에 같은 id가 존재하면 찜 항목 추가불가
        if(listFind === undefined){
            // 찜 추가
            let listCopy = [...wishlist]
            // 내가 선택한 항목 {id:1,name:마우스,price:3000}
            listCopy.push(products)
            // 업데이트
            setWishList(listCopy) 
        } 
    }
        // 찜 해제
        // filter()함수 이용해서 id가 다른 항목만 남겨서
        // 업데이트 하는 기능을 사용함
        const removeFromWishlist = (id) => {
            setWishList(wishlist.filter((item) => item.id !== id))
        }

        //  isInWishlist : 이미 찜된 항목 확인을 위해 생성하는 함수
        // 해당 id의 상품객체가 존재하면 true, 없으면 false 반환
        // find()함수 이용
        const isInWishlist = (id) => {
            // wishlist 배열에서 id가 일치하는 상품을 찾는다
            const findItem = wishlist.find((item)=> item.id === id )
            // 찾는 상품이 존재하면 findItem은 객체(Object)
            // 없으면 undefinded 
            if(findItem !== undefined){ // id 존재 함
            //    상품이 이미 찜 목록에 있음 -> true 반환
            return true;
            }else{
                // 상품이 없음 -> false 반환
                return false;
            }
        }

    // Provider(공급) 생성
    return(
      <wishlistContext.Provider 
      value={{wishlist,addToWishlist,removeFromWishlist,isInWishlist}}>
        {/* childrdn이란 : wishlistContext의 하위 컴포넌트 모두를 의미 */}
        {children} 
      </wishlistContext.Provider>        
    )
}