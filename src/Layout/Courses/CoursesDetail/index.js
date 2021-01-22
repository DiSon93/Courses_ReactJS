import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseList } from '../../../redux/actions/useAPICourses';

export default function CoursesDetail() {
    const { courseList, loading, error } = useSelector(state => state.courseReducer);
    // const [ courseDetail, setCourseDetail ] = useState([])

    var url = window.location.pathname;
    var courseID = url.slice(9)
    console.log(courseID)
    console.log(url)
    // console.log(window.match.params.courseID)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourseList())
        console.log("Hi")
        // setCourseDetail(courseFilter);
    }, [])
    let courseDetail = courseList.filter((item, index) => {
        return item.maKhoaHoc == courseID;
    })

    console.log(courseList);
    console.log(courseDetail)
   

    return (
        <div className="container d-flex" style={{justifyContent: "center"}}>
            <div className="row">
                {courseDetail.map((item) => {
                    return <div key={item.maKhoaHoc}>
                        <h1>{item.tenKhoaHoc}</h1>
                        <img src={item.hinhAnh} alt="" />
                        <p>{item.moTa}</p>
                        <p>Lượt xem: {item.luotXem}</p>
                        <span>Giảng viên: {item.nguoiTao.hoTen}</span>
                    </div>
                })}

            </div>
        </div>
    )
}
