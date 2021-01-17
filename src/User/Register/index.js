import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerIntoServer } from '../../redux/actions/register'
import { Redirect } from 'react-router-dom'


export default function Register() {

    const { userRegister, loading, error } = useSelector(state => state.registerReducer);
    const dispatch = useDispatch();

    const [taiKhoan, setTaiKhoan] = useState("");
    const [matKhau, setMatKhau] = useState("");
    const [hoTen, setHoTen ] = useState("");
    const [soDT, setSoDT ] =  useState("");
    const [maNhom, setMaNhom ] = useState("");
    const [email , setEmail ] =  useState("");
    const [maLoaiNguoiDung , setMaLoaiNguoiDung ] =  useState("");

    const user = { 
        taiKhoan : taiKhoan, 
        matKhau : matKhau,
        hoTen,
        soDT,
        maNhom,
        email,
        // maLoaiNguoiDung,
     }
  
    const register = (user) => {

        console.log(user)
        dispatch(registerIntoServer(user));
    }
    // useEffect(() => {
    //     console.log(error);
    //     console.log(userRegister)
    //     if (userRegister) {
    //         return <Redirect to="/" />;
    //     }
    
    // })

    if (userRegister) {
                return <Redirect to="/" />;
            }

    return (
        <div className="container-fluid register_form">
            <div className="d-flex justify-content-center">
                <div className="user_card">
                    <div className="d-flex justify-content-center">
                        <div className="brand_logo_container">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" className="brand_logo" alt="Logo" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center form_container">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user" /></span>
                                </div>
                                <input type="text" name className="form-control input_user" placeholder="username"  onChange={(evt) => setTaiKhoan(evt.target.value)}/>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key" /></span>
                                </div>
                                <input type="password" name className="form-control input_pass" placeholder="password" onChange={(evt) => setMatKhau(evt.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user" /></span>
                                </div>
                                <input type="text" name className="form-control input_user" placeholder="hoTen" onChange={(evt) => setHoTen(evt.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user" /></span>
                                </div>
                                <input type="eamil" name className="form-control input_user" placeholder="email" onChange={(evt) => setEmail(evt.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user" /></span>
                                </div>
                                <input type="text" name className="form-control input_user" placeholder="soDT" onChange={(evt) =>setSoDT(evt.target.value) }/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user" /></span>
                                </div>
                                <input type="text" name className="form-control input_user" placeholder="GP01" onChange={(evt) =>setMaNhom(evt.target.value) }/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user" /></span>
                                </div>
                                {/* <input type="text" name className="form-control input_user" placeholder="maLoaiNguoiDung" /> */}
                                <select  className="form-control input_user" name="maLoaiNguoiDung" id="" onChange={(evt) => setMaLoaiNguoiDung(evt.target.value)}>
                                    <option value="">----Ma Loai Nguoi Dung---</option>
                                    <option value="GV">GV</option>
                                    <option value="HV">HV</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                    <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button type="button" name="button" className="btn login_btn" onClick={() => register(user)}>Register</button>
                            </div>
                            {error ? <div className="alert alert-danger">{error}</div> : null}
                        </form>
                    </div>
                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            Have an account? <a href="/login" className="ml-2">Login</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}
