import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCourseInItem } from '../../redux/actions/courseItems';
import { getItemsOfCourse } from '../../redux/actions/User/getItemsOfCourse';




export default function GetCoursesItem() {
    const { courseItem, loading, error } = useSelector((state) => state.courseItemReducer);
    const { itemsCourse } = useSelector((state) => state.itemOfCourseReducer)

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getItemsOfCourse());

        dispatch(getCourseInItem("BackEnd"))

    }, []);

    const handleChange = (value) => {
        dispatch(getCourseInItem(value))
    }


    return (

        <div className="courses">
            <div className="courses__title">
                <h1>The world's largest selection of courses</h1>
                <p>Choose from 130,000 online video courses with new additions published every month</p>

            </div>

            <div className="courses__list">
                <ul className="nav nav-tabs d-flex" id="myTab" role="tablist" style={{ justifyContent: "center" }}>

                    {itemsCourse.map(item => {
                        const hrefItem = `#${item.maDanhMuc}`
                        return (<li className="nav-item" onClick={() => handleChange(item.maDanhMuc)}>
                            <a className="nav-link" id={item.maDanhMuc} data-toggle="tab" href={hrefItem} role="tab" aria-controls={item.maDanhMuc} aria-selected="true" >{item.maDanhMuc}</a>
                        </li>)
                    })}

                </ul>
                <div className="tab-content" id="myTabContent">

                    {/* <img src={courseList[0].hinhAnh} alt=""/> */}
                    {/* {courseList[6].moTa} */}
                    {/* </div> */}
                    <div className="tab-pane fade show active" id="BackEnd" role="tabpanel" aria-labelledby="backEnd-tab">
                        <div className="coursess">

                            <div className="row courses__card mt-5 d-flex" style={{ justifyContent: "center" }} >
                                {courseItem.map((item) => {
                                    let courseID = `/courses/${item.maKhoaHoc}`
                                    return <div key={item.maKhoaHoc} className="courses__items mr-3" style={{ width: "400px" }}>
                                        <a className="card" href={courseID}>
                                            <img src={item.hinhAnh} alt="course" className="card-image-top" />
                                        </a>
                                        <div className="card-body mt-0">
                                            <h4 className="card-title">{item.tenKhoaHoc}</h4>
                                            <p className="card-text">Giáo viên: {item.nguoiTao.hoTen}</p>
                                            <span className="card-text mr-2">Đánh giá: </span>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half"></i>
                                            <i className="score">(4.0)</i>
                                            <p className="text-right danhGia">Very Good</p>
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

