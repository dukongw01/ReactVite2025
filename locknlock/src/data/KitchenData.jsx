// 주방 데이터 페이지

export default function Kitchen(){

    const Kitchen_Products=[
        // 순번, 상품코드, 이름, 카테고리, 원가, 할인가, 평점, 리뷰, 썸네일, 베스트와 신상품 여부
        {id:1, sku:'ETM851', name:'데일리 고무장갑(걸이형)', category:'Kitchen', basePrice:3500, discountRate:0, rating:4.9, reviewCount:4520, thumbnail:'ETM851', isBest:false, isNew:false},
        {id:2, sku:'ETM113', name:'물병 전용 세척솔', category:'Kitchen', basePrice:2800, discountRate:5, rating:4.7, reviewCount:890, thumbnail:'ETM113', isBest:false, isNew:false},
        {id:3, sku:'ETM154', name:'위생 망사수세미', category:'Kitchen', basePrice:4500, discountRate:10, rating:4.8, reviewCount:1240, thumbnail:'ETM154', isBest:false, isNew:false},
        {id:4, sku:'TLL521', name:'데일리 드롭 머그2P', category:'Kitchen', basePrice:15900, discountRate:15, rating:4.6, reviewCount:310, thumbnail:'TLL521', isBest:false, isNew:true},
        {id:5, sku:'ABF737', name:'비스프리 손잡이 물병', category:'Kitchen', basePrice:8900, discountRate:10, rating:4.7, reviewCount:2150, thumbnail:'ABF737', isBest:true, isNew:false},
        {id:6, sku:'LDB500BR', name:'음식물 쓰레기통 3L', category:'Kitchen', basePrice:18500, discountRate:20, rating:4.5, reviewCount:670, thumbnail:'LDB500BR', isBest:false, isNew:false},
        {id:7, sku:'HPB120SN', name:'용기전용 세척솔 2P 세트', category:'Kitchen', basePrice:5400, discountRate:5, rating:4.8, reviewCount:420, thumbnail:'HPB120SN', isBest:false, isNew:false},
    ]

    return Kitchen_Products //App.jsx에 데이터 내보내기

}