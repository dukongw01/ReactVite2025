// 조리 데이터 페이지

export default function Cooking(){

    const Cooking_Products=[
        // 순번, 상품코드, 이름, 카테고리, 원가, 할인가, 평점, 리뷰, 썸네일, 베스트와 신상품 여부
        {id:1, sku:'CKS303', name:'야채 슬라이서', category:'Cooking', basePrice:15900, discountRate:10, rating:4.5, reviewCount:420, thumbnail:'CKS303', isBest:true, isNew:false},
        {id:2, sku:'CKS002MIT', name:'3in1 강판', category:'Cooking', basePrice:12000, discountRate:0, rating:4.2, reviewCount:156, thumbnail:'CKS002MIT', isBest:false, isNew:false},
        {id:3, sku:'CSC304', name:'투웨이 대나무 양면 도마', category:'Cooking', basePrice:29800, discountRate:15, rating:4.8, reviewCount:890, thumbnail:'CSC304', isBest:false, isNew:false},
        {id:4, sku:'F00098', name:'컬러풀 주방가위', category:'Cooking', basePrice:9900, discountRate:5, rating:4.6, reviewCount:1205, thumbnail:'F00098', isBest:true, isNew:false},
        {id:5, sku:'EJE213WHT', name:'계란찜기', category:'Cooking', basePrice:24500, discountRate:20, rating:4.7, reviewCount:340, thumbnail:'EJE213WHT', isBest:false, isNew:false},
        {id:6, sku:'CKT345', name:'데코 스텐 요리스푼', category:'Cooking', basePrice:11000, discountRate:0, rating:4.9, reviewCount:88, thumbnail:'CKT345', isBest:false, isNew:false},
        {id:7, sku:'CKT346', name:'데코 스텐 와이드 뒤집개', category:'Cooking', basePrice:12500, discountRate:0, rating:4.8, reviewCount:112, thumbnail:'CKT346', isBest:false, isNew:true},
        {id:8, sku:'CKT347', name:'데코 스텐 집게', category:'Cooking', basePrice:10500, discountRate:0, rating:4.9, reviewCount:230, thumbnail:'CKT347', isBest:false, isNew:true},
        {id:9, sku:'CKK801S01', name:'분리형 칼블럭 세트', category:'Cooking', basePrice:89000, discountRate:25, rating:4.7, reviewCount:45, thumbnail:'CKK801S01', isBest:false, isNew:true},
        {id:10, sku:'CAW2822', name:'마하 IH 웍 28CM', category:'Cooking', basePrice:54000, discountRate:10, rating:4.6, reviewCount:560, thumbnail:'CAW2822', isBest:false, isNew:false},
        {id:11, sku:'GTH3244IH', name:'살롱 양수 냄비 IH 24CM', category:'Cooking', basePrice:78000, discountRate:18, rating:4.8, reviewCount:210, thumbnail:'GTH3244IH', isBest:true, isNew:false},
        {id:12, sku:'GTH3181IH', name:'살롱 편수 냄비 IH 18CM', category:'Cooking', basePrice:62000, discountRate:15, rating:4.7, reviewCount:142, thumbnail:'GTH3181IH', isBest:false, isNew:false},
        {id:13, sku:'CSU2202', name:'슈트 멜로우 법랑 양수 20CM', category:'Cooking', basePrice:45000, discountRate:10, rating:4.5, reviewCount:89, thumbnail:'CSU2202', isBest:false, isNew:false},
        {id:14, sku:'CSU2181', name:'슈트 멜로우 법랑 편수 18CM', category:'Cooking', basePrice:39800, discountRate:10, rating:4.4, reviewCount:67, thumbnail:'CSU2181', isBest:false, isNew:false},
        {id:15, sku:'CSC513', name:'벨리 향균 도마', category:'Cooking', basePrice:18500, discountRate:5, rating:4.8, reviewCount:310, thumbnail:'CSC513', isBest:false, isNew:false},
        {id:16, sku:'CAF3058IH', name:'하드앤라이트 IH 프로 프라이팬 30CM', category:'Cooking', basePrice:42000, discountRate:20, rating:4.9, reviewCount:1540, thumbnail:'CAF3058IH', isBest:true, isNew:false},
        {id:17, sku:'CAF2655IH', name:'슈트브릭 IH 프라이팬 26CM', category:'Cooking', basePrice:38000, discountRate:12, rating:4.7, reviewCount:420, thumbnail:'CAF2655IH', isBest:false, isNew:false}
    ]

    return Cooking_Products //App.jsx에 데이터 내보내기

}