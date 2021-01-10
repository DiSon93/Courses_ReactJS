import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div className="ourProducts row container-fluid">
                <div className="col-4 ourProducts__logo">
                    <img className="d-block" src="img/mobile.png" alt="" />
                </div>
                <div className="col-8 ourProducts__menu">
                    <h1 className="text-center">Our Courses features</h1>
                    <div className="product__features">
                        <div className="product__items item__1">
                            <img src="img/backup.png" alt="" />
                            <div className="product__title">
                                <h3>Data Backup</h3>
                                <p>Các khóa học về backup dữ liệu rất cần thiết cho những banh sinh viên mới ra trường.</p>
                            </div>

                        </div>
                        <div className="product__items item__2">
                            <img src="img/team.png" alt="" />
                            <div className="product__title">
                                <h3>Front End Developer</h3>
                                <p>Các khóa học với các kiến thức về lập trình web Front-end song song cùng với đó là những dự án thực tế.</p>
                            </div>

                        </div>

                    </div>
                    <div className="product__features item__3">
                        <div className="product__items">
                            <img src="img/tags.png" alt="" />
                            <div className="product__title">
                                <h3>Back End Developer</h3>
                                <p>Các khóa học với các kiến thức về lập trình web Front-end song song cùng với đó là những dự án thực tế.</p>
                            </div>

                        </div>
                        <div className="product__items item__4">
                            <img src="img/support.png" alt="" />
                            <div className="product__title">
                                <h3>Full-Stack</h3>
                                <p>Lập trình Full-Stack giúp bạn làm được cả Front-end và Back-end và lưu ý khóa học này chỉ dành cho những bạn nào Pro thôi nhé</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
