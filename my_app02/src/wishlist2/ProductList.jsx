// useContex는 공유한 데이터를 가져오는 훅
import { useContext } from "react";
// 내가만든 공유한 데이터를 저장한 저장소
import { wishlistContext } from '../wishlist2/WishlistContext';
import {Link} from 'react-router-dom'

// 임시로 사용할 상품 데이터
const products = [
{ id: 1, name: '노트북', price: 1500000 },
{ id: 2, name: '마우스', price: 30000 },
{ id: 3, name: '키보드', price: 80000 },
];

export default function ProductList(){
  //   공유한 데이터를 가져옴
  const {wishlist,addToWishlist,removeFromWishlist,isInWishlist} = useContext(wishlistContext)
  console.log(wishlist)
  return(
    <div style={{padding:'20px'}}>
       <h2>상품 목록</h2>
       <ul>
           {products.map((item) =>(
              <li key={item.id} style={{marginBottom:'10px'}}>
                {item.name} - {item.price.toLocaleString()}원
                <button type="button" 
                onClick={()=>
                    // 현재 상품이 찜 목록에 존재하는지 확인, 존재:true, 아니면:false
                    isInWishlist(item.id)? removeFromWishlist(item.id):addToWishlist(item)
                }>
                    {/*버튼 안의 문구 : 선택❤, 해제🤍  */}
                    {isInWishlist(item.id)?'❤ 찜 해제':'🤍찜하기'}
                </button>
              </li>
           ))}
       </ul>
        <p>현재 찜한 상품 수 : {wishlist.length}</p>
    </div>
  )

}