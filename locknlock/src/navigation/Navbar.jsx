export default function Navbar(){
    





    return(

        <div className="Navbar-container">
                <ul>
                    <li><button onClick={() => TapFilter(0)}>베스트</button></li>
                    <li><button onClick={() => TapFilter(1)}>가전</button></li>
                    <li><button onClick={() => TapFilter(2)}>조리</button></li>
                    <li><button onClick={() => TapFilter(3)}>주방</button></li>
                    <li><button onClick={() => TapFilter(4)}>야외</button></li>
                    <li><button onClick={() => TapFilter(5)}>보관</button></li>
                    <li><button onClick={() => TapFilter(6)}>잡화</button></li>
                </ul>
            </div>
    )



}