import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className=" footer__section">
                <div className="container-fluid">
                    <div className="row footer">
                        <ul className="footer__content col-md-3 ">
                            <li className="hightline"> <h5><a href>Elucidat for Business</a></h5></li>
                            <li className="hightline"><a href>Teach on Elucidat</a></li>
                            <li><a href>Elucidat app</a></li>
                            <li><a href>About us</a></li>
                        </ul>
                        <ul className="footer__content col-md-3">
                            <li><a href>Contact</a></li>
                            <li><a href>Careers</a></li>
                            <li><a href>Blog</a></li>
                            <li><a href>Help and Support</a></li>
                        </ul>
                        <ul className="footer__content col-md-3">
                            <li><a href>Affiliate</a></li>
                            <li><a href>Sitemap</a></li>
                            <li><a href>Featured courses</a></li>
                        </ul>
                        <div className="footer__content col-12 col-md-3 select">
                            <select name id="language">
                                <option value>English</option>
                                <option value>Vietnamese</option>
                                <option value>Japanese</option>
                                <option value>Germany</option>
                                <option value>Spain</option>
                            </select>
                            <div className="contactUs">
                                <h5>Contact us</h5>
                                <a href=""><i class="fab fa-facebook-f"></i></a> 
                                <a href=""><i class="fab fa-linkedin-in"></i></a> 
                                <a href=""><i class="fab fa-twitter"></i></a> 
                               <a href=""><i class="fab fa-youtube"></i></a> 
                                <a href=""><i class="fab fa-github"></i></a> 
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container-fluid">
                    <div className="row footer">
                        <div className="last__us col-12 col-md-6">
                            <div className="logo">
                                <img src="img/elucidat-logo.svg" alt />
                                <span className="ml-4"> Copyright © 2020 Elucidat, Inc.</span>
                            </div>
                        </div>
                        <div className="last__us__us col-12 col-md-6 mr-0">
                            <a href="#">Policy and Cookie Policy</a>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                </div>
                <div className="footer__overlay" />
            </div>

        )
    }
}
