
import { LoginActions } from '../actions/actions'

var sampleAuthObject = {
    "email": "bishk@email.com",
    "name": "Taboriwala Ghajar",
}

function authenticate(state = [], action) {
    switch (action.type) {
        case LoginActions.LOGIN:
        return [
            ...state,
            {
            user: sampleAuthObject
            }
        ]
        default:
        return state
    }
}

export default authenticate;

