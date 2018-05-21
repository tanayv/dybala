import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'
import Root from './components/root.component/Root'
import './index.css';

const store = createStore(todoApp)

render(
  <Root store={store} />,
  document.getElementById('root')
)