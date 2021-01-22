import {
    GET_COURSE_LIST_REQUEST,
    GET_COURSE_LIST_SUCCESS,
    GET_COURSE_LIST_FAIL
} from '../constants/courses';
import axiosClient from '../../utils/axiosClient';


export const getCourseList = () => {
    // console.log("Hello!!")
    return (dispatch) => {
        dispatch({type:  GET_COURSE_LIST_REQUEST});

        axiosClient.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
        .then((result) => {
            console.log("Kiểm tra lại")
            dispatch({
                type: GET_COURSE_LIST_SUCCESS,
                payload: {data: result.data}
            });
            // console.log(result.data);
        }).catch((error) => {
            // console.log("Kiểm tra lại")
            dispatch({
                type: GET_COURSE_LIST_FAIL,
                payload: { error: error.data.message }
            })
        })
    }
}

