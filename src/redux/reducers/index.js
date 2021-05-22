import {INCREMENT, DECREMENT} from '../constants/index'

function rootReducer(state, action){
    console.log(action)
    if(action.type === INCREMENT){
        return {count : state.count + 1}
    }
    else if (action.type == DECREMENT){
        return {count : state.count - 1}
    }
    return state
}

export default rootReducer