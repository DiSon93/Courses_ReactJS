import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCourses } from '../../redux/actions/Admin/addCourses'
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { yupSchema } from '../../utils/yupSchema';
import  * as yup from 'yup'


const CourseSignupSchema = yup.object().shape({
    maKhoaHoc: yup.string().required(),
    biDanh: yup.string().required(),
    tenKhoaHoc: yup.string().required(),
    moTa: yup.string().required().min(10,"Too Short!!"),
    hinhAnh: yup.string().required(),
    maNhom: yup.string().required(),
    ngayTao: yup.string().required(),
    maDanhMucKhoaHoc: yup.string().required(),  
    taiKhoanNguoiTao: yup.string().required(),
  });


export default function AddCourses() {

    const { currentCourse, loading, error } = useSelector((state) => state.addCoursesReducer);
    const dispatch = useDispatch();

    const [ hinhAnh, setHinhAnh ] =  useState('')

    if (currentCourse) {
        console.log(currentCourse)
        return <Redirect to="/" />;
    }
    return (
        <div className="container d-block mt-5 mb-5">
            <div className="card">
                <div className="card-header">
                    Thêm khóa học
                </div>
                <div className="card-body">
                    <Formik
                        initialValues={{
                            maKhoaHoc: "",
                            biDanh: "",
                            tenKhoaHoc: "",
                            moTa: "",
                            luotXem: 0,
                            danhGia: 0,
                            hinhAnh: "",
                            maNhom: "",
                            ngayTao: "",
                            maDanhMucKhoaHoc: "",
                            taiKhoanNguoiTao: "",
                        }}
                        
                        validationSchema={CourseSignupSchema}
                        

                        onSubmit={(values) => {
                            console.log(values)
                            dispatch(addCourses(values))
                        }}

                    >
                        {({ isSubmitting }) => (
                            <Form>

                                <div className="form-group">
                                    <label htmlFor>Mã Khóa Học</label>
                                    <Field type="text" name="maKhoaHoc" id className="form-control" placeholder />
                                    <ErrorMessage name="maKhoaHoc" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Bí danh</label>
                                    <Field type="text" name="biDanh" id className="form-control" placeholder />
                                    <ErrorMessage name="biDanh" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Tên Khóa Học</label>
                                    <Field type="text" name="tenKhoaHoc" id className="form-control" placeholder />
                                    <ErrorMessage name="tenKhoaHoc" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Mô tả</label>
                                    <Field type="text" name="moTa" id className="form-control" placeholder />
                                    <ErrorMessage name="moTa" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Lượt xem</label>
                                    <Field type="text" name="luotXem" id className="form-control" placeholder />
                                    <ErrorMessage name="luotXem" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Đánh giá</label>
                                    <Field type="text" name="danhGia" id className="form-control" placeholder />
                                    <ErrorMessage name="danhGia" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Hình ảnh</label>
                                    <Field type="file" name="hinhAnh" id className="form-control" placeholder/>
                                    <ErrorMessage name="hinhAnh" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Mã Nhóm</label>
                                    <Field type="text" name="maNhom" id className="form-control" placeholder />
                                    <ErrorMessage name="maNhom" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Ngày tạo</label>
                                    <Field type="text" name="ngayTao" id className="form-control" placeholder />
                                    <ErrorMessage name="ngayTao" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Mã Danh Mục Khóa Học</label>
                                    <Field type="text" name="maDanhMucKhoaHoc" id className="form-control" placeholder />
                                    <ErrorMessage name="maDanhMucKhoaHoc" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Tài Khoản Người Tạo</label>
                                    <Field type="text" name="taiKhoanNguoiTao" id className="form-control" placeholder />
                                    <ErrorMessage name="taiKhoanNguoiTao" />
                                </div>

                                <div className="form-group">
                                    <Button  variant="contained" color="primary" type="submit" classname="btn btn-success">Thêm Khóa Học</Button>
                             
                                </div>
                                {error? <div className="alert-alert-danger">{error}</div> : null}

                            </Form>
                        )}


                    </Formik>
                </div>


            </div>

        </div >
    )
}
