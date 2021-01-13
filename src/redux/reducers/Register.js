import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from '../constants/register';

const userRegister = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
    userRegister: userRegister,
    loading: false,
    error: null
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
     case REGISTER_REQUEST :{
            // state.currentUser = action.data,
            // state.loading = true
            return {...state, loading: true, error: null}
        };
        case REGISTER_SUCCESS :{
            // state.currentUser = action.data
            return {...state, userRegister: action.payload.data, loading: false}
        };
        case REGISTER_FAIL :{
            console.log(action.payload.error)
            return {...state, loading: false, error: action.payload.error}
            
        };
        default: 
        return state;
    }
}
export default registerReducer