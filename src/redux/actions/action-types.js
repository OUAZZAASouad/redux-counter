import {INCREMENT, DECREMENT} from '../constants/index'
export function increment() {
    return {
        type : INCREMENT
    }
}

export function decrement() {
    return {
        type : DECREMENT
    }
}