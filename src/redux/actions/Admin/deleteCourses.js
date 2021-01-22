import {
    DELETE_COURSES_REQUEST,
    DELETE_COURSES_SUCCESS,
    DELETE_COURSES_FAIL
} from '../../constants/Admin/deleteCourses';
import axiosClient from '../../../utils/axiosClient';
import axios from 'axios'


export const deleteCourseAdmin = (values) => {
    console.log("Hello!!")
    return (dispatch) => {
        dispatch({ type: DELETE_COURSES_REQUEST });

        axiosClient.delete(`QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${values}`)
            .then((result) => {
                console.log("Hi ANH")

                // localStorage.setItem("user", JSON.stringify(result.data));
                console.log("TT");
                dispatch({
                    type: DELETE_COURSES_SUCCESS,
                    payload: { data: result.data }
                });
                console.log(result.data);
            }).catch((error) => {
                console.log("Hi EM")
                dispatch({
                    type: DELETE_COURSES_FAIL,
                    payload: {   error: error.response.data }
                })
            })
    }
}