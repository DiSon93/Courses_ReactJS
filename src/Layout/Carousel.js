import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="img/hero-bg.jpg" alt="First slide" />
                        <div className="carousel-info">
                            <h2>Unleash Your Learning Online</h2>
                            <p>Futureproof your business with sustainable, scalable online learning. More than just an authoring platform.</p>
                            <button>Take a course</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img  className="d-block w-100" src="img/cover.jpg" alt="Second slide" />
                        <div className="carousel-info">
                            <h2>Unleash Your Learning Online</h2>
                            <p>Futureproof your business with sustainable, scalable online learning. More than just an authoring platform.</p>
                            <button>Take a course</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img  className="d-block w-100" src="img/cathy-bg2.jpg" alt="Third slide" />
                        <div className="carousel-info">
                            <h2>Unleash Your Learning Online</h2>
                            <p>Futureproof your business with sustainable, scalable online learning. More than just an authoring platform.</p>
                            <button>Take a course</button>
                        </div>
                    </div>
                   
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
           


        )
    }
}
