import { ADD_COURSES_REQUEST, ADD_COURSES_SUCCESS, ADD_COURSES_FAIL } from '../../constants/Admin/addCourses';

// const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
    currentCourse: "",
    loading: false,
    error: null
}

const addCoursesReducer = (state = initialState, action) => {
    switch (action.type) {
     case ADD_COURSES_REQUEST :{
            // state.currentUser = action.data,
            // state.loading = true
            return {...state, loading: true, error: null}
        };
        case ADD_COURSES_SUCCESS :{
            // state.currentUser = action.data
            return {...state, currentCourse: action.payload.data, loading: false}
        };
        case ADD_COURSES_FAIL :{
            console.log(action.payload.error)
            return {...state, loading: false, error: action.payload.error}
            
        };
        default: 
        return state;
    }
}
export default addCoursesReducer