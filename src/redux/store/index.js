import {createStore} from 'redux'
import rootReducer from '../reducers/index'

const initialState = {
    count : 2
}

const store = createStore(rootReducer, initialState);
export default store