import './EventPage.css';

export default function EventPage(){

    const events = [
    { id: 10, title: '봄 신상 [시럽 네일] 1+1 런칭 이벤트', date: '2026.03.01 ~ 03.15', status: '진행중' },
    { id: 9, title: '첫 구매 고객 무료 배송 쿠폰 증정', date: '상시 진행', status: '진행중' },
    { id: 8, title: '베스트 리뷰어 선정 (적립금 5,000원)', date: '2026.03.01 ~ 03.31', status: '진행중' },
    { id: 7, title: '[한정수량] 마그네틱 젤 네일 단독 특가', date: '2026.03.05 ~ 03.07', status: '마감임박' },
    { id: 6, title: '화이트데이 기념 핑크 매니큐어 컬렉션', date: '2026.03.10 ~ 03.14', status: '예정' },
    { id: 5, title: '카카오톡 채널 추가 시 10% 할인권', date: '상시 진행', status: '진행중' },
    { id: 4, title: '겨울 시즌 오프 - 최대 70% 세일', date: '2026.01.20 ~ 02.28', status: '종료' },
    { id: 3, title: '네일 파츠 & 스티커 전품목 9,900원 균일가', date: '2026.03.02 ~ 03.10', status: '진행중' },
    { id: 2, title: '전문가용 젤 램프 세트 증정 럭키드로우', date: '2026.02.15 ~ 02.25', status: '종료' },
    { id: 1, title: '유튜버 "네일퀸" 추천 컬러 세트 할인', date: '2026.03.01 ~ 03.12', status: '진행중' },
  ];


    return(

        <div className="event-container">
            <header className="mall-header">
                <h2>BANDI NAIL EVENT</h2>
                <p>당신의 손끝을 빛내줄 특별한 이벤트</p>
            </header>
            
            <table className="event-table">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>날짜</th>
                        <th>상태</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.id}>
                        <td>{event.id}</td>
                        <td className="event-title-cell">{event.title}</td>
                        <td className="date-cell">{event.date}</td>
                        <td>
                            {/* 동적 클래스 할당: ${event.status} 부분 */}
                             {/* event.status의 값(예: 'active', 'pending')에 따라 클래스 이름이 바뀜 */}
                            <span className={`status-badge ${event.status}`}>
                                {/* event가 있을 때만 status를 출력 : 이벤트 중이다. 아니다. */}
                            {event.status}
                            </span>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}