import React, { useState } from 'react';
import './Event.css';


// 더미 데이터
const EVENT_DATA = [
  {
    id: 'notice-1',
    tag: 'notice',
    title: '2025 Lock & Lock 이벤트 운영 안내',
    status: 'on',
    period: '상시',
    isNotice: true,
  },
  {
    id: 12,
    tag: 'event',
    title: '반찬통 3종 구매 시 보관용기 증정',
    status: 'on',
    period: '2025.06.01 ~ 06.30',
    isNotice: false,
  },
  {
    id: 11,
    tag: 'event',
    title: '스테인리스 접시 세트 20% 할인 기획전',
    status: 'on',
    period: '2025.06.10 ~ 06.25',
    isNotice: false,
  },
  {
    id: 10,
    tag: 'event',
    title: '신상 보관용기 출시 기념 선착순 할인',
    status: 'soon',
    period: '2025.07.01 ~ 07.15',
    isNotice: false,
  },
  {
    id: 9,
    tag: 'event',
    title: '주방 칼 구매 고객 도마 증정 이벤트',
    status: 'on',
    period: '2025.06.05 ~ 06.30',
    isNotice: false,
  },
  {
    id: 8,
    tag: 'event',
    title: '반찬통 리뷰 이벤트 — 스타벅스 기프티콘 증정',
    status: 'on',
    period: '2025.06.01 ~ 06.30',
    isNotice: false,
  },
  {
    id: 7,
    tag: 'event',
    title: '접시 세트 SNS 공유 시 10% 추가 할인',
    status: 'end',
    period: '2025.05.01 ~ 05.31',
    isNotice: false,
  },
  {
    id: 6,
    tag: 'event',
    title: '밀폐 보관용기 패밀리 세트 특가 기획전',
    status: 'end',
    period: '2025.04.15 ~ 05.15',
    isNotice: false,
  },
  {
    id: 5,
    tag: 'event',
    title: '전통 식기 라인 론칭 기념 사은품 증정',
    status: 'end',
    period: '2025.03.01 ~ 03.31',
    isNotice: false,
  },
  {
    id: 4,
    tag: 'event',
    title: '반찬통 대용량 라인업 할인 & 적립 이벤트',
    status: 'end',
    period: '2025.02.14 ~ 03.14',
    isNotice: false,
  },
];


// 서브 컴포넌트: 태그
function Tag({ type }) {
  if (type === 'notice') return <span className="tag tag--notice">공지</span>;
  return <span className="tag tag--event">이벤트</span>;
}


// 서브 컴포넌트: 진행 상태 배지
function StatusBadge({ status }) {
  const map = {
    on:   { label: '진행중', className: 'status--on' },
    end:  { label: '종료',   className: 'status--end' },
    soon: { label: '예정',   className: 'status--soon' },
  };
  const { label, className } = map[status] ?? { label: status, className: '' };
  return <span className={`status-badge ${className}`}>{label}</span>;
}


// 서브 컴포넌트: 행 하나
function EventRow({ item }) {
  return (
    <tr className={item.isNotice ? 'is-notice' : ''}>
      <td className="td-title">
        <Tag type={item.tag} />
        <span className="title-text">{item.title}</span>
      </td>
      <td><StatusBadge status={item.status} /></td>
      <td className="td-date">{item.period}</td>
    </tr>
  );
}


// 서브 컴포넌트: 페이지네이션
function Pager({ current, total, onChange }) {
  return (
    <div className="event-pager">
      <button className="event-pager__btn"
        onClick={() => onChange(Math.max(1, current - 1))}
        aria-label="이전 페이지">&lt;
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
        <button key={page}
          className={`event-pager__btn${current === page ? ' is-active' : ''}`}
          onClick={() => onChange(page)}
          aria-label={`${page}페이지`}>{page}
        </button>
      ))}
      <button className="event-pager__btn"
        onClick={() => onChange(Math.min(total, current + 1))}
        aria-label="다음 페이지">&gt;
      </button>
    </div>
  );
}


// 메인 컴포넌트: Event
const PAGE_SIZE = 10;

export default function Event() {
  const [currentPage, setCurrentPage] = useState(1);

  // 공지는 항상 상단 고정, 나머지는 페이지 처리
  const notices = EVENT_DATA.filter((item) => item.isNotice);
  const general = EVENT_DATA.filter((item) => !item.isNotice);

  const totalPages = Math.ceil(general.length / PAGE_SIZE);
  const pagedGeneral = general.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const displayData = [...notices, ...pagedGeneral];

  return (
    <div className="event-wrap">
      {/* 헤더 */}
      <div className="event-header">
        <h2>Lock &amp; Lock 공식 이벤트</h2>
      </div>

      {/* 테이블 */}
      <table className="event-table">
        <colgroup>
          <col className="col-title" />
          <col className="col-status" />
          <col className="col-period" />
        </colgroup>
        <thead>
          <tr>
            <th>제목</th>
            <th>진행 상태</th>
            <th>이벤트 기간</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((item) => (
            <EventRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <Pager current={currentPage} total={totalPages} onChange={setCurrentPage} />
      )}
    </div>
  );
}