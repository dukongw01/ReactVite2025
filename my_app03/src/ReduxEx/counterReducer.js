// counterReducer.js 파일은 상태(state)와 동작(action)을 정의하는 가장 핵심 로직이다.
// Redux의 동작 원리
// Reducer -> store -> Provider - > Component
// Reducx는 다같이 써야하는 명령어가 있다.
const initialState = {count:0} //initialState는 Redux의 예약어이다 마음대로 바꿀 수 없다
// action엔 타입과 페이로드가 들어있다. state로 initialState.count에 접근할 수 있다.
export default function counterReducer(state=initialState, action){
    // switch문을 이용하여 직접 함수를 생성해야 됨
    switch(action.type){
        case 'INCREMENT' : return{
            count:state.count + 1} //count가 1씩 증가
        case 'DECREMENT' : return {
            count:state.count -1} // count가 1씩 감소
        default : return state
        }
    }