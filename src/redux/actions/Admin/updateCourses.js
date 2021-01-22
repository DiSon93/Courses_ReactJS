import {
    UPDATE_COURSES_REQUEST,
    UPDATE_COURSES_SUCCESS,
    UPDATE_COURSES_FAIL
} from '../../constants/Admin/updateCourses';
import axiosClient from '../../../utils/axiosClient';
import axios from 'axios'


export const updateCourses = (values) => {
    console.log("Hello!!")
    return (dispatch) => {
        dispatch({ type: UPDATE_COURSES_REQUEST });

        axiosClient.put("QuanLyKhoaHoc/CapNhatKhoaHoc", values)
            .then((result) => {
                console.log("Hi ANH")

                // localStorage.setItem("user", JSON.stringify(result.data));
                console.log("TT");
                dispatch({
                    type: UPDATE_COURSES_SUCCESS,
                    payload: { data: result.data }
                });
                console.log(result.data);
            }).catch((error) => {
                console.log(error.response.data)
                dispatch({
                    type: UPDATE_COURSES_FAIL,
                    payload: {   error: error.response.data }
                })
            })
    }
}