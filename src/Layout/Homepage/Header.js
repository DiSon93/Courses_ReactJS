import React  from 'react';
import { useSelector, useDispatch }from 'react-redux';
import { userLogOut } from  '../../redux/actions/User/logOut';
import { Link, NavLink } from "react-router-dom"


export default function Header () {
    // const dispatch = useDispatch();

    // const logOut = (value) => {
    //     dispatch(userLogOut(value))
    // }

    // render() {
        return (
 <nav className="navbar navbar-expand-lg navbar-light header-item">
                <div className="col-sm-4 header-logo">
                    <Link className="navbar-brand" to="/">
                        <img src="img/elucidat-logo.svg" alt="logo" />
                    </Link>
                </div>

                <div className="collapse navbar-collapse col-sm-8" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/user">USER <span className="sr-only">(current)</span></Link>
                        </li>
                     
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/users">ADMIN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/coursesList">ALL COURSES LIST</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/customer">CUSTOMERS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">REGISTER</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">LOG IN</Link>
                        </li>
                        {/* <li className="nav-item">
                            <button className="nav-link" onClick={() => logOut("")}>LOG OUT</button>
                        </li> */}
                      
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        )
    // }
}
