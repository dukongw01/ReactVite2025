import Header from "../components/Header";
import WhsiContent from '../wishlist/WishListContext';
import Home from "../pages/Home/Home";
import { useState } from "react";

export default function WishListPage(){
    // 위에 불러온 Home에 입력된 'https://dummyjson.com/recipes/meal-type/Dinner'에서 아이템을 불러오고 싶음
    const [WishList]=useState([
        {item,index},
    ]);

    // 찜목록
    const[Like, setLike]=useState([]);
    // 찜목록에 담겼는지 보기
    const[showLike, setShowLike]=useState(false);

    const addLikeCart = (WishList) => {
        let LikeCopy = [...Like]
        
        const index = Like.findIndex( (item) => item.id === WishList.id )
        if (index !== -1){
            // 수량 증가
            LikeCopy[index].quantity += 1;
        }else{
            LikeCopy.push({id:WishList.id,
                name:WishList.name,
                quantity:1
            })
        }
        setLike(LikeCopy);
        console.log('장바구니 담김 확인'+LikeCopy)
    }

    

}