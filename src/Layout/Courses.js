import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCourseList } from '../redux/actions/useAPICourses';
import Slider from "react-slick";


export default function Courses() {
    const { courseList, loading, error } = useSelector((state) => state.courseReducer);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getCourseList())
        console.log(courseList)
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        slickGoTo: true,
        centerPadding: 30
      }; 

    return (

        <div className="courses">
            <div className="courses__title">
                <h1>The world's largest selection of courses</h1>
                <p>Choose from 130,000 online video courses with new additions published every month</p>

            </div>

            <div className="courses__list">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="fronEnd-tab" data-toggle="tab" href="#fronEnd" role="tab" aria-controls="fronEnd" aria-selected="true">Front End</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="backEnd-tab" data-toggle="tab" href="#backEnd" role="tab" aria-controls="backEnd" aria-selected="false">Back End</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="fullStack-tab" data-toggle="tab" href="#fullStack" role="tab" aria-controls="fullStack" aria-selected="false">Full Stack</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="fronEnd" role="tabpanel" aria-labelledby="fronEnd-tab">
                        <div className="coursess">
                            <div className="courses__status d-flex mt-0">
                                <div className="status">  Khóa học Front-End với vô vàn khó khăn và thử thách, bạn đã sẵn sàng đương đầu với nó chưa nè.</div>

                                <img src="img/prettyGirl.jpg" alt="" />
                            </div>

  
                            <Slider  {...settings} className="row courses__card mt-3"  >
                                {courseList.map((item) => {
                                  let courseID = `/courses/${item.maKhoaHoc}`
                                    return <div key={item.maKhoaHoc} className="courses__items mr-3">
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
                                            <i className="score">(4.5)</i>
                                            <p className="text-right danhGia">Very Good</p>
                                        </div>
                                    </div>

                                })}
                            </Slider>
                        </div>
                    </div>

                    {/* <img src={courseList[0].hinhAnh} alt=""/> */}
                    {/* {courseList[6].moTa} */}
                    {/* </div> */}
                    <div className="tab-pane fade" id="backEnd" role="tabpanel" aria-labelledby="backEnd-tab">
                        <div className="coursess">
                            <div className="courses__status d-flex">
                                <div className="status">  Khóa học Back-End với vô vàn khó khăn và thử thách, bạn đã sẵn sàng đương đầu với nó chưa nè.</div>

                                <img src="img/prettyGirl2.jpg" alt="" />
                            </div>
                            <Slider  {...settings} className="row courses__card mt-3"  >
                                {courseList.map((item) => {

                                    return <div key={item.maKhoaHoc} className="courses__items mr-3">
                                        <div className="card">
                                            <img src={item.hinhAnh} alt="course" className="card-image-top" />
                                        </div>
                                        <div className="card-body mt-0">
                                            <h4 className="card-title">{item.tenKhoaHoc}</h4>
                                            <p className="card-text">Giáo viên: {item.nguoiTao.hoTen}</p>
                                            <span className="card-text mr-2">Đánh giá: </span>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half"></i>
                                            <i className="score">(4.5)</i>
                                            <p className="text-right danhGia">Very Good</p>
                                        </div>
                                    </div>

                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="fullStack" role="tabpanel" aria-labelledby="fullStack-tab"> <div className="container-fluid">
                        <div className="coursess">
                            <div className="courses__status d-flex">
                                <div className="status">  Khóa học Full-Stack với vô vàn khó khăn và thử thách, bạn đã sẵn sàng đương đầu với nó chưa nè.</div>

                                <img src="img/prettyBoy.jpg" alt="" />
                            </div>
                            <Slider  {...settings} className="row courses__card mt-3"  >
                                {courseList.map((item) => {

                                    return <div key={item.maKhoaHoc} className="courses__items mr-3">
                                        <div className="card">
                                            <img src={item.hinhAnh} alt="course" className="card-image-top" />
                                        </div>
                                        <div className="card-body mt-0">
                                            <h4 className="card-title">{item.tenKhoaHoc}</h4>
                                            <p className="card-text">Giáo viên: {item.nguoiTao.hoTen}</p>
                                            <span className="card-text mr-2">Đánh giá: </span>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half"></i>
                                            <i className="score">(4.5)</i>
                                            <p className="text-right danhGia">Very Good</p>
                                        </div>
                                    </div>

                                })}
                            </Slider>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

