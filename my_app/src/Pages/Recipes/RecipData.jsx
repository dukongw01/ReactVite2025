import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Recipes/recip.css';

export default function RecipData(){

    const [recipes, setRecipes]=useState([])
    const [ecipList, setRecipList]=useState('');

    const JSONRecip = () =>{
        fetch ('https://dummyjson.com/recipes')
        .then((res)=>{
            if(!res.ok){
                throw new Error(`오류 확인${res.status}`)
            }
            return res.json()
        }).then((data)=>{
            setRecipes(data.recipes)
            console.log(`json 받은 데이터 ${data}`)
        }).catch((err)=>{console.log(err.message)}).finally(()=>{console.log("요청완료")})
    }
    useEffect(()=>{ JSONRecip()})




    // 좋아요 기능 버튼
    // like = {1:0, 2:0, 3:0....} 1번도 0, 2번도 0, 3번도 0....
    // id - 음식명 - 좋아요
    // id = 1 , 된장찌개, 좋아요 0
    // 1. 된장찌개 (0)
    // 2. 김치찌개 (0)
    // 3. 피자 (0)
    // like 상태변수
    // const [like, setLike]=useState(0) 는 쓸 수 없다. 목록중 하나만 좋아요가 표현됨.
    // JSON 자체의 데이터가 오브젝트 이기 때문에 모두 다같이 초기화 할 수 없다
    // 오브젝트에 0을 초기화하는 초기값 변수를 만들 예정
    const [like, setLike]=useState(defaultLikes)
    const defaultLikes={} // 빈 배열 또는 빈 오브젝트 undes
    for(let i=0; i<data.length; i++){
        const recip = data[i]
        // const recip = data[1]=0
        defaultLikes[recip.id]=0 //각 레시피 id별로 초기값 0셋팅
    }
    // 좋아요 버튼 클릭시 좋아요 1씩 증가하는 핸들러
    const handleLike = (id) =>{
        // 배열이나 또는 오브젝트는 합의 어드레스 번지 주소가 같으면
        // 리렌더링을 하지 않기 때문에 반드시 얕은 복사 필요
        const likeCopy = {...likes}
        // 현재 undefined인 경우 -> undefined + => NaN
        likeCopy[id] = (likeCopy[id] !== undefined ? likeCopy[id]:0) + 1
        setRecipes(likeCopy)
    }



    return(
        <>
            <div>
                <h2>레시피 목록</h2>
                <ul>
                    {recipes.map((item,index)=>(
                        <li key={index}>
                            <img src={item.image} alt={item.name} width='100px' />
                            <h4>{item.name}</h4>
                            <p>타입: {item.mealType}</p>
                            <p>평점: <strong>{item.rating}</strong></p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}