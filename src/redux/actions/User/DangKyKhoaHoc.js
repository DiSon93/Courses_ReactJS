import {
    SINGUP_REQUEST,
    SINGUP_SUCCESS,
    SINGUP_FAIL
} from '../../constants/User/DangKyKhoaHoc';
import axiosClient from '../../../utils/axiosClient';
import axios from 'axios'


export const dangKyKhoaHoc = (value) => {
    console.log("Hello!!")
    return (dispatch) => {
        dispatch({ type: SINGUP_REQUEST });

        axiosClient.post("QuanLyKhoaHoc/DangKyKhoaHoc", value)
            .then((result) => {

                // localStorage.setItem("user", JSON.stringtify(result.data));
                console.log("TT");
                dispatch({
                    type: SINGUP_SUCCESS,
                    payload: { data: result.data }
                });
                console.log(result.data);
            }).catch((error) => {
                console.log("ERROR")
                dispatch({
                    type: SINGUP_FAIL,
                    payload: {   error: error.response.data }
                })
            })
    }
}