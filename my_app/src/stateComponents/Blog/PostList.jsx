// 자식은 Ui
export default function PostList(props){
    return(
        <>
           <div className='blog'>
            {/* 블로그제목, 블로그 좋아요 */}
            {props.posts.map((post,index)=>(
              // 글목록 부분
                <div className='list' key={index}>
                    <h4 onClick={()=>{props.setModalOpen(true); props.setSeletedIndex(index);}}>
                        {post}<span style={{cursor:'pointer'}}
                        onClick={(e)=> e.stopPropagation();
                            // 버블링 해결 메소드 e.stoppropagation>
                        props.addLikes(index)}>
                        👍{props.likes[index]}</span></h4>
                    <p>11월 1일 발생</p>
                    <button type='button' onClick={()=>props.delPost(index)}>삭제</button>
                    {/* 자식 modal데이터 보내기 */}
                    {/* 글제목, 글index, 모달 닫기 함수, color */}
                    {modalOpen && <modal color={'lightgray'}
                    title={posts}
                    setPosts={setPosts}
                    index={selectedIndex}
                    onClose={()=>setModalOpen(false)}
                    />}
                </div>
            ))}
            </div>
        </>
    )

}

