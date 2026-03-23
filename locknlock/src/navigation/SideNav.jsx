export default function SideNav({AllProdList}){

    // 프롭스 데이터
    // const [ Appliances_Products, Cooking_Products, Kitchen_Products,
    //     Outdoor_Products, Storage_Products, Sundries_Products
    // ] = AllProdList;

    // 데이터 단일 배열
    const flatAllProd = AllProdList.flat();

 
    // 상품 카테고리 - 탭 나누기 등 데이터 필터
    // 카테고리 구분
    const [cateFilter, setCateFilter] = useState();
    // 탭 나누기 필터
    const TapFilter = (num)=>{
        if(num===1){setCateFilter('Appliances')}
        else if(num===2){setCateFilter('Cooking')}
        else if(num===3){setCateFilter('Kitchen')}
        else if(num===4){setCateFilter('Outdoor')}
        else if(num===5){setCateFilter('Storage')}
        else if(num===6){setCateFilter('Sundries')}
        else{setCateFilter('');}
    };


    // 상품 필터
    const filterTap = cateFilter === '' ? flatAllProd : flatAllProd.filter(item => item.category === cateFilter);

    useEffect(() => {
        console.log('현재 카테고리:', cateFilter);
        console.log('필터 결과:', filterTap);
    }, [cateFilter]);






        return(
        
        <div className="SideNav-container">
                <ul>
                    <li><button onClick={() => TapFilter(0)}>베스트</button></li>
                    <li><button onClick={() => TapFilter(1)}>가전</button></li>
                    <li><button onClick={() => TapFilter(2)}>조리</button></li>
                    <li><button onClick={() => TapFilter(3)}>주방</button></li>
                    <li><button onClick={() => TapFilter(4)}>야외</button></li>
                    <li><button onClick={() => TapFilter(5)}>보관</button></li>
                    <li><button onClick={() => TapFilter(6)}>잡화</button></li>
                </ul>
            </div>
    )


}