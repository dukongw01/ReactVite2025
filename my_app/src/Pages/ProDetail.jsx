import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProDetail(){
    // useParams() 이란
    // URL의 http://localHost:5317/detail/1의 => 1을 받아오는 함수이다.
    // 형식const {받아올 파라미터 값}=useParams()
    const {id}=useParams()
    return(
        <>
            <div>
                <h1>상품의 상세 페이지</h1>
                <p>상품의 ID는 <strong>{id}</strong>입니다.</p>
                <Link to='/'>상품목록 이동</Link>
            </div>
        </>
    )
}