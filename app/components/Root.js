import React from 'react'
import { connect, createStore } from 'react-redux'
import net from 'net'
import { increment, decrement, async_increment } from '../actions/counter'

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>count = {this.props.count}</div>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counter
    };
}

// Which action creators does it want to receive by props?
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)
