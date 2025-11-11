import { useContext } from "react";
import { wishlistContext } from "./WishListContext";
import { useState } from "react";

// 찜한 목록 출력되는 함수
export default function WishlistPage(){
    // 공유데이터 가져오기
    const {wishlist,removeFromWishlist,clearWishlist}=useContext(wishlistContext)

    return(
        <div style={{padding:'20px'}}>
            <h2>찜한 상품 목록</h2>
            {/* 찜한 상품이 없으면 메세지 출력 : 찜한 상품이 없습니다. */}
            <button type="button" onClick={clearWishlist}>전체삭제</button>
            {wishlist.length === 0?
            <p>찜한 상품이 없습니다.</p>:(
                <ul>
                    {wishlist.map((item)=>(
                        <li key={item.id} style={{marginBottom:'10px'}}>
                            {item.name}-{item.price.toLocaleString()}
                            <button type="button" onClick={()=>removeFromWishlist(item.id)}>삭제</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}