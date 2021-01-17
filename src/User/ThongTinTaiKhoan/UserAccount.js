import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserAcount } from '../../redux/actions/User/ThongTinTaiKhoan'

export default function UserAccount() {
    const { currentUser, loading, error } = useSelector((state) => state.loginReducer);
    console.log(currentUser.email);
    const { userAccount } = useSelector((state) => state.userAccountReducer);

    const dispatch = useDispatch();

    const user = {
        taiKhoan: currentUser.taiKhoan,
        matKhau: currentUser.matKhau,
    }


    useEffect(() => {
        dispatch(getUserAcount(user))
    }, []);
    console.log(userAccount);
    return (
        <div className="userAccount"  style={{ backgroundImage: "url(img/trainingcourseflyer.jpg)" }}>
            <h1 className="mb-4">Đây là trang thông tin cá nhân của tôi.</h1>
            <div className="myAccounct">
                <p>Tài khoản: {currentUser.taiKhoan}</p>
                <p>Email: {currentUser.email}</p>
                <p>Họ và tên: {userAccount.hoTen}</p>
                <p>Mã nhóm: {userAccount.maNhom}</p>
                <p>Mã loại người dùng: {userAccount.maLoaiNguoiDung}</p>
                <p>Số điện thoại: {userAccount.soDT}</p>
                {/* <p>Chi tiết khóa học: {userAccount.chiTietKhoaHocGhiDanh}</p> */}
                <h5>Khóa học của tôi: </h5>
                {userAccount.chiTietKhoaHocGhiDanh.map(item => {
                    return (<div>
                        <p>Mã khóa học: {item.maKhoaHoc}</p>
                        <p>Tên khóa học: {item.tenKhoaHoc}</p>
                    </div>)
                })}
            </div>

        </div>
    )
}
