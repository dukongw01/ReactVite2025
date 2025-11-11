import { useState, createContext } from "react";

export const LikelistContext = createContext()

export default function LikelistProvider({children}){

    // 초기 빈배열
    const [likelist, setLikelist]=useState([])
    // 추가 함수
    const addLikeList = (product) =>{
        const likeFind = likelist.find((item)=> item.id === product.id)
        if(likeFind === undefined){
            // 찜 추가
            let likelistCopy = [...likelist]
            likelistCopy.push(product)
            setLikelist(likelistCopy)
        }
    }
    // 찜 해제
    const removeLikelist = (id) => {
        setLikelist(likelist.filter((item)=>item.id !== id))
    }
    // 찜항목 확인
    const isInlikelist = (id) => {
        const findLike = likelist.find((item)=>item.id === id)
        if(findLike !== undefined){ return true; // id 존재시 false반환
        }else{
            return false;

        }
    }
    return(
        <LikelistContext.Provider value={{likelist,addLikeList,removeLikelist,isInlikelist
        }}>
            {children}
            
        </LikelistContext.Provider>
    )
}