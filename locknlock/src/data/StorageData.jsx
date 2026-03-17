// 보관 데이터 페이지

export default function Storage(){

    const Storage_Products=[
        // 순번, 상품코드, 이름, 카테고리, 원가, 할인가, 평점, 리뷰, 썸네일, 베스트와 신상품 여부
        {id:1, sku:'HTE909', name:'이지오픈 양념통', category:'Storage', basePrice:8500, discountRate:10, rating:4.8, reviewCount:1240, thumbnail:'HTE909', isBest:false, isNew:false},
        {id:2, sku:'LWP332', name:'스마트킵 프레쉬 이중지퍼백 XL', category:'Storage', basePrice:5900, discountRate:0, rating:4.7, reviewCount:850, thumbnail:'LWP332', isBest:false, isNew:false},
        {id:3, sku:'LBF551', name:'스누피 사각 밀폐용기', category:'Storage', basePrice:12800, discountRate:15, rating:4.9, reviewCount:620, thumbnail:'LBF551', isBest:false, isNew:false},
        {id:4, sku:'LVC403', name:'마에스트로 진공용기 직사각', category:'Storage', basePrice:24500, discountRate:20, rating:4.6, reviewCount:180, thumbnail:'LVC403', isBest:false, isNew:false},
        {id:5, sku:'LVC703', name:'마에스트로 진공백 L', category:'Storage', basePrice:15000, discountRate:10, rating:4.5, reviewCount:95, thumbnail:'LVC703', isBest:false, isNew:false},
        {id:6, sku:'HPL888B', name:'프레쉬 김치통 투핸들 11L', category:'Storage', basePrice:21900, discountRate:12, rating:4.8, reviewCount:2100, thumbnail:'HPL888B', isBest:false, isNew:false},
        {id:7, sku:'HPL822RP', name:'발효숙성용기 4L', category:'Storage', basePrice:14800, discountRate:5, rating:4.7, reviewCount:430, thumbnail:'HPL822RP', isBest:false, isNew:false},
        {id:8, sku:'LWP522S3', name:'실리콘 지퍼백 3P 세트', category:'Storage', basePrice:28900, discountRate:15, rating:4.9, reviewCount:310, thumbnail:'LWP522S3', isBest:false, isNew:false},
        {id:9, sku:'LCB213S01', name:' 2단 간편캡 도시락 밴드 세트', category:'Storage', basePrice:18500, discountRate:10, rating:4.6, reviewCount:156, thumbnail:'LCB213S01', isBest:false, isNew:false},
        {id:10, sku:'LBF450', name:' 비스프리 모듈러 정사각 260ML', category:'Storage', basePrice:5400, discountRate:0, rating:4.8, reviewCount:3420, thumbnail:'LBF450', isBest:true, isNew:false},
        {id:11, sku:'HFL106S12', name:'프리저핏 냉동실 정리용기', category:'Storage', basePrice:32000, discountRate:25, rating:4.7, reviewCount:890, thumbnail:'HFL106S12', isBest:false, isNew:true},
        {id:12, sku:'LNG501S3', name:'밥용기 LITE 세트', category:'Storage', basePrice:12900, discountRate:10, rating:4.8, reviewCount:1540, thumbnail:'LNG501S3', isBest:false, isNew:false},
        {id:13, sku:'LBG205S9', name:'락앤락글라스 탑클라스', category:'Storage', basePrice:58000, discountRate:20, rating:4.9, reviewCount:210, thumbnail:'LBG205S9', isBest:false, isNew:true},
        {id:14, sku:'LST830B', name:'스텐 김치통 3.8L', category:'Storage', basePrice:34500, discountRate:15, rating:4.7, reviewCount:115, thumbnail:'LST830B', isBest:false, isNew:false},
        {id:15, sku:'LBF401AS6', name:'올 트라이탄 밀폐용기 SET', category:'Storage', basePrice:45000, discountRate:18, rating:4.8, reviewCount:230, thumbnail:'LBF401AS6', isBest:false, isNew:false},
        {id:16, sku:'LLG512S4', name:'리틀럽 디어 이유식용기 세트', category:'Storage', basePrice:27500, discountRate:10, rating:4.9, reviewCount:560, thumbnail:'LLG512S4', isBest:true, isNew:false},
        {id:17, sku:'SLB302S2', name:'바로 한끼 도자기 밥용기', category:'Storage', basePrice:19800, discountRate:5, rating:4.8, reviewCount:870, thumbnail:'SLB302S2', isBest:false, isNew:false}
    ]

    return Storage_Products //App.jsx에 데이터 내보내기

}