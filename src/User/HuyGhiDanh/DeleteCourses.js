import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserAcount } from '../../redux/actions/User/ThongTinTaiKhoan';
import { Button } from '@material-ui/core';
import { deleteMyCourses } from '../../redux/actions/User/DeleteCourses';
import { Redirect } from 'react-router-dom'

export default function UserAccount() {
    const { currentUser, loading, error } = useSelector((state) => state.loginReducer);
    // console.log(currentUser.email);
    const { userAccount } = useSelector((state) => state.userAccountReducer);
    const { deleteCourse } = useSelector((state) => state.deleteCoursesReducer)

    const dispatch = useDispatch();

    const user = {
        taiKhoan: currentUser.taiKhoan,
        matKhau: currentUser.matKhau,
    }

    const deleteCourses = (values) => {
        dispatch(deleteMyCourses(values))
    }

    useEffect(() => {
        dispatch(getUserAcount(user))
    }, []);
    console.log(userAccount);

    if (deleteCourse) {
     return   <Redirect to="/user" />

    }


    return (
        <div className="mt-5 mb-5 ml-4">
            <h4 style={{color: "blue"}}>Khóa học của tôi: </h4>
            <hr />
            {userAccount.chiTietKhoaHocGhiDanh.map(item => {
                return (<div>
                    <p>Mã khóa học: {item.maKhoaHoc}</p>
                    <p>Tài khoản: {userAccount.taiKhoan}</p>
                    <span className="mr-3 mb-4"> Tên khóa học: {item.tenKhoaHoc}</span>
                    <Button variant="contained" color="secondary" onClick={() => deleteCourses({ maKhoaHoc: item.maKhoaHoc, taiKhoan: userAccount.taiKhoan })}>Hủy đăng ký</Button>
                    <hr />
                </div>)
            })}

        </div>
    )
}
