import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCourseList } from '../redux/actions/useAPICourses'

export default function Students() {
    const { courseList, loading, error } = useSelector((state) => state.courseReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourseList())
        console.log(courseList)
    }, []);


    return (
        <div className="students">
            <div className="students__title">
                <h1>The most video are viewed by students</h1>
                <p>Choose from 130,000 online video courses with new additions published every month</p>
            </div>


            <div className="students__list">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="fronEnd-tab" data-toggle="tab" href="#fronEnd_students" role="tab" aria-controls="fronEnd" aria-selected="true">Front End</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="backEnd-tab" data-toggle="tab" href="#backEnd_students" role="tab" aria-controls="backEnd" aria-selected="false">Back End</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="fullStack-tab" data-toggle="tab" href="#fullStack_students" role="tab" aria-controls="fullStack" aria-selected="false">Full Stack</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="fronEnd_students" role="tabpanel" aria-labelledby="fronEnd-tab">
                        <div className="studentss">
                            <div className="row student__card">
                                {courseList.map((item) => {
                                    return <div key={item.maKhoaHoc} className="col-sm-3 student__items">
                                        <div className="card">
                                            <img src={item.hinhAnh} alt="course" className="card-image-top" />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">{item.tenKhoaHoc}</h4>
                                            <p className="card-text"> {item.moTa}</p>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="backEnd_students" role="tabpanel" aria-labelledby="backEnd-tab">
                        <div className="studentss">
                            <div className="row student__card">
                                {courseList.map((item) => {

                                    return <div key={item.maKhoaHoc} className="col-sm-3 student__items">
                                        <div className="card">
                                            <img src={item.hinhAnh} alt="course" className="card-image-top" />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">{item.tenKhoaHoc}</h4>
                                            <p className="card-text"> {item.moTa}</p>
                                        </div>
                                    </div>

                                })}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="fullStack_students" role="tabpanel" aria-labelledby="fullStack-tab">
                        <div className="studentss">
                            <div className="row student__card">
                                {courseList.map((item) => {

                                    return <div key={item.maKhoaHoc} className="col-sm-3 student__items">
                                        <div className="card">
                                            <img src={item.hinhAnh} alt="course" className="card-image-top" />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">{item.tenKhoaHoc}</h4>
                                            <p className="card-text"> {item.moTa}</p>
                                        </div>
                                    </div>

                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
