import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div className="container-fluid feedback">
                <div className="feedback__quote">
                    <h2>What our students have to say</h2>
                </div>
                <div className="feedback__content  owl-carousel owl-theme">
                    <div className="feedback__comment">
                        <div className="feedback__name">
                            <img src="./img/1.jpg" alt />
                            <h5 className="ml-3">Borivoje</h5>
                        </div>
                        <div className="feedback__talk">
                            <p>Udemy is a life saver. I don't have the time or money for a college education. My goal is to
          become a freelance web developer, and thanks to Udemy, I'm really close. <br />
                 Rate: 
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half"></i></p> <br />

                        </div>
                    </div>
                    <div className="feedback__comment right">
                        <div className="feedback__name">
                            <img src="./img/2.jpg" alt />
                            <h5 className="ml-3">Dipesh</h5>
                        </div>
                        <div className="feedback__talk">
                            <p>I believe in lifelong learning and Udemy is a great place to learn from experts. I've learned
          a lot and recommend it to all my friends. <br/>
          Rate: 
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half"></i>
          </p>
                           
                        </div>
                    </div>
                    <div className="feedback__comment comment-3">
                        <div className="feedback__name">
                            <img src="./img/1.jpg" alt />
                            <h5 className="ml-3">Kathy</h5>
                        </div>
                        <div className="feedback__talk">
                            <p>My children and I LOVE Udemy! The courses are fantastic and the instructors are so fun and
          knowledgeable. I only wish we found it sooner. <br/>
          <span>Rate: </span>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
</p>
                           
                        </div>
                    </div>
                    <div className="feedback__comment right-2">
                        <div className="feedback__name">
                            <img src="./img/3.jpg" alt />
                            <h5 className="ml-3">Zulaika</h5>
                        </div>
                        <div className="feedback__talk">
                            <p>I work in project management and joined Udemy because I get great courses for less. The
                            instructors are fantastic, interesting, and helpful. I plan to use Udemy for a long time! <br/>
                            <span>Rate: </span>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
        </p>
                            
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
