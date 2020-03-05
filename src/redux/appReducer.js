import { getAuthUserData } from '../redux/authReducer'
const INITIALAZED_SUCCESS = 'INITIALAZED_SUCCESS'

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case INITIALAZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALAZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
    let propmise = dispatch(getAuthUserData())
    //let propmise2 = dispatch(somethingelse())
    //let propmise3 = dispatch(somethingelse())
    Promise.all([propmise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}
export default appReducer;