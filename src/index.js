import React from 'react'
import ReactDOM from 'react-dom'
//import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
// import reducer from './reducers/anecdoteReducer'
import { store } from './store'

//const store = store(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)