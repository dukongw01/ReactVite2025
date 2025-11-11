import { useContext } from "react";
import WishlistProvider from '../wishlist2/WishlistContext'

// 찜한 목록 출력되는 함수
export default function WishlistPage(){
//  공유 데이터 가져오기
   const {wishlist,removeFromWishlist}=useContext(wishlistContext)
   console.log(wishlist)
   return(
     <div style={{padding:'20px'}}>
        <h2>찜한 상품 목록</h2>
        {/* 찜한 상품이 없으면 메시지 출력 : 찜한 상품이 없습니다. */}
        {wishlist.length === 0?
          <p>찜 한 상품이 없습니다.</p>:(
            <ul>
                {wishlist.map((item) => (
                    <li key={item.id} style={{marginBottom:'10px'}}>
                        {item.name}-{item.price.toLocaleString()}
                        <button type="button" onClick={()=>removeFromWishlist(item.id)}>삭제</button>
                    </li>
                ))}
            </ul>
          )
        }
     </div>
   )
}