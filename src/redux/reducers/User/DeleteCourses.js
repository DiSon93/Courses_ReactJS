import {     
    DELETECOURSE_REQUEST,
    DELETECOURSE_SUCCESS,
    DELETECOURSE_FAIL
} from '../../constants/User/DeleteCourses';

// const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
    deleteCourse: "",
    loading: false,
    error: null,
    
}

const deleteCoursesReducer = (state = initialState, action) => {
    switch (action.type) {
     case DELETECOURSE_REQUEST :{
            // state.currentUser = action.data,
            // state.loading = true
            return {...state, loading: true, error: null}
        };
        case DELETECOURSE_SUCCESS :{
            // state.currentUser = action.data
            return {...state, deleteCourse: action.payload.data, loading: false}
        };
        case DELETECOURSE_FAIL :{
            console.log(action.payload.error)
            return {...state, loading: false, error: action.payload.error}
            
        };
        default: 
        return state;
    }
}
export default deleteCoursesReducer