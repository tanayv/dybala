
var sampleAuthProfile = {
    "email": "bishk@email.com",
    "name": "Taboriwala Ghajar",
}

function authenticate(state = [], action) {
    switch (action.type) {
        case 'LOGIN':
        return [
            ...state,
            {
            authProfile: sampleAuthProfile
            }
        ]
        default:
        return state
    }
}

export default authenticate;

