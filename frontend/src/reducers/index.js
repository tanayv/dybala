import { combineReducers } from 'redux'
import {
  REQUEST_USER_DATA,
  RETURN_USER_DATA,
} from '../actions/LoginActions'

function loginReducer(state = 'reactjs', action) {
  switch (action.type) {
    case REQUEST_USER_DATA:
      return action.loginCredentials
    case RETURN_USER_DATA:
      return action.userData
    default:
      return state
  }
}

const rootReducer = combineReducers({
  loginReducer
})

export default rootReducer