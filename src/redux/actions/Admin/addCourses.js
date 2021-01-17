import {
    ADD_COURSES_REQUEST,
    ADD_COURSES_SUCCESS,
    ADD_COURSES_FAIL
} from '../../constants/Admin/addCourses';
import axiosClient from '../../../ultils/axiosClient';
import axios from 'axios'


export const addCourses = (values) => {
    console.log("Hello!!")
    return (dispatch) => {
        dispatch({ type: ADD_COURSES_REQUEST });

        axiosClient.post("QuanLyKhoaHoc/ThemKhoaHoc", values)
            .then((result) => {
                console.log("Hi ANH")

                // localStorage.setItem("user", JSON.stringify(result.data));
                console.log("TT");
                dispatch({
                    type: ADD_COURSES_SUCCESS,
                    payload: { data: result.data }
                });
                console.log(result.data);
            }).catch((error) => {
                console.log("Hi EM")
                dispatch({
                    type: ADD_COURSES_FAIL,
                    payload: {   error: error.response.data }
                })
            })
    }
}