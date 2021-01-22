import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { takeInfoOfStudent } from '../../redux/actions/Admin/takeInfoOfStudent'

export default function TakeInfoOfStudent() {
    const { courseID } = useParams();
    console.log(courseID)
    const dispatch = useDispatch();
    const { currentStudentInfo, loading, error } = useSelector(state => state.getStudentInfoByCourseReducer)

    useEffect(() => {
        dispatch(takeInfoOfStudent(courseID))
    }, []);
    console.log(currentStudentInfo);



    return (
            <div className="container mt-6">
                <div className="danhSach mb-6">
                    <h1>  Danh Sách Học Viên Đã Đăng Ký Khóa Học</h1>
                  
                </div>
                <div className="row">
                    <table className="table">
                        <thead>

                            <th>STT</th>
                            <th>Tài Khoản</th>
                            <th>Bí Danh</th>
                            <th>Học Tên</th>

                        </thead>
                        <tbody>
                            {currentStudentInfo.lstHocVien.map((item, index) => {
                                return (
                                    <tr>
                                         <td>{index + 1} </td>
                                        <td>{item.taiKhoan}</td>
                                        <td>{item.biDanh}</td>
                                        <td>{item.hoTen}</td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                </div>
            </div>
  
    )
}
