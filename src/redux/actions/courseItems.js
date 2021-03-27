import {
    GET_COURSE_ITEM_REQUEST,
    GET_COURSE_ITEM_SUCCESS,
    GET_COURSE_ITEM_FAIL
} from '../constants/courses';
import axiosClient from '../../utils/axiosClient'; 

export const getCourseInItem = (value) => {
    return (dispatch) => {
        dispatch({ type: GET_COURSE_ITEM_REQUEST});
        axiosClient.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${value}`)
        .then((result) => {
            dispatch({
                type: GET_COURSE_ITEM_SUCCESS,
                payload: {data: result.data}
            })
        })
        .catch((error) => {
            dispatch({
                type: GET_COURSE_ITEM_FAIL,
                payload: {error: error?.response?.data }
            })
        })
    }
    
}