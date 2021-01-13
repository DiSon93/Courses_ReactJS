import {
    GET_COURSE_ITEM_REQUEST,
    GET_COURSE_ITEM_SUCCESS,
    GET_COURSE_ITEM_FAIL
} from '../constants/courses';
import axiosClient from '../../ultils/axiosClient'; 

export const getCourseInItem = (value) => {
    return (dispatch) => {
        dispatch({ type: GET_COURSE_ITEM_REQUEST});
        axiosClient.get(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${value}&MaNhom=GP01`)
        .then((result) => {
            dispatch({
                type: GET_COURSE_ITEM_SUCCESS,
                payload: {data: result.data}
            })
        })
        .catch((error) => {
            dispatch({
                type: GET_COURSE_ITEM_FAIL,
                payload: {error: error.respose.data}
            })
        })
    }
    
}