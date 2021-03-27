import {GET_COURSE_BY_CATE_REQUEST, GET_COURSE_BY_CATE_SUCCESS, GET_COURSE_BY_CATE_FAIL} from '../constants/courses'

import axiosClient from '../../utils/axiosClient'

export const getCourseListByCate = (value) => {
    return (dispatch) => {
        dispatch ({type: GET_COURSE_BY_CATE_REQUEST});

        axiosClient.get(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${value}&MaNhom=GP01`).then((result) => {
            dispatch({
                type: GET_COURSE_BY_CATE_SUCCESS,
                payload: {data: result.data}
            })
        }).catch((error) => {
            dispatch({
                type:GET_COURSE_BY_CATE_FAIL,
                payload: {error: error.response.data}
            })
        })
    }
}