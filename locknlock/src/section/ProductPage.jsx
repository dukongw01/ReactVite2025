import { useEffect, useState } from "react"


export default function ProductPage({AllData}){


    //장바구니(카트)
    const [prodList, setProdList] = useState(()=>{
        const listsave = localStorage.getItem('prodList');
        return listsave ? JSON.parse(listsave):[];
    });
    
    //장바구니 목록 - 상태 변동 저장
    useEffect(()=>{
        localStorage.setItem('prodList',JSON.stringify(prodList));
        window.dispatchEvent(new Event('prodListUpdate'));
    },[prodList]);


    //장바구니 버튼 클릭 핸들러
    const cartHandle = (item) => {
        setProdList(prevCart => {
            const findProd = prevCart.find(pItem => pItem.sku === item.sku); // id 대신 sku로 비교 (카테고리마다 id 중복)
            if (!findProd) {
                alert(`${item.name} 장바구니에 담겼습니다.`);
                return [...prevCart, { ...item, count: 1 }];
            } else {
                alert(`${item.name} 수량이 1개 추가됐습니다.`);
                return prevCart.map(pItem =>
                    pItem.sku === item.sku ? { ...pItem, count: pItem.count + 1 } : pItem
                );
            }
        });
    };


    // 상품 필터
    const filterTap = categoryFilter === '' ? flatAllProd : flatAllProd.filter(item => item.category === categoryFilter);

    useEffect(() => {
        console.log('현재 카테고리:', categoryFilter);
        console.log('필터 결과:', filterTap);
    }, [categoryFilter]);


    return(
        <div className="ProductList-container">
            <div className="Prod-top-container">
            </div>
            <div className="Prod-list-container">
                {filterTap.map(item => (
                    <div key={item.sku} className="Prod-card">
                        <p>{item.name}</p>
                        <p>{(item.basePrice * (1 - item.discountRate / 100)).toLocaleString()}원</p>
                        <button onClick={() => cartHandle(item)}>장바구니</button>
                    </div>
                ))}
            </div>
        </div>
    )
}