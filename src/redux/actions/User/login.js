import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../../constants/login';
import axiosClient from '../../../utils/axiosClient';
import axios from 'axios'


export const loginIntoServer = (value) => {
    // console.log("Hello!!")
    return (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });

        axiosClient.post("QuanLyNguoiDung/DangNhap", value)
            .then((result) => {

                localStorage.setItem("user", JSON.stringify(result.data));
                console.log("TT");
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { data: result.data }
                });
                console.log(result.data);
            }).catch((error) => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: {   error: error.response.data }
                })
            })
    }
}