
export default function Header(){
    return(
        <div>
            <h3>🎁Redux 쇼핑몰</h3>
            <ul>
                <li><p>Home</p></li>
                <Link to="/Cart">Cart</Link>
                <li><p>로그인</p></li>
            </ul>
        </div>
    )
}