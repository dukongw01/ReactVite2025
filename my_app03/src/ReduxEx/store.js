// store.js는 작성했던 counterReducer.js 파일을 스토어에 등록한다
import {createStore} from 'redux'
import counterReducer from './counterReducer';

export const store = createStore(counterReducer)