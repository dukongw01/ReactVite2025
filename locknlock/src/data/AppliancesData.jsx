// 가전 데이터 페이지

export default function Appliances(){

    const Appliances_Products = [
        // 순번, 상품코드, 이름, 카테고리, 원가, 할인가, 평점, 리뷰, 썸네일, 베스트와 신상품 여부
        {id:1, sku:'EJF294IVY', name:'레인지프라이어', category:'Appliances', basePrice:189000, discountRate:15, rating:4.8, reviewCount:1240, thumbnail:'EJF294IVY', isBest:true, isNew:false},
        {id:2, sku:'EJK256BLK', name:'이지 클린 무선 유리 전기포트 1.8L', category:'Appliances', basePrice:49800, discountRate:10, rating:4.5, reviewCount:856, thumbnail:'EJK256BLK', isBest:false, isNew:false},
        {id:3, sku:'EJR989WHT', name:'프레쉬 스텐 진공 쌀냉장고 20kg', category:'Appliances', basePrice:245000, discountRate:20, rating:4.9, reviewCount:320, thumbnail:'EJR989WHT', isBest:true, isNew:false},
        {id:4, sku:'EJT336', name:'올 뉴 음식물쓰레기냉장고 5L 플러스', category:'Appliances', basePrice:129000, discountRate:5, rating:4.7, reviewCount:2100, thumbnail:'EJT336', isBest:false, isNew:true},
        {id:5, sku:'EJT341WHT', name:'발효숙성 김치냉장고 50L', category:'Appliances', basePrice:389000, discountRate:12, rating:4.6, reviewCount:150, thumbnail:'EJT341WHT', isBest:false, isNew:true},
        {id:6, sku:'EJV611WHT', name:'제로웨이스트 음식물처리기 3.5L', category:'Appliances', basePrice:590000, discountRate:25, rating:4.8, reviewCount:450, thumbnail:'EJV611WHT', isBest:false, isNew:false}
    ]

    return Appliances_Products //App.jsx에 데이터 내보내기

}