import React from 'react'

export default function User() {

    return (
        <div className="container-fluid"  style={{ backgroundImage: "url(img/trainingcourseflyer.jpg)" }}>
            <div className="userPage">
                <h1>Đây là trang khóa học của tôi</h1>
                <a href="/user/CourseSignUp"> <i class="fa fa-sticky-note mr-2" ></i>Đăng ký khóa học</a>
                <br />
                <a href="/user/userAccount"><i class="fa fa-sticky-note mr-2"></i>Thông tin cá nhân</a>
                <br />
                <a href="/user/deleteCourses"><i class="fa fa-sticky-note mr-2"></i>Hủy đăng ký</a>
                <br />
                <a href="/user/userUpdate"><i class="fa fa-sticky-note mr-2"></i>Update thông tin cá nhân của tôi</a>
                <br />
                <a href="/user/ItemsAndCourses"><i class="fa fa-sticky-note mr-2"></i>Lấy danh mục và thông tin chi tiết khóa học</a>

            </div>
        </div>
    )
}
