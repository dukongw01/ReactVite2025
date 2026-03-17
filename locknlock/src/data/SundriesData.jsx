// 잡화 데이터 페이지

export default function Sundries(){

    const Sundries_Products=[
        // 순번, 상품코드, 이름, 카테고리, 원가, 할인가, 평점, 리뷰, 썸네일, 베스트와 신상품 여부
        { id: 1, sku: 'ETM555', name: '빨래 건조대 블랙 더블', category: 'Sundries', basePrice: 25000, discountRate: 10, rating: 4.8, reviewCount: 120, thumbnail: 'ETM555', isBest: true, isNew: false },
        { id: 2, sku: 'ETM566', name: '코지 욕실화', category: 'Sundries', basePrice: 12000, discountRate: 5, rating: 4.5, reviewCount: 85, thumbnail: 'ETM566', isBest: false, isNew: true },
        { id: 3, sku: 'ETM915', name: '테이프 클리너 리필팩', category: 'Sundries', basePrice: 8500, discountRate: 0, rating: 4.9, reviewCount: 210, thumbnail: 'ETM915', isBest: true, isNew: false },
        { id: 4, sku: 'ETM916GRN', name: '욕실 브러쉬 세트', category: 'Sundries', basePrice: 15000, discountRate: 15, rating: 4.2, reviewCount: 45, thumbnail: 'ETM916GRN', isBest: false, isNew: false },
        { id: 5, sku: 'HPP267S2', name: '아이스볼 메이커 세트', category: 'Sundries', basePrice: 19800, discountRate: 20, rating: 4.7, reviewCount: 62, thumbnail: 'HPP267S2', isBest: false, isNew: true }
    ]

    return Sundries_Products //App.jsx에 데이터 내보내기

}