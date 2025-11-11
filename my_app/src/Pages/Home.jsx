import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
            <h2>여기는 Home</h2>
            <Link to='/about'>어바웃 페이지</Link>
        </>
    )       
}