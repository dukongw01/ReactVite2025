function Counter01(){

    // 버튼을 클릭하면 콘솔의 값은 누적되어 보여짐
    // 그러나 화면의 현재 카운트의 값은 숫자가 변하지 않는다.
    // count는 단순히 메모리 안에서만 값이 변경되기 때문이다
    // React는 값이 변경된 걸 알지 못한다
    // 값이 동적으로 변해야 하는 경우는 무조건 useState() 훅(hook)

    let count=0
    
    function inCrease(){
        count=count+1
        console.log('count 누적'+count)
    }

    return(
        <>
            <p>현재 카운트:{count}</p>
            <button type="button" onClick={inCrease}>+1</button>
        </>
    )
}

export default Counter01