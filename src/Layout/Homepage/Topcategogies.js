import React, { Component } from 'react'

export default class Topcategogies extends Component {
    render() {
        return (
            <div className="topcategories">
                <div className="topcategories__name">
                    <h1>Top Categories</h1>
                    <a href="">DESIGN</a><br/>
                    <a href="">BUSINESS</a><br/>
                    <a href="">DEVELOPMENT</a><br/>
                    <a href="">IT AND SORFWARE</a><br/>
                    <a href="">MAKETING</a><br/>
                    <a href="">MUSIC</a><br/>
                    <a href="">PESONAL DEVELOPMENT</a><br/>
                    <a href="">PHOTOGRAPHY</a><br/>
                </div>
                
                <div className="topcategories__main">
                    <div className="topcategories__item">
                        <a href=""><img src="img/lohp-category-design.jpg" alt="" /> </a>
                        <div className="categories__overlay">
                            <h3>DESIGN</h3>
                            <button className="btn btn-primary">ENTER</button>
                        </div>
                    </div>
                    <div className="topcategories__item">
                        <a href=""> <img src="img/lohp-category-business.jpg" alt="" /></a>
                        <div className="categories__overlay">
                        <h3>BUSINESS</h3>
                            <button className="btn btn-primary">ENTER</button>
                        </div>
                    </div>
                    <div className="topcategories__item">
                        <a href=""><img src="img/lohp-category-development.jpg" alt="" /></a>
                        <div className="categories__overlay">
                        <h3>DEVELOPMENT</h3>
                            <button className="btn btn-primary">ENTER</button>
                        </div>
                    </div>
                    <div className="topcategories__item">
                        <a href=""><img src="img/lohp-category-it-and-software.jpg" alt="" /></a>
                        <div className="categories__overlay">
                        <h3>IT AND SOFTWARE</h3>
                            <button className="btn btn-primary">ENTER</button>
                        </div>
                    </div>
                    <div className="topcategories__item">
                        <a href=""><img src="img/lohp-category-marketing.jpg" alt="" /></a>
                        <div className="categories__overlay">
                        <h3>MARKETING</h3>
                            <button className="btn btn-primary">ENTER</button>
                        </div>
                    </div>
                    <div className="topcategories__item">
                        <a href=""><img src="img/lohp-category-music.jpg" alt="" /></a>
                        <div className="categories__overlay">
                        <h3>MUSIC</h3>
                            <button className="btn btn-primary">ENTER</button>
                        </div>
                    </div>
                    <div className="topcategories__item">
                        <a href=""><img src="img/lohp-category-personal-development.jpg" alt="" /></a>
                        <div className="categories__overlay">
                        <h3>PESONAL DEVELOPMENT</h3>
                            <button className="btn btn-primary">ENTER</button>
                        </div>
                    </div>
                    <div className="topcategories__item">
                        <a href=""><img src="img/lohp-category-photography.jpg" alt="" /></a>
                        <div className="categories__overlay">
                        <h3>PHOTOGRAPHY</h3>
                            <button className="btn btn-primary">ENTER</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
