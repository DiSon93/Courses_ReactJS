import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/login';

const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
    currentUser: currentUser,
    loading: false,
    error: null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
     case LOGIN_REQUEST :{
            // state.currentUser = action.data,
            // state.loading = true
            return {...state, loading: true, error: null}
        };
        case LOGIN_SUCCESS :{
            // state.currentUser = action.data
            return {...state, currentUser: action.payload.data, loading: false}
        };
        case LOGIN_FAIL :{
            console.log(action.payload.error)
            return {...state, loading: false, error: action.payload.error}
            
        };
        default: 
        return state;
    }
}
export default loginReducer