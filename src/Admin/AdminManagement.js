import React from 'react'
// import '../Style/css'

export default function AdminManagement() {
    console.log("Hello!!!")
    return (
        <div className="container d-flex admin_management mt-4" style={{justifyContent: "space-around"}}>
            <div className="course_management col-sm-5">
                <h2>Course Management</h2>
                <ul>
                    <li><a href="/admin/addCourse">Thêm khóa học</a></li>
                    <li><a href="">Cập nhật khóa học</a></li>
                    <li><a href="">Lấy thông tin học viên khóa học</a></li>
                    <li><a href="">Xóa khóa học</a></li>
                    <li><a href="">Ghi danh khóa học</a></li>
                    <li><a href="">Đăng ký khóa học</a></li>
                    <li><a href="">Hủy ghi danh</a></li>
                    <li><a href="">Upload hình ảnh khóa học</a></li>
                    <li><a href="">Demo</a></li>
                    <li><a href="">Cập nhật khóa học Upload</a></li>
                    <li><a href="">Thêm khóa học Upload hình</a></li>
                    <li><a href="">Quản lý khóa học</a></li>


                </ul>
            </div>
            <div className="user_management col-sm-5">
                <h2>User Management</h2>
                <ul>
                    <li><a href="">Lấy thông tin người dùng</a></li>
                    <li><a href="">Lấy danh sách người dùng</a></li>
                    <li><a href="">Lấy danh sách người dùng _ Phân trang</a></li>
                    <li><a href="">Tìm kiếm người dùng</a></li>
                    <li><a href="">Thông tin tài khoản</a></li>
                    <li><a href="">Thêm người dùng</a></li>
                    <li><a href="">Cập nhật thông tin người dùng</a></li>
                    <li><a href="">Xóa người dùng</a></li>
                    <li><a href="">Lấy danh sách khóa học chưa ghi danh</a></li>
                    <li><a href="">Lấy danh sách khóa học cho xét duyệt</a></li>
                    <li><a href="">Lấy danh sách khóa học đã xét duyệt</a></li>
                    <li><a href="">Lấy danh sánh người dùng chưa ghi danh</a></li>
                    <li><a href="">Lấy danh sách học viên cho xét duyệt</a></li>
                    <li><a href="">Lấy danh sách học viên khóa học</a></li>
                  
                </ul>
            </div>
        </div>
    )
}
