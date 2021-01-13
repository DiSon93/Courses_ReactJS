import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseList } from '../../redux/actions/useAPICourses';

export default function CoursesDetail() {
    const { courseList, loading, error } = useSelector(state => state.courseReducer);
    // const [ courseDetail, setCourseDetail ] = useState([])

    var url = window.location.pathname;
    var courseID = url.slice(9)
    console.log(courseID)
    console.log(url)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourseList())
        console.log("Hi")
        // setCourseDetail(courseFilter);
    },[])
    const courseDetail = courseList.filter((item, index) => {
        return item.maKhoaHoc == courseID;
    })
 
    console.log(courseList);
    console.log(courseDetail)

    return (
        <div className="container">
           <div className="row">
               <h1>{courseDetail.tenKhoaHoc}</h1>
               <img src={courseDetail.hinhAnh} alt=""/>
               <p>{courseDetail.moTa}</p>
               <p>Lượt xem: {courseDetail.luotXem}</p>
           </div>
        </div>
    )
}
