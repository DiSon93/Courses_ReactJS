import React, { Component } from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Partner from './Partner';
import Products from './Products';
import Courses from './Courses';
import Students from './Students';
import Teachers from './Teachers';
import DigitalData from './DigitalData';
import Topcategogies from './Topcategogies';
import Comment from './Comment';
import Trategy from './Trategy';
import Footer from './Footer'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
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
                <Footer />

            </div>

        )
    }
}
