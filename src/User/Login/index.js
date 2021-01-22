import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginIntoServer } from '../../redux/actions/User/login'
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';

const signInSchema = yup.object().shape({
    taiKhoan: yup.string().required(),
    matKhau: yup.string().required(),
})


export default function Login() {

    const { currentUser, loading, error } = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();

    const [taiKhoan, setTaiKhoan] = useState("");
    const [matKhau, setMatKhau] = useState("");

    const user = { 
        taiKhoan : taiKhoan, 
        matKhau : matKhau,
     }
    //  const handleChange = evt => {
    //      const { name, value} = evt.target;
    //  }
    const login = (user) => {

        console.log("Hai")
        dispatch(loginIntoServer(user));
    }
    // useEffect(() => {
    //     console.log(error);
    //     console.log(currentUser)
    //     if (currentUser) {
    //         return <Redirect to="/" />;
    //     }
    //     console.log(currentUser)
    // })

    if(currentUser) {
        return <Redirect to="/" />;
        
    }


        return (

            <div className="container-fluid login__body">
                <br />
                <br />
                <br />
                <br />
                <center> <b id="login-name">LOGIN Here </b> </center>&gt;
                <div className="row">
                    <div className="offset" id="login">
                        <Formik
                        initialValues={{
                            taiKhoan: "",
                            matKhau: "",
                        }}
                        validationSchema={signInSchema}
                        onSubmit={(values)=>{
                            console.log(values)
                            dispatch(loginIntoServer(values));
                        }}
                        >
                        <Form>
                            <div className="form-group">
                                <label className="user"> UserName</label>
                                <div className="input-group">
                                    <span className="input-group-addon" id="iconn"> <i className="glyphicon glyphicon-user" /></span>
                                    <Field type="text" className="form-control" id="text1" name="taiKhoan" placeholder="username"/>
                                    <ErrorMessage name="taiKhoan" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="user"> Password </label>
                                <div className="input-group">
                                    <span className="input-group-addon" id="iconn1"> <i className="glyphicon glyphicon-lock" /></span>
                                    <Field type="text" className="form-control" id="text2" name="matKhau" placeholder=" Enter Password" />
                                    <ErrorMessage name="matKhau" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                    <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-success" style={{ borderRadius: 0, width: "50%", fontSize: "18px" }}
                                    disabled={loading}
                                >Login</button>

                                <button type="reset" className="btn btn-danger" style={{ borderRadius: 0, width: "50%", fontSize: "18px" }} >Reset </button>

                                {error ? (
                                    <div className="alert alert-danger">
                                        <span>{error}</span>
                                    </div>
                                ) : null}
                            </div>
                            <br /><br /><br />
                            <a href="#" style={{ color: 'white', fontSize: 15, float: 'right', marginRight: 10 }}> Forget Password </a>
                            <a href="/register" style={{ color: 'white', fontSize: 15, float: 'right', marginRight: 10 }}> Register </a>
                            <span>Don't have an account?</span>
                        </Form>
                        </Formik>
 
                    </div>
                </div>
            </div>


        )

    // };
}
// const mapStateToProps = (state) => {
//     return {
//         currentUser: state.loginReducer.currentUser,
//         loading: state.loginReducer.loading,
//         error: state.loginReducer.error
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: (values) => dispatch(loginIntoServer(values)),


//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Login)



