import React,{useState} from 'react'

export default function MovieReview(){

  //리뷰
  const [reviews, setReviews] = useState([ 
    {id:0, title:'인셉션', comment:'꿈속의 꿈! 최고였어요.', likes:0 },
    {id:1, title:'인터스텔라', comment:'음악이 웅장해요.', likes:0 },
  ]);
  
  //좋아요 식
  const addLikes = (index) => { 
    let reviewCopy=[...reviews]
    reviewCopy[index].likes ++;
    setReviews(reviewCopy)
  }

  const [inputValue01, setInputValue01] = useState('') //영화제목
  const [inputValue02, setInputValue02] = useState('') //한줄평

  let reviewBox = {id:reviews.length, title:inputValue01, comment:inputValue02, likes:0}
  //아래삽입
  .push()
  //위로 삽입
  .unShift()

  //삭제
  .splice((index),(1))
  
  // //제목식
  // const addInput01 = () => {
  //   if(inputValue01.trim()===''){ 
  //   return alert('찾는 걸 입력하세요.')
  //   }
  //   let input01Copy = [...inputValue01]
  // }

  // //평가식
  // const addInput02 = () => {
  //   if(inputValue02.trim()===''){ 
  //     return alert('평가를 입력하세요.')
  //   }
  //   let input02Copy = [...inputValue02]
  // }

  // //글삭제
  // const deleteRiview = (index) =>{
  //   let likesCopy = [...likes]
  //   let input01Copy = [...inputValue01]
  //   let input02Copy = [...inputValue02]
  //   reviewsCopy.splice(index,1)
  //   setReviews(reviewsCopy)
  // }

  

  return(
    <>
       <h3>👀MY 영화 리뷰</h3>
        {/* 영화 제목 입력 */}
        <input type="text" onChange={(e)=>
          {setInputValue01(e.target.value)}
        } value={inputValue01} placeholder='영화 제목'/>

        {/* 한줄평가 입력 */}
        <input type="text" onChange={(e)=>
          {setInputValue02(e.target.value)}
        } value={inputValue02} placeholder='한줄평'/>
        <button type='button' >등록</button>
        
        {/* 영화 평가 업로드 */}
        { reviews.map((review,index)=> (
          <div className='movie-review' key={review.id}>
              <h4>{review.title}</h4>
              <p>{review.comment} <span onClick={() => addLikes(index)}> 😁{review.likes}</span></p>
              <button type='button'>삭제</button>
          </div>
        ))}
    </>
  )

}