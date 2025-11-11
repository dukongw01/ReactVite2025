import { useState } from "react";

export default function ChangeImg01(){
    // React에서 배포 빌드(JSX -> js 빌드)
    // vite => 빌드방식
    // pubilc => images : images 폴더만 배포됨
    // .pubilc/images/img.png -> 이경로는 X
    // 이미지 정상 경로 : /images/img.png

    const[imgs, setImgs]=useState('/images/dog.png')
    const[toggle, setToggle]=useState(false)

    // 이미지 변경 함수
    // 이미지를 토글 형식으로 변경하는 함수
    const ChangeHandler = () => {
        toggle === false?
        setImgs('images/dog.png'):setImgs('images/poodle.png')
        setToggle
    }
    return(
        <>
            <div>
                <img src={imgs} alt="dog" />
                <button type="button" onClick={}>이미지 변경</button>
            </div>
        </>
    )
}