// 부모 컴포넌트 Parent03
// 부모 const userName='진달래'
    // const age=25
function Parent03(){
    const userName='진달래'
    const age='25'
    return()
}
export default Parent03


// 자식 컴포넌트 : Profile
// <div>
// </div>
function Profile(Parent03){
    return(
        <>
            <div>
                <h2><profild user={userName} age={age}/></h2>
            </div>
        </>
    )
}export default Profile