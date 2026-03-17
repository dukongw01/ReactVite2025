// 야외 데이터 페이지

export default function Outdoor(){

    const Outdoor_Products=[
        // 순번, 상품코드, 이름, 카테고리, 원가, 할인가, 평점, 리뷰, 썸네일, 베스트와 신상품 여부
        {id:1, sku:'HWB879', name:'타이벡 에어락 쿨러백', category:'Outdoor', basePrice:61300, discountRate:15, rating:4.7, reviewCount:320, thumbnail:'HWB879', isBest:false, isNew:false},
        {id:2, sku:'LHC3270', name:'데일리 슬림핏 원터치 텀블러', category:'Outdoor', basePrice:24000, discountRate:10, rating:4.8, reviewCount:1540, thumbnail:'LHC3270', isBest:false, isNew:false},
        {id:3, sku:'LHC4263', name:'메트로 밀폐 머그 텀블러', category:'Outdoor', basePrice:32000, discountRate:20, rating:4.9, reviewCount:860, thumbnail:'LHC4263', isBest:false, isNew:false},
        {id:4, sku:'ABF885', name:'스쿨핏 스위치캡 미니 보틀', category:'Outdoor', basePrice:12500, discountRate:5, rating:4.6, reviewCount:410, thumbnail:'ABF885', isBest:false, isNew:true},
        {id:5, sku:'LHC4357', name:'메트로 카페 텀블러', category:'Outdoor', basePrice:29500, discountRate:12, rating:4.7, reviewCount:230, thumbnail:'LHC4357', isBest:false, isNew:false},
        {id:6, sku:'LHC8045S', name:'리틀럽 푸드자', category:'Outdoor', basePrice:35000, discountRate:15, rating:4.8, reviewCount:125, thumbnail:'LHC8045S', isBest:false, isNew:true},
    ]

    return Outdoor_Products //App.jsx에 데이터 내보내기

}