import {GET_COURSE_BY_CATE_REQUEST, GET_COURSE_BY_CATE_SUCCESS, GET_COURSE_BY_CATE_FAIL} from '../constants/courses'

const initialState = {
    courseListByCate:[],
    loading: false,
    error: null
}

const courseBycateReducer = (state= initialState, action) => {
    switch(action.type){
        case GET_COURSE_BY_CATE_REQUEST: 
            return{
            ...state,loading:true
            }
        case GET_COURSE_BY_CATE_SUCCESS:
            return {
                ...state, courseListByCate:action.payload.data, loading:false
            }     
        case GET_COURSE_BY_CATE_FAIL:
            return {
                ...state, error:true    
            }     


        default:
            return state
    }
}
export default courseBycateReducer