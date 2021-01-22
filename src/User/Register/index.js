import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerIntoServer } from '../../redux/actions/User/register'
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { yupSchema } from '../../utils/yupSchema'




export default function Register() {

    const { userRegister, loading, error } = useSelector(state => state.registerReducer);
    const dispatch = useDispatch();

    const [taiKhoan, setTaiKhoan] = useState("");
    const [matKhau, setMatKhau] = useState("");
    const [hoTen, setHoTen] = useState("");
    const [soDT, setSoDT] = useState("");
    const [maNhom, setMaNhom] = useState("");
    const [email, setEmail] = useState("");
    const [maLoaiNguoiDung, setMaLoaiNguoiDung] = useState("");

    const user = {
        taiKhoan: taiKhoan,
        matKhau: matKhau,
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
                        <Formik
                            initialValues={{
                                taiKhoan: '',
                                matKhau: '',
                                hoTen: '',
                                soDT: '',
                                maNhom: '',
                                email: '',
                            }}
                            validationSchema={yupSchema}

                            onSubmit={(values) => {
                                console.log(values)
                                dispatch(registerIntoServer(values));
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-user" /></span>
                                        </div>
                                        <Field type="text" name="taiKhoan" className="form-control input_user" placeholder="username" />
                                        <ErrorMessage name="taiKhoan" />
{/*                                      
                                        <ErrorMessage name="taiKhoan">
                                            {   
                                                (msg) => <div className="alert alert-danger">{msg}</div>
                                            }
                                        </ErrorMessage> */}
                                    </div>
                                    <div className="input-group mb-2">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-key" /></span>
                                        </div>
                                        <Field type="password" name="matKhau" className="form-control input_pass" placeholder="password" />
                                        <ErrorMessage name="matKhau" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-user" /></span>
                                        </div>
                                        <Field type="text" name="hoTen" className="form-control input_user" placeholder="hoTen" />
                                        <ErrorMessage name="hoTen" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-user" /></span>
                                        </div>
                                        <Field type="eamil" name="email" className="form-control input_user" placeholder="email" />
                                        <ErrorMessage name="email" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-user" /></span>
                                        </div>
                                        <Field type="text" name="soDT" className="form-control input_user" placeholder="soDT" />
                                        <ErrorMessage name="soDT" />
                                    </div>
                                    {/* <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-user" /></span>
                                        </div>
                                        <Field type="text" name className="form-control input_user" placeholder="GP01" onChange={(evt) => setMaNhom(evt.target.value)} />
                                    </div> */}
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-user" /></span>
                                        </div>
                                        {/* <input type="text" name className="form-control input_user" placeholder="maLoaiNguoiDung" /> */}
                                        <Field component="select" className="form-control input_user" name="maNhom" id="" >
                                            <option value="">---Mã nhóm----</option>
                                            <option value="GP01">GP01</option>
                                            <option value="GP02">GP02</option>
                                        </Field>
                                        <ErrorMessage name="maNhom" />
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                            <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-3 login_container">
                                        <button type="submit" name="button" className="btn login_btn">Register</button>
                                    </div>
                                    {error ? <div className="alert alert-danger">{error}</div> : null}
                                </Form>
                            )}
                        </Formik>

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
