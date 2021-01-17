import React, { Component } from 'react'

export default class Teachers extends Component {
    render() {
        return (
            <div className="teacher">
                <div className="teacher__quote">
                    <h1>Ours Teachers</h1>
                    <p>Meet Professional Trainers</p>
                </div>

                <div className="oursTeacher d-flex owl-carousel  owl-theme">

                    <div className="card mark-Wilson" style={{ width: '16rem' }}>
                        <img className="card-img-top" src="img/author-image1.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Mark Wilson</h5>
                            <p className="card-text">I like stupid students.</p>
                            <hr />
                            <div className="card-body-contact">
                                <a href=""> <i class="fab fa-facebook"  style={{color: "gray"}}></i></a>
                                <a href=""> <i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-instagram" style={{color: "pink"}}></i></a>
                            </div>

                        </div>
                        <div className="overlay"><p>Có điều gì chưa muốn nói</p></div>
                    </div>
                    <div className="card catherine" style={{ width: '16rem' }}>
                        <img className="card-img-top" src="img/author-image2.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Catherine</h5>
                            <p className="card-text">Common baby!!!</p>
                            <hr />
                            <div className="card-body-contact">
                                <a href=""> <i class="fab fa-facebook"  style={{color: "gray"}}></i></a>
                                <a href=""> <i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-instagram" style={{color: "pink"}}></i></a>
                            </div>
                            
                        </div>
                        <div className="overlay"><p>Có điều gì chưa muốn nói</p></div>
                    </div>
                    <div className="card jessie-Ca" style={{ width: '16rem' }}>
                        <img className="card-img-top" src="img/author-image3.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Jessie Ca</h5>
                            <p className="card-text">Kill him</p>
                            <hr />
                            <div className="card-body-contact">
                                <a href=""> <i class="fab fa-facebook" style={{color: "gray"}}></i></a>
                                <a href=""> <i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-instagram" style={{color: "pink"}}></i></a>
                            </div>
                        
                        </div>
                        <div className="overlay"><p>Có điều gì chưa muốn nói</p></div>
                    </div>
                    <div className="card andrew-Berti" style={{ width: '16rem' }}>
                        <img className="card-img-top" src="img/author-image4.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Andrew Berti</h5>
                            <p className="card-text">Let me alone</p>
                            <hr />
                            <div className="card-body-contact">
                                <a href=""> <i class="fab fa-facebook" style={{color: "gray"}}></i></a>
                                <a href=""> <i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-instagram" style={{color: "pink"}}></i></a>
                            </div>
                           
                        </div>
                        <div className="overlay"><p>Có điều gì chưa muốn nói</p></div>
                    </div>


                </div>
            </div>
        )
    }
}
