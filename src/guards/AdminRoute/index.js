// import React, { Component } from 'react';
// import { Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";


// export default function AdminRoute (props) {
//     const { currentUser, loading, error  } = useSelector((state) => state.loginReducer);
//     const { component: Component, currentUser , ...routerProps } = props;
//     return <Route {...routerProps} render={(props) => {
//         if(curentUser) {
//             if(curentUser.maLoaiNguoiDung === "GV"){
//                 return <Component {...props} />
//             }
//             return <Redirect to="/coursesDetail" />
//         }
//         return <Redirect to="/login" />
//     }} />
// }

import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

//<Admin 
//higher order component: là 1 function hoặc component nhần vào 1 tham số là 1 component khác
function AdminRoute(props) {
    const { component: Component, currentUser, ...routerProps } = props;
    //currentUser: là children
    //routerProps => {exact, path}
    // render() {
    return <Route {...routerProps} render={(props) => {
        if (currentUser) {
            //Đã đăng nhập
            if (currentUser.maLoaiNguoiDung === "GV") {
                return <Component {...props}/> //Lấy các props history, location, match
            }
            //Đã đăng nhập nhưng không là giảng viên
            return <Redirect to="/" />

        }
        //Chưa đăng nhập
        return <Redirect to="/login" />
        // return <Component {...props}/>
    }} />
    // }
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.loginReducer.currentUser,
    };
};

export default connect(mapStateToProps)(AdminRoute)
