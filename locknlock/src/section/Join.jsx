
export default function Join(){


    return(
        <div className="Join-container">
            <div className="Join-form">
                <h2>회원가입</h2>
                <div className="Join-all-check">
                    {/* 약관 전체 동의 */}
                    <input type="checkbox" className="all-check" />
                </div>
                <div className="Join-check">
                    {/* 필수 선택 동의 */}
                    <ul>
                        <li>
                            <input type="checkbox" className="check01" />
                        </li>
                        <li>
                            <input type="checkbox" className="check02" />
                        </li>
                        <li>
                            <input type="checkbox" className="check03" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )


};