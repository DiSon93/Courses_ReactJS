import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCourses } from '../../redux/actions/Admin/addCourses'
import { Redirect } from 'react-router-dom'

export default function AddCourses() {

    const { currentUser, loading, error } = useSelector((state) => state.addCoursesReducer);
    const dispatch = useDispatch();

    const [maKhoaHoc, setMaKhoaHoc] = useState("");
    const [biDanh, setBiDanh] = useState("");
    const [tenKhoaHoc, setTenKhoaHoc ] = useState("");
    const [ moTa, setMoTa ] = useState("");
    const [ luotXem, setLuotXem ] = useState(0);
    const [ danhGia, setDanhGia] = useState(0);
    const [hinhAnh, setHinhAnh ] = useState("");
    const [ maNhom, setMaNhom ] = useState("");
    const [ ngayTao, setNgayTao ] =useState("");
    const [ maDanhMucKhoaHoc, setMaDanhMucKhoaHoc ] = useState ("");
    const [ taiKhoanNguoiTao, setTaiKhoanNguoiTao ] = useState ("");

    const user = { 
        maKhoaHoc,
        biDanh,
        tenKhoaHoc, 
        moTa,
        luotXem,
        danhGia,
        hinhAnh,
        maNhom,
        ngayTao,
        maDanhMucKhoaHoc,
        taiKhoanNguoiTao,
     }
    //  const handleChange = evt => {
    //      const { name, value} = evt.target;
    //  }
    const themKhoaHoc = (user) => {
// debugger;
        console.log("Hai")
        dispatch(addCourses(user));
    }
    // useEffect(() => {
    //     console.log(error);
    //     console.log(currentUser)
    //     if (currentUser) {
    //         return <Redirect to="/" />;
    //     }
    //     console.log(currentUser)
    // })
    if (currentUser) {
                return <Redirect to="/" />;
            }
    return (
        <div className="container d-block mt-5 mb-5">
            <form action="">
                <label htmlFor="maKhoaHoc">Mã khóa học: </label>
                <input style={{ width: "300px"}} type="text" placeholder="Mã khóa học" id="maKhoaHoc" onChange={(evt) => setMaKhoaHoc(evt.target.value)}/><br/>
                <label htmlFor="biDanh">Bí danh: </label>
                <input style={{ width: "300px"}} type="text" placeholder="Bí danh" id="biDanh" onChange={(evt) => setBiDanh(evt.target.value)}/> <br/>
                <label htmlFor="tenKhoaHoc">Tên khóa học: </label>
                <input style={{ width: "300px"}} type="text" placeholder="Tên khóa học" id="tenKhoaHoc" onChange={(evt) => setTenKhoaHoc(evt.target.value)}/> <br/>
                <label htmlFor="moTa">Mô tả: </label>
                <input style={{ width: "300px"}} type="text" placeholder="Mô tả" id="moTa" onChange={(evt) => setMoTa(evt.target.value)}/> <br/>
                <label htmlFor="luotXem">Lượt xem: </label>
                <input style={{ width: "300px"}} type="text" placeholder="Lượt xem" id="luotXem" onChange={(evt) => setLuotXem(evt.target.value)}/> <br/>
                <label htmlFor="danhGia">Đánh giá: </label>
                <input style={{ width: "300px"}} type="text" placeholder="Đánh giá" id="danhGia" onChange={(evt) => setDanhGia(evt.target.value)}/> <br/>
                <label htmlFor="hinhAnh">Hình ảnh: </label>
                <input style={{ width: "300px"}} type="text" placeholder="Hình ảnh" id="hinhAnh" onChange={(evt) => setHinhAnh(evt.target.value)}/> <br/>
                <label htmlFor="maNhom">Mã nhóm: </label>
                <input style={{ width: "300px"}} type="text" placeholder="Mã nhóm" id="maNhom" onChange={(evt) => setMaNhom(evt.target.value)}/> <br/>
                <label htmlFor="ngayTao">Ngày tạo: </label>
                <input style={{ width: "300px"}} type="text" placeholder="Ngày tạo" id="ngayTao" onChange={(evt) => setNgayTao(evt.target.value)}/> <br/>
                <label htmlFor="maDanhMucKhoaHoc">Mã danh mục khóa học: </label>
                <input style={{ width: "300px"}} type="text" placeholder="Mã danh mục khóa học" id="maDanhMucKhoaHoc" onChange={(evt) => setMaDanhMucKhoaHoc(evt.target.value)}/> <br/>
                <label htmlFor="taiKhoanNguoiTao">Tài khoản người tạo: </label>
                <input style={{ width: "300px"}} type="text" placeholder="Tài khoản người tạo" id="taiKhoanNguoiTao" onChange={(evt) => setTaiKhoanNguoiTao(evt.target.value)}/> <br/>
                <button className="btn btn-primary" onClick={() => themKhoaHoc(user)}>Thêm Khóa Học</button>
                {error ? <div className="alert alert-danger">{error}</div> : null}
            </form>
        </div>
    )
}
