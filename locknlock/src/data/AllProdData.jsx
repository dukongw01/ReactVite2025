export default function AllProdData(){

    // 가전 데이터
    // 순번, 상품코드, 이름, 카테고리, 원가, 할인가, 평점, 리뷰, 썸네일, 베스트와 신상품 여부
    const Appliances_Products = [
        {id:1, sku:'EJF294IVY', name:'레인지프라이어', category:'Appliances', basePrice:189000, discountRate:15, rating:4.8, reviewCount:1240, thumbnail:'EJF294IVY', isBest:true, isNew:false},
        {id:2, sku:'EJK256BLK', name:'이지 클린 무선 유리 전기포트 1.8L', category:'Appliances', basePrice:49800, discountRate:10, rating:4.5, reviewCount:856, thumbnail:'EJK256BLK', isBest:false, isNew:false},
        {id:3, sku:'EJR989WHT', name:'프레쉬 스텐 진공 쌀냉장고 20kg', category:'Appliances', basePrice:245000, discountRate:20, rating:4.9, reviewCount:320, thumbnail:'EJR989WHT', isBest:true, isNew:false},
        {id:4, sku:'EJT336', name:'올 뉴 음식물쓰레기냉장고 5L 플러스', category:'Appliances', basePrice:129000, discountRate:5, rating:4.7, reviewCount:2100, thumbnail:'EJT336', isBest:false, isNew:true},
        {id:5, sku:'EJT341WHT', name:'발효숙성 김치냉장고 50L', category:'Appliances', basePrice:389000, discountRate:12, rating:4.6, reviewCount:150, thumbnail:'EJT341WHT', isBest:false, isNew:true},
        {id:6, sku:'EJV611WHT', name:'제로웨이스트 음식물처리기 3.5L', category:'Appliances', basePrice:590000, discountRate:25, rating:4.8, reviewCount:450, thumbnail:'EJV611WHT', isBest:false, isNew:false}
    ];

    // 조리 데이터
    const Cooking_Products=[
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
    ];

    // 주방 데이터
    const Kitchen_Products=[
        {id:1, sku:'ETM851', name:'데일리 고무장갑(걸이형)', category:'Kitchen', basePrice:3500, discountRate:0, rating:4.9, reviewCount:4520, thumbnail:'ETM851', isBest:false, isNew:false},
        {id:2, sku:'ETM113', name:'물병 전용 세척솔', category:'Kitchen', basePrice:2800, discountRate:5, rating:4.7, reviewCount:890, thumbnail:'ETM113', isBest:false, isNew:false},
        {id:3, sku:'ETM154', name:'위생 망사수세미', category:'Kitchen', basePrice:4500, discountRate:10, rating:4.8, reviewCount:1240, thumbnail:'ETM154', isBest:false, isNew:false},
        {id:4, sku:'TLL521', name:'데일리 드롭 머그2P', category:'Kitchen', basePrice:15900, discountRate:15, rating:4.6, reviewCount:310, thumbnail:'TLL521', isBest:false, isNew:true},
        {id:5, sku:'ABF737', name:'비스프리 손잡이 물병', category:'Kitchen', basePrice:8900, discountRate:10, rating:4.7, reviewCount:2150, thumbnail:'ABF737', isBest:true, isNew:false},
        {id:6, sku:'LDB500BR', name:'음식물 쓰레기통 3L', category:'Kitchen', basePrice:18500, discountRate:20, rating:4.5, reviewCount:670, thumbnail:'LDB500BR', isBest:false, isNew:false},
        {id:7, sku:'HPB120SN', name:'용기전용 세척솔 2P 세트', category:'Kitchen', basePrice:5400, discountRate:5, rating:4.8, reviewCount:420, thumbnail:'HPB120SN', isBest:false, isNew:false},
    ];

    // 야외 데이터
    const Outdoor_Products=[
        {id:1, sku:'HWB879', name:'타이벡 에어락 쿨러백', category:'Outdoor', basePrice:61300, discountRate:15, rating:4.7, reviewCount:320, thumbnail:'HWB879', isBest:false, isNew:false},
        {id:2, sku:'LHC3270', name:'데일리 슬림핏 원터치 텀블러', category:'Outdoor', basePrice:24000, discountRate:10, rating:4.8, reviewCount:1540, thumbnail:'LHC3270', isBest:true, isNew:false},
        {id:3, sku:'LHC4263', name:'메트로 밀폐 머그 텀블러', category:'Outdoor', basePrice:32000, discountRate:20, rating:4.9, reviewCount:860, thumbnail:'LHC4263', isBest:false, isNew:false},
        {id:4, sku:'ABF885', name:'스쿨핏 스위치캡 미니 보틀', category:'Outdoor', basePrice:12500, discountRate:5, rating:4.6, reviewCount:410, thumbnail:'ABF885', isBest:false, isNew:true},
        {id:5, sku:'LHC4357', name:'메트로 카페 텀블러', category:'Outdoor', basePrice:29500, discountRate:12, rating:4.7, reviewCount:230, thumbnail:'LHC4357', isBest:false, isNew:false},
        {id:6, sku:'LHC8045S', name:'리틀럽 푸드자', category:'Outdoor', basePrice:35000, discountRate:15, rating:4.8, reviewCount:125, thumbnail:'LHC8045S', isBest:true, isNew:false},
    ];

    // 보관 데이터
    const Storage_Products=[
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
    ];

    // 잡화 데이터
    const Sundries_Products=[
        // 순번, 상품코드, 이름, 카테고리, 원가, 할인가, 평점, 리뷰, 썸네일, 베스트와 신상품 여부
        { id: 1, sku: 'ETM555', name: '빨래 건조대 블랙 더블', category: 'Sundries', basePrice: 25000, discountRate: 10, rating: 4.8, reviewCount: 120, thumbnail: 'ETM555', isBest: true, isNew: false },
        { id: 2, sku: 'ETM566', name: '코지 욕실화', category: 'Sundries', basePrice: 12000, discountRate: 5, rating: 4.5, reviewCount: 85, thumbnail: 'ETM566', isBest: false, isNew: true },
        { id: 3, sku: 'ETM915', name: '테이프 클리너 리필팩', category: 'Sundries', basePrice: 8500, discountRate: 0, rating: 4.9, reviewCount: 210, thumbnail: 'ETM915', isBest: true, isNew: false },
        { id: 4, sku: 'ETM916GRN', name: '욕실 브러쉬 세트', category: 'Sundries', basePrice: 15000, discountRate: 15, rating: 4.2, reviewCount: 45, thumbnail: 'ETM916GRN', isBest: false, isNew: false },
        { id: 5, sku: 'HPP267S2', name: '아이스볼 메이커 세트', category: 'Sundries', basePrice: 19800, discountRate: 20, rating: 4.7, reviewCount: 62, thumbnail: 'HPP267S2', isBest: false, isNew: true }
    ];

    // 통합
    const AllProductData=[
        Appliances_Products, Cooking_Products, Kitchen_Products,
        Outdoor_Products, Storage_Products, Sundries_Products
    ];

    // App.jsx로 내보내기
    return AllProductData;

}