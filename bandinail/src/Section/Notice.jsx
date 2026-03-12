import './Notice.css';

// ai로 생성한 페이지
export default function Notice() {
  const notices = [
    { id: '공지', title: '[필독] 반디네일 이용 약관 및 개인정보 처리방침 변경 안내', date: '2026.03.01', writer: '관리자', views: 1240, isPinned: true },
    { id: '공지', title: '배송 및 교환/반품 안내 (2026 업데이트)', date: '2026.01.01', writer: '관리자', views: 5620, isPinned: true },
    { id: 6, title: '3월 카드사 무이자 할부 혜택 안내', date: '2026.03.05', writer: '운영팀', views: 125, isPinned: false },
    { id: 5, title: '시스템 정기 점검에 따른 서비스 일시 중단 안내 (3/15)', date: '2026.03.04', writer: '기술팀', views: 89, isPinned: false },
    { id: 4, title: '신규 가입 웰컴 포인트 지급 방식 변경 알림', date: '2026.03.02', writer: '마케팅', views: 245, isPinned: false },
    { id: 3, title: '리뷰 적립금 지급 누락 건 조치 완료 안내', date: '2026.02.28', writer: '운영팀', views: 312, isPinned: false },
    { id: 2, title: '[당첨자 발표] 2월 베스트 리뷰어 선정 결과', date: '2026.02.25', writer: '이벤트팀', views: 890, isPinned: false },
    { id: 1, title: '네일 전문가용 에듀케이션 세미나 일정 안내', date: '2026.02.20', writer: '교육팀', views: 156, isPinned: false },
  ];

  return (
    <div className="notice-container">
      <header className="mall-header">
        <h2>공지사항</h2>
        <p>반디네일의 새로운 소식과 안내사항을 확인하세요</p>
      </header>

      <table className="notice-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>날짜</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice, index) => (
            <tr key={index} className={notice.isPinned ? 'pinned-row' : ''}>
              <td className="id-cell">
                {notice.isPinned ? (
                  <span className="pin-badge">공지</span>
                ) : (
                  notice.id
                )}
              </td>
              <td className="notice-title-cell">
                {notice.title}
              </td>
              <td className="date-cell">{notice.date}</td>
              <td className="view-cell">{notice.views.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}