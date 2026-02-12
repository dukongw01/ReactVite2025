import { useEffect, useState } from "react";
import NailFilter from "../Detail/NailFilter";

export default function ShopPage({nailType}){

    const [itemList, setItemList] = useState(()=>{
        const saved = localStorage.getItem('itemList');
        return saved? JSON.parse(saved):[];
        console.log("item자료",saved);
    });

    //item 바뀔때마다 localStorage에 저장
    useEffect(()=>{
        localStorage.setItem('itemList', JSON.stringify(itemList));
    },[itemList]);

    //cart 버튼 클릭
    const cartbtn = (item) => {
        //얕은 복사
        const cartbtnCopy = [...itemList];
        const findItem = itemList.find((cartItem)=>cartItem.id === item.id);
        // find 결과가 존재하면 아래처럼 출력
        // {id:1, type:'color', name:'반디젤BF101', title:'Thumbnail01', price:50000}
        // find 결과가 존재하지 않으면 undefined
        // findItem === undefined 장바구니에 같은 상품이 없다
        if(findItem === undefined){
            cartbtnCopy.push({...item, count:1});
            alert(`${item.name} 장바구니에 담김`)
        }else{
            //같은 상품이 존재시
            alert(`${item.name} 상품이 이미 담겼습니다.`)
            findItem.count += 1;
        }
        setItemList(cartbtnCopy)
    }

    const findItemFilter = nailType.filter((item)=>item.type === nailType);
    const itemTap = nailType.length === 0 ? nailType : findItemFilter;


    return(
        <div className="Main-container">
            {/* 상단 메뉴 탭 필터 */}
            <div className="Tap-filer">
                <h3>그날의 기분을 내 손톱 위에</h3>
                <NailFilter nailType/>
            </div>
            {/* 중앙 상품 변화 */}
            <div className="Item-box">
                <></>
            </div>
        </div>
    )
}