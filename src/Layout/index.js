import React, { Component } from 'react';
import Header from './Homepage/Header';
import Carousel from './Homepage/Carousel';
import Partner from './Homepage/Partner';
import Products from './Homepage/Products';
import Courses from './Homepage/Courses';
import Students from './Homepage/Students';
import Teachers from './Homepage/Teachers';
import DigitalData from './Homepage/DigitalData';
import Topcategogies from './Homepage/Topcategogies';
import Comment from './Homepage/Comment';
import Trategy from './Homepage/Trategy';
import Footer from './Homepage/Footer';

import $ from "jquery";


export default class Layout extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                <Carousel />
                <Partner />
                <Products />
                <Courses />
                <Students />
                <Teachers />
                {/* <DigitalData /> */}
                <Topcategogies />
                <Comment />
                <Trategy />
                {/* <Footer /> */}

            </div>

        )
    }
}
