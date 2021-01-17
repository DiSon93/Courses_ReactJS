import {     
    USERACCOUNT_REQUEST,
    USERACCOUNT_SUCCESS,
    USERACCOUNT_FAIL 
} from '../../constants/User/ThongTinTaiKhoan';

// const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
    userAccount: {
        content: "",
        chiTietKhoaHocGhiDanh: []
    },
    loading: false,
    error: null,
    
}

const userAccountReducer = (state = initialState, action) => {
    switch (action.type) {
     case USERACCOUNT_REQUEST :{
            // state.currentUser = action.data,
            // state.loading = true
            return {...state, loading: true, error: null}
        };
        case USERACCOUNT_SUCCESS :{
            // state.currentUser = action.data
            return {...state, userAccount: action.payload.data, loading: false}
        };
        case USERACCOUNT_FAIL :{
            console.log(action.payload.error)
            return {...state, loading: false, error: action.payload.error}
            
        };
        default: 
        return state;
    }
}
export default userAccountReducer