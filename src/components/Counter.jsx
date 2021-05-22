import {connect} from 'react-redux'
import {increment, decrement} from '../redux/actions/action-types'

const mapStateToProps = state => {
    return {
        count : state.count
    }
}

const mapDispatchToProps = {increment, decrement}

const Counter = ({count, increment, decrement}) => {
    return(
        <div>
            <button onClick = {decrement}>-</button>
            <input type="text" value = {count}/>
            <button onClick = {increment}>+</button>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);