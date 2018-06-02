import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../app.component/App'
import Login from '../login.component/Login'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Login} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
