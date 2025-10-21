function Parent04(){
    const sayHello=()=>{
        alert('난 부모')
    }
    return(
        <>
            <Button01 onClickEvent={sayHello}/>
        </>
    )
}
export default Parent04

function Button01(props){
    return(
        <>
            <button onClick={props.onClickEvent} >눌러보세요</button>
        </>
    )
}