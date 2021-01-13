import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginIntoServer } from '../redux/actions/login'
import { Redirect } from 'react-router-dom'


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
    useEffect(() => {
        console.log(error);
        console.log(currentUser)
        if (currentUser) {
            return <Redirect to="/" />;
        }
        console.log(currentUser)
    })


    return (

        <div className="container-fluid login__body">
            <br />
            <br />
            <br />
            <br />
            <center> <b id="login-name">LOGIN Here </b> </center>&gt;
            <div className="row">
                <div className="offset" id="login">
                    <form>
                        <div className="form-group">
                            <label className="user"> UserName</label>
                            <div className="input-group">
                                <span className="input-group-addon" id="iconn"> <i className="glyphicon glyphicon-user" /></span>
                                <input type="text" className="form-control" id="text1" name="taiKhoan" placeholder="username" value={taiKhoan} onChange={(evt) => setTaiKhoan(evt.target.value)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="user"> Password </label>
                            <div className="input-group">
                                <span className="input-group-addon" id="iconn1"> <i className="glyphicon glyphicon-lock" /></span>
                                <input type="text" className="form-control" id="text2" name="matKhau" placeholder=" Enter Password" value={matKhau} onChange={(evt) => setMatKhau(evt.target.value)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-success" style={{ borderRadius: 0, width: "50%", fontSize: "18px" }} onClick={() => login(user)}
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
                    </form>
                </div>
            </div>
        </div>


    )

}




