import { useState } from 'react'
// src - > assets -> 이미지 파일은 반드시 import한다.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import는 외부파일을 가져온다.
import './App.css'
// 이미지를 하나하나 import해서 개별로 가져올 수 있다.
// public 폴더의 이미지 파일은 import하지 않아도 사용가능.
import image01 from '../public/images/image01.png';
import Alert from './propsComponents/Props06';

function App(){
  
  // const products=[
  //   {id:1, name:'노트북', price:1200000},
  //   {id:2, name:'마우스', price:30000},
  //   {id:3, name:'키보드', price:80000}];

  return(
    <>
      {/* <div style={{border:'1px solid #ddd', padding:'10px', margin:'10px', borderRadius:'10px'}}>
        <p>
          {products.map((item,index)=>(key={item.id}))}
        </p>
        <p>{item.name}</p>
        <p>{item.price.toLocaleString()}</p>
      </div> */}
      <Alert type={'error'} msg={'오류'}/>
      <Alert type={'sucess'} msg={'성공'}/>
      <Alert type={'info'} msg={'정보'}/>
      <Alert type={'warring'} msg={'기타'}/>
    </>
  )
}

// UserCard() 함수 생성하기
// UserCard()컴포넌트를 App()컴포넌트의 자식으로 사용할 예정
// App()컴포넌트의 이름, 나이 매개변수를 프롭스 명령어를 이용
// 컴포넌트와 컴포넌트 사이의 데이터 이동이 가능
// 부모->자식 으로만 매개변수를 보낼 수 있다
// props는 부모의 모든 매개변수를 대변한다
// 프롭스로 매개변수를 보내지 않고 직접 매개변수 값을 지정
// function UserCard(name,age){
//   const cjftn={};
//   const dudgml={};
//   return(
//     <>
//       <div style={{border:'1px solid #ddd', padding:'15px', margin:'10px', borderRadius:'8px'}}>
//         <h2>{props.name}</h2>
//         <h2>{props.age}</h2>
//       </div>
//     </>
//   )
// }


// // function App(){} -> react에서 app()는 컴포넌트라 불린다.
// function App() {
//   // 리액트는 반드시 return() 안에서 실행할 HTML문서를 작성한다.
//   const name='홍길동';
//   // true == 1, flase ==0
//   const isLoggedIn=true;
//   const fruits=['사과', '오렌지', '바나나']; //map이용
//   const user={name:'김철수', age:25, email:'kim@naver.com'}; //key와 value
//   const abtn=()=>{console.log('버튼 클릭')};
//   return (
//     // <></>는 프래그먼트로 리액트는 HTML작성시 반드시 부모 태그가 하나만 존재해야하므로
//     // 비어있는 태그를 사용하도록 허용한 기술이다.
//     // 리액트는 반드시 닫는 태그</>가 존재해야 한다. -> <hr/>
//     // <div></div>
//     // <div></div>
//     // <div></div> 이런 수식이 불가능하다.
//     // DOM에 접근해야하는데 어떤 DOM을 타야하는지 알 수 없기 때문이다.
//     // <>
//     // <div></div>
//     // </> 방식은 오류가 뜨지 않는다.
//     <>
//     <button type='button' onClick={abtn}>클릭</button>
//     <div style={{backgroundcolor:'blue', padding:'20px', borderRadius:'10px'}}>
//       <p>스타일 적용 박스</p>
//     </div>
//     {/* 문제: name:'홍길동'정의 후 <h1>태그에 출력하기 */}
//       {/* <div className='welcome'> */}
//         {/* javascript의 class를 react에선 className으로 사용 */}
//         {/* react에서 변수의 값을 사용하려면 반드시 중괄호{}안에 변수이름을 입력 */}
//         <p>{user.name}</p>
//         <p>{user.age}</p>
//         <p>{user.email}</p>
//       <div>
//         <p>{isLoggedIn==true?"환영합니다,":"로그인하세요."}</p>
//       </div>
//         <img src={image01} alt="샘플 랜덤 이미지" />
//         <ul>
//           {/* map()함수 이용 */}
//           {/* {fruits.map((item,index)=>())} */}
//           {fruits.map((item,index)=>(<li key={index}>{item}</li>))}
//         </ul>
//       {/* </div> */}
//     </>
//   )
// }
// // export는 app라는 컴포넌트를 밖으로 내보낸다.
export default App
