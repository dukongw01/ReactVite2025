
import ReactSVG from '../assets/react.svg'


function Ex06(){


    return(
        <>
            <div className="zof">
                <div className="img">
                    <img src={ReactSVG} alt="풍경1" />
                    <p>아름다운 산</p>
                </div>
                <div className="img">
                    <img src="/images/image01.png" alt="풍경2" />
                    <p>푸른바다</p>
                </div>
                <div className="img">
                    <img src="/images/image03.png" alt="풍경3" />
                    <p>도시야경</p>
                </div>
            </div>
        </>
    )
}
// 반드시 Export명령어로 내보내기 한다
// 내가 작성한 함수
export default Ex06