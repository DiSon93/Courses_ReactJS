import { DELETE_COURSES_REQUEST, DELETE_COURSES_SUCCESS, DELETE_COURSES_FAIL } from '../../constants/Admin/deleteCourses';

// const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
    deleteCourse: "",
    loading: false,
    error: null
}

const deleteCoursesAdminReducer = (state = initialState, action) => {
    switch (action.type) {
     case DELETE_COURSES_REQUEST :{
            // state.currentUser = action.data,
            // state.loading = true
            return {...state, loading: true, error: null}
        };
        case DELETE_COURSES_SUCCESS :{
            // state.currentUser = action.data
            return {...state, deleteCourse: action.payload.data, loading: false}
        };
        case DELETE_COURSES_FAIL :{
            console.log(action.payload.error)
            return {...state, loading: false, error: action.payload.error}
            
        };
        default: 
        return state;
    }
}
export default deleteCoursesAdminReducer