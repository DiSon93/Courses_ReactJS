import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../constants/register';
import axiosClient from '../../ultils/axiosClient';
import axios from 'axios'


// export const registerIntoServer = (values) => {
//     // console.log("Hello!!")
//     return (dispatch) => {
//         dispatch({ type: REGISTER_REQUEST });

//         axiosClient.post("QuanLyNguoiDung/DangKy", values)
//             .then((result) => {

//                 localStorage.setItem("user", JSON.stringtify(result.data));
//                 console.log("TT");
//                 dispatch({
//                     type: REGISTER_SUCCESS,
//                     payload: { data: result.data }
//                 });
//                 console.log(result.data);
//             }).catch((error) => {
//                 dispatch({
//                     type: REGISTER_FAIL,
//                     payload: {   error: error.response.data }
//                 })
//             })
//     }
// }
export const registerIntoServer = (values) => {
    return (dispatch) => {
        dispatch({ type: REGISTER_REQUEST });
        axiosClient.post("QuanLyNguoiDung/DangKy", values)
        .then((result) => {
            // localStorage.getItem("user", JSON.stringify(result.data));
            console.log("Thành công")
            dispatch({
                type: REGISTER_SUCCESS,
                payload: { data: result.data}
            })
        })
        .catch((error) => {
            console.log("Thất bại");
            dispatch({     
                type: REGISTER_FAIL,
                payload: { error: error.response.data}
            })
        })
    }
}