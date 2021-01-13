import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCourseList } from '../../redux/actions/useAPICourses';


export default function CoursesList() {
    const { courseList, loading, error } = useSelector((state) => state.courseReducer);

    const dispatch = useDispatch();

    useEffect(()=> {
        console.log("Hello!!!");
        dispatch(getCourseList());
    }, []);

    console.log("Hello!!!");
    return (
       
        <div className="container mt-3">
            <div className="row">
                {courseList.map((item) => {
                    return <div key={item.maKhoaHoc} className="col-sm-4">
                        <div className="card">
                            <img style={{width: "100%", height: "300px" }} src={item.hinhAnh} alt="course" className = "card-image-top"/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{item.tenKhoaHoc}</h4>
                            <p className="card-text"> {item.moTa}</p>
                        </div>
                    </div>
                })}
            </div>
            
        </div>
    )
}

