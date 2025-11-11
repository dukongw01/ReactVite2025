import {  createContext, useState } from "react";
// 1. context 생성
// createComtext()는 React의 전역 저장소 (공유 공간)을 만드는 함수
// 컴포넌트 트리 전체에 데이터를 전달할 수 있게 해준다
// 반드시 export해야 함수를 내보낼 수 있다

export const AuthContext = createContext();

// 2. Provider 정의
// AuthContext 컴포넌트는 Context의 공급자(Provider)역할을 한다
// App 전체를 감싸서 user, login, logout 데이터를 전역으로 전달
// value={{데이터1, 데이터2}}에 값을 실어 나른다.
// Provider 할 수 있는 함수를 생성

export default function AuthProvider({Children}){
    // 상태변수 user : 현재 로그인한 사용자 정보 저장
    // 기본값 : null -> 아직은 login 안함
    // 기본값을 input에 입력할 때 빈값 입력금지. alert() 창이라도 띄워야한다
    // 예외처리 또는 방어코드 작성필수

    const [user, setUser]=useState(null)
    // 로그인 함수 login():사용자 이름을 받아 user객체로 저장
    const login = (username) => {
        setUser({name : username})
    }

    // 로그아웃 함수 logout() : user가 null로 초기화 (로그인 해체)
    const logout = () => {
        setUser(null)
    }

    // Provider는 value 속성을 통해 하위 컴포넌트에 데이터를 공유
    // Children은 <AuthProvider> ~~ </AuthProvider> 안의 포함된 컴포넌트를 의미
    return(
        <AuthProvider.Provider value={{user, login, logout}}>
            {Children}
        </AuthProvider.Provider>
    )
}