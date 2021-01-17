import {     
    USERUPDATE_REQUEST,
    USERUPDATE_SUCCESS,
    USERUPDATE_FAIL 
} from '../../constants/User/userUpdate';

// const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
    updatedUser: "",
    loading: false,
    error: null,
    
}

const userUpdateReducer = (state = initialState, action) => {
    switch (action.type) {
     case USERUPDATE_REQUEST :{
            // state.currentUser = action.data,
            // state.loading = true
            return {...state, loading: true, error: null}
        };
        case USERUPDATE_SUCCESS :{
            // state.currentUser = action.data
            console.log(action.payload.data)
            return {...state, updatedUser: action.payload.data, loading: false}
        };
        case USERUPDATE_FAIL :{
            console.log(action.payload.error)
            return {...state, loading: false, error: action.payload.error}
            
        };
        default: 
        return state;
    }
}
export default userUpdateReducer