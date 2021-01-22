import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { addCourses } from '../../redux/actions/Admin/addCourses';
import { getCourseList } from '../../redux/actions/useAPICourses';
import { updateCourses } from '../../redux/actions/Admin/updateCourses'
import { getCoursesInfo } from '../../redux/actions/Admin/getCoursesInfo'
import { useParams, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { yupSchema } from '../../utils/yupSchema'

export default function UpdateCourses() {

    const { courseID } = useParams();

    const { currentCourseInfo, loading, error } = useSelector((state) => state.getCourseInfoReducer);
    const { updateCourse } = useSelector((state) => state.updateCourseReducer);


    const dispatch = useDispatch();

    let courseUpdate = { 
        maKhoaHoc: currentCourseInfo.maKhoaHoc,
        biDanh: currentCourseInfo.biDanh,
        tenKhoaHoc: currentCourseInfo.tenKhoaHoc,
        moTa: currentCourseInfo.moTa,
        luotXem: currentCourseInfo.luotXem,
        danhGia: currentCourseInfo.danhGia,
        hinhAnh: currentCourseInfo.hinhAnh,
        maNhom: currentCourseInfo.maNhom,
        ngayTao: currentCourseInfo.ngayTao,
        maDanhMucKhoahoc: currentCourseInfo.danhMucKhoaHoc.maDanhMucKhoahoc,
        taiKhoanNguoiTao: currentCourseInfo.nguoiTao.taiKhoan,
     };

    // useEffect(() => {
    //     dispatch(userUpdateInf(userUpdate))
    // })
    const handleChange = (evt) => {
        courseUpdate = {
            ...courseUpdate,
            [evt.target.name]: evt.target.value,
            // matKhau: "1233"
        }
    }
    const courseUpdateBtn = (values) => {
        console.log(values)
        dispatch(updateCourses(values))
    }

    useEffect(() => {
        dispatch(getCoursesInfo(courseID))

    }, [])

    console.log("Hi")


    if (updateCourse) {
        console.log(updateCourse)
        return <Redirect to="/admin/users" />;
    }
    return (
        <div className="container d-block mt-5 mb-5">
            <div className="card">
                <div className="card-header">
                    Thêm khóa học
                </div>
                <div className="card-body">

                    <div className="form-group">
                        <label htmlFor>Mã Khóa Học</label>
                        <input type="text" name="maKhoaHoc" id className="form-control" defaultValue={currentCourseInfo.maKhoaHoc} onChange={(evt) => handleChange(evt)} />
                  
                    </div>
                    <div className="form-group">
                        <label htmlFor>Bí danh</label>
                        <input type="text" name="biDanh" id className="form-control" defaultValue={currentCourseInfo.biDanh} onChange={(evt) => handleChange(evt)} />
         
                    </div>
                    <div className="form-group">
                        <label htmlFor>Tên Khóa Học</label>
                        <input type="text" name="tenKhoaHoc" id className="form-control" defaultValue={currentCourseInfo.tenKhoaHoc} onChange={(evt) => handleChange(evt)} />
                  
                    </div>
                    <div className="form-group">
                        <label htmlFor>Mô tả</label>
                        <input type="text" name="moTa" id className="form-control" defaultValue={currentCourseInfo.moTa} onChange={(evt) => handleChange(evt)} />
                  
                    </div>
                    <div className="form-group">
                        <label htmlFor>Lượt xem</label>
                        <input type="text" name="luotXem" id className="form-control" defaultValue={currentCourseInfo.luotXem} onChange={(evt) => handleChange(evt)} />
               
                    </div>
                    <div className="form-group">
                        <label htmlFor>Đánh giá</label>
                        <input type="text" name="danhGia" id className="form-control" defaultValue={currentCourseInfo.danhGia} onChange={(evt) => handleChange(evt)} />
   
                    </div>
                    <div className="form-group">
                        <label htmlFor>Hình ảnh</label>
                        <input type="text" name="hinhAnh" id className="form-control" defaultValue={currentCourseInfo.hinhAnh} onChange={(evt) => handleChange(evt)} />
              
                    </div>
                    <div className="form-group">
                        <label htmlFor>Mã Nhóm</label>
                        <input type="text" name="maNhom" id className="form-control" defaultValue={currentCourseInfo.maNhom} onChange={(evt) => handleChange(evt)} />
    
                    </div>
                    <div className="form-group">
                        <label htmlFor>Ngày tạo</label>
                        <input type="text" name="ngayTao" id className="form-control" defaultValue={currentCourseInfo.ngayTao} onChange={(evt) => handleChange(evt)} />
   
                    </div>
                    <div className="form-group">
                        <label htmlFor>Mã Danh Mục Khóa Học</label>
                        <input type="text" name="maDanhMucKhoahoc" id className="form-control" defaultValue={currentCourseInfo.danhMucKhoaHoc.maDanhMucKhoahoc} onChange={(evt) => handleChange(evt)} />
      
                    </div>
                    <div className="form-group">
                        <label htmlFor>Tài Khoản Người Tạo</label>
                        <input type="text" name="taiKhoanNguoiTao" id className="form-control" defaultValue={currentCourseInfo.nguoiTao.taiKhoan} onChange={(evt) => handleChange(evt)} />
                    
                    </div>

                    <div className="form-group">
                        <button classname="btn btn-success" onClick={() => courseUpdateBtn(courseUpdate)}>Sửa Khóa Học</button>
                    </div>


                </div>


            </div>


        </div >
    )
}
