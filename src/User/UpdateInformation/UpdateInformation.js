import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userUpdateInf } from '../../redux/actions/User/userUpdate';
import { Redirect } from 'react-router-dom';
import { loginIntoServer } from '../../redux/actions/User/login'


export default function UpdateInformation() {
    const { updatedUser, loading, error } = useSelector((state) => state.userUpdateReducer);

    const { currentUser } = useSelector(state => state.loginReducer);

    // const [ userUpdate, setUserUpdate ] = useState (currentUser)

    const dispatch = useDispatch();

    let userUpdate = { ...currentUser, matKhau: "" };

    // useEffect(() => {
    //     dispatch(userUpdateInf(userUpdate))
    // })
    const handleChange = (evt) => {
        userUpdate = {
            ...userUpdate,
            [evt.target.name]: evt.target.value,
            // matKhau: "1233"
        }
    }
    const userUpdateBtn = (value) => {
        dispatch(userUpdateInf(value))
    }
    if (updatedUser) {
        // dispatch(loginIntoServer({taiKhoan: updatedUser.taiKhoan, matKhau: updatedUser.matKhau}))
        return <Redirect to="/user" />
    }

    return (
        <div className="update__userInformation" style={{ backgroundImage: "url(img/trainingcourseflyer.jpg)"}}>

            <div className="container" >
                <div className="card">
                    <div className="card-header">
                        <h1>Đây là trang update thông tin cá nhân của tôi</h1>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label className="taiKhoan"> Tài Khoản </label>
                            <div className="input-group">
                                <input type="text" className="form-control" name="taiKhoan"
                                    defaultValue={currentUser.taiKhoan} onChange={(evt) => handleChange(evt)} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="matKhau"> Mật khẩu </label>
                            <div className="input-group">

                                <input type="text" className="form-control" name="matKhau" placeholder="Nhớ đánh mật khẩu lại nha" onChange={(evt) => handleChange(evt)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="hoTen"> Họ tên </label>
                            <div className="input-group">

                                <input type="text" className="form-control" name="hoTen" defaultValue={currentUser.hoTen} onChange={(evt) => handleChange(evt)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="soDT"> Số điện thoại </label>
                            <div className="input-group">

                                <input type="text" className="form-control" name="soDT" defaultValue={currentUser.soDT} onChange={(evt) => handleChange(evt)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="maLoaiNguoiDung"> Mã loại người dùng</label>
                            <div className="input-group">

                                {/* <input type="text" className="form-control" id="text2" name="maLoaiNguoiDung" placeholder="maLoaiNguoiDung" /> */}
                                <select name="" id="" className="form-control" defaultValue={currentUser.maLoaiNguoiDung} onChange={(evt) => handleChange(evt)}>
                                    <option value="GV">GV</option>
                                    <option value="HV">HV</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="maNhom"> Mã nhóm</label>
                            <div className="input-group">

                                <input type="text" className="form-control" name="maNhom" defaultValue={currentUser.maNhom} onChange={(evt) => handleChange(evt)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="email"> Email</label>
                            <div className="input-group">
                                <input type="email" className="form-control" name="email" defaultValue={currentUser.email} onChange={(evt) => handleChange(evt)} />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <button className="btn btn-success" style={{ borderRadius: 0, width: "50%", fontSize: "18px" }} onClick={() => userUpdateBtn(userUpdate)}
                        >Update</button>
                    </div>
                </div>
                {/* <h1>Đây là trang update thông tin cá nhân của tôi</h1> */}
                {/* <br /> */}
                {/* <div className="update-modal" style={{ width: "60%", justifyContent: "center" }}> */}


                {/* <div className="form-group">
                    <label className="taiKhoan"> Tài Khoản </label>
                    <div className="input-group">
                        <input type="text" className="form-control" name="taiKhoan"
                            defaultValue={currentUser.taiKhoan} onChange={(evt) => handleChange(evt)} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="matKhau"> Mật khẩu </label>
                    <div className="input-group">

                        <input type="text" className="form-control" name="matKhau" placeholder="Nhớ đánh mật khẩu lại nha" onChange={(evt) => handleChange(evt)} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="hoTen"> Họ tên </label>
                    <div className="input-group">

                        <input type="text" className="form-control" name="hoTen" defaultValue={currentUser.hoTen} onChange={(evt) => handleChange(evt)} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="soDT"> Số điện thoại </label>
                    <div className="input-group">

                        <input type="text" className="form-control" name="soDT" defaultValue={currentUser.soDT} onChange={(evt) => handleChange(evt)} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="maLoaiNguoiDung"> Mã loại người dùng</label>
                    <div className="input-group">

                        {/* <input type="text" className="form-control" id="text2" name="maLoaiNguoiDung" placeholder="maLoaiNguoiDung" /> */}
                {/* <select name="" id="" className="form-control" defaultValue={currentUser.maLoaiNguoiDung} onChange={(evt) => handleChange(evt)}>
                            <option value="GV">GV</option>
                            <option value="HV">HV</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="maNhom"> Mã nhóm</label>
                    <div className="input-group">

                        <input type="text" className="form-control" name="maNhom" defaultValue={currentUser.maNhom} onChange={(evt) => handleChange(evt)} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="email"> Email</label>
                    <div className="input-group">
                        <input type="email" className="form-control" name="email" defaultValue={currentUser.email} onChange={(evt) => handleChange(evt)} />
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-success" style={{ borderRadius: 0, width: "50%", fontSize: "18px" }} onClick={() => userUpdateBtn(userUpdate)}
                    >Update</button>
 */}
                {/*  */}
                {/* </div> */}

                {/* </div> */}
            </div>
        </div>
    )
}
