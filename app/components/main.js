import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers/index.js'
import Root from './Root.js'

let store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.querySelector('#root')
)
