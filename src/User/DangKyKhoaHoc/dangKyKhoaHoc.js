import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dangKyKhoaHoc } from '../../redux/actions/User/DangKyKhoaHoc'
import { Redirect } from 'react-router-dom'


export default function DangKyKhoaHoc() {

    const { courseSignUp, loading, error } = useSelector((state) => state.courseSignUpReducer);
    const dispatch = useDispatch();

    const [maKhoaHoc, setMaKhoaHoc] = useState("");
    const [taiKhoan, setTaiKhoan] = useState("");

    const user = {
        maKhoaHoc: maKhoaHoc,
        taiKhoan: taiKhoan,

    }
    //  const handleChange = evt => {
    //      const { name, value} = evt.target;
    //  }
    const signUp = (user) => {

        console.log("Hai")
        dispatch(dangKyKhoaHoc(user));
    }
    // useEffect(() => {
    //     console.log(error);
    //     console.log(courseSignUp)
    //     if (courseSignUp) {
    //         return <Redirect to="/" />;
    //     }
    //     console.log(courseSignUp)
    // })

    if (courseSignUp) {
        return <Redirect to="/user" />;
    }
    return (
        <div className="courseApply" >
            <div className="card container ">
                <div className="card-header mt-5">
                    <h1>Đăng ký khóa học</h1> <br />
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label className="maKhoaHoc"> Mã Khóa Học</label>
                            <div className="input-group">
                                <span className="input-group-addon" id="iconn"> <i className="glyphicon glyphicon-user" /></span>
                                <input type="text" className="form-control" id="text1" name="maKhoaHoc" placeholder="maKhoaHoc" onChange={(evt) => setMaKhoaHoc(evt.target.value)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="taiKhoan"> Tài Khoản </label>
                            <div className="input-group">
                                <span className="input-group-addon" id="iconn1"> <i className="glyphicon glyphicon-lock" /></span>
                                <input type="text" className="form-control" id="text2" name="taiKhoan" placeholder="taiKhoan" onChange={(evt) => setTaiKhoan(evt.target.value)} />
                            </div>
                        </div>


                        {/* <div className="form-group">
                        
                    </div> */}
              

                    </form>
                </div>
                <div className="card-footer text-muted mb-5">
                    <button className="btn btn-success" style={{ borderRadius: 0, width: "50%", fontSize: "18px" }} onClick={() => signUp(user)}
                        disabled={loading}
                    >Đăng Ký Khóa Học</button>



                    {error ? (
                        <div className="alert alert-danger">
                            <span>{error}</span>
                        </div>
                    ) : null}
                </div>
            </div>

            {/* <div className="form_DangKyKhoaHoc mt-5 mb-5 ml-5 mr-5"> */}

                {/* <form>
                <div className="form-group">
                    <label >Mã Khóa Học: </label>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="maKhoaHoc" value={maKhoaHoc} onChange={(evt) => setMaKhoaHoc(evt.target.value)} />
                    </div>
                </div>
                <div className="form-group">
                    <label >Tài khoản: </label>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="taiKhoan" value={taiKhoan} onChange={(evt) => setTaiKhoan(evt.target.value)} />
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-success" onClick={() => signUp(user)}>Đăng Ký</button>
                </div>

                {error ? (<div className="alert alert-danger">{error}</div>) : null}
            </form> */}

            {/* </div>   */}
        </div>
    )
}
