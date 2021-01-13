import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
 <nav className="navbar navbar-expand-lg navbar-light header-item">
                <div className="col-sm-4 header-logo">
                    <a className="navbar-brand" href="/">
                        <img src="img/elucidat-logo.svg" alt="logo" />
                    </a>
                </div>

                <div className="collapse navbar-collapse col-sm-8" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">FEATURE <span className="sr-only">(current)</span></a>
                        </li>
                     
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/users">ADMIN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/coursesList">ALL COURSES LIST</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/customer">CUSTOMERS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">REGISTER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">LOG IN</a>
                        </li>
                      
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        )
    }
}
