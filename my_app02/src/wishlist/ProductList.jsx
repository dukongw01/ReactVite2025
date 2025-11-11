// 공유한 데이터를 가져오는 Hook
import { useContext } from "react";
// 내가 만든 wishlist (공유 데이터) 저장소
import { wishlistContext } from "./WishListContext";
import { Link } from 'react-router-dom';

// 임시로 사용할 상품 데이터
const product = [
        { id:1, name:'Alice', price:12000 },
        { id:2, name:'Bob', price:1357000 },
        { id:3, name:'Charlie', price:18900 },
        { id:4, name:'David', price:1300 }
    ];


export default function ProductList(){
    // 공유한 데이터를 가져오기
    const {wishlist,addToWishlist,removeFromWishlist,isInWishlist}=useContext(wishlistContext)
    
    return(
        <div style={{padding:'20px'}}>
            <h2>상품 목록</h2>
            <ul>
                {product.map((item)=>(
                    <li key={item.id} style={{marginBottom:'10px'}}>
                        {item.name}-{item.price.toLocaleString()}원
                        <button type="button"
                        onClick={()=>
                            // 현재 상품이 찜 목록에 존재하는지 확인, 존재하면 true 아니면 false
                            isInWishlist(item.id) ? removeFromWishlist(item.id):addToWishlist(item)}>
                                {/* 버튼 안에도 문구를 넣고 싶다 */}
                                {/* 문구 : 선택❤ 해제🤍 */}
                                {isInWishlist(item.id) ? '❤ 찜해제':'🤍 찜하기'}
                            </button>
                    </li>
                ))}
            </ul>
            <p>현재 찜한 상품 수 : {wishlist.length}</p>
        </div>
    )
}