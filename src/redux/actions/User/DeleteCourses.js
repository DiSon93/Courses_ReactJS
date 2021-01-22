import {
    DELETECOURSE_REQUEST,
    DELETECOURSE_SUCCESS,
    DELETECOURSE_FAIL
} from '../../constants/User/DeleteCourses';
import axiosClient from '../../../utils/axiosClient';
import axios from 'axios'


export const deleteMyCourses = (value) => {
    console.log("Hello!!")
    return (dispatch) => {
        dispatch({ type: DELETECOURSE_REQUEST });

        axiosClient.post("QuanLyKhoaHoc/HuyGhiDanh", value)
            .then((result) => {

                // localStorage.setItem("user", JSON.stringtify(result.data));
                console.log("TT");
                dispatch({
                    type: DELETECOURSE_SUCCESS,
                    payload: { data: result.data }
                });
                console.log(result.data);
            }).catch((error) => {
                console.log("ERROR")
                dispatch({
                    type: DELETECOURSE_FAIL,
                    payload: {   error: error.response.data }
                })
            })
    }
}