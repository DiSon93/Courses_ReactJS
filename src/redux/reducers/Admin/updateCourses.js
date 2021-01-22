import { UPDATE_COURSES_REQUEST, UPDATE_COURSES_SUCCESS, UPDATE_COURSES_FAIL } from '../../constants/Admin/updateCourses';

// const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
    updateCourse: "",
    loading: false,
    error: null
}

const updateCourseReducer = (state = initialState, action) => {
    switch (action.type) {
     case UPDATE_COURSES_REQUEST :{
            // state.currentUser = action.data,
            // state.loading = true
            return {...state, loading: true, error: null}
        };
        case UPDATE_COURSES_SUCCESS :{
            // state.currentUser = action.data
            return {...state, updateCourse: action.payload.data, loading: false}
        };
        case UPDATE_COURSES_FAIL :{
            console.log(action.payload.error)
            return {...state, loading: false, error: action.payload.error}
            
        };
        default: 
        return state;
    }
}
export default updateCourseReducer