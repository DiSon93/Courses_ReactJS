// import React from 'react'
import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom"
import { Link } from "react-router-dom"


import DangKyKhoaHoc from "./DangKyKhoaHoc/dangKyKhoaHoc";
import UserAccount from './ThongTinTaiKhoan/UserAccount';
import UserDeleteCourses from './HuyGhiDanh/DeleteCourses';
import UserUpdate from './UpdateInformation/UpdateInformation'

export default function User() {

    return (
        <div className="container-fluid user_interface" style={{ backgroundImage: "url(img/trainingcourseflyer.jpg)" }}>
            <div className="userPage">
                <h1>Đây là trang khóa học của tôi</h1>
                <Link to="/user/CourseSignUp"> <i class="fa fa-sticky-note mr-2" ></i>Đăng ký khóa học</Link>
                <br />
                <Link to="/user/userAccount"><i class="fa fa-sticky-note mr-2"></i>Thông tin cá nhân</Link>
                <br />
                <Link to="/user/deleteCourses"><i class="fa fa-sticky-note mr-2"></i>Hủy đăng ký</Link>
                <br />
                <Link to="/user/userUpdate"><i class="fa fa-sticky-note mr-2"></i>Update thông tin cá nhân của tôi</Link>
                <br />
                <Link to="/user/ItemsAndCourses"><i class="fa fa-sticky-note mr-2"></i>Lấy danh mục và thông tin chi tiết khóa học</Link>

            </div>
        </div>
    )
}



// const drawerWidth = 240;

// const useStyles = makeStyles((theme) =>
//     createStyles({
//         root: {
//             display: 'flex',
//         },
//         appBar: {
//             zIndex: theme.zIndex.drawer + 1,
//         },
//         drawer: {
//             width: drawerWidth,
//             flexShrink: 0,
//         },
//         drawerPaper: {
//             width: drawerWidth,
//         },
//         drawerContainer: {
//             overflow: 'auto',
//         },
//         content: {
//             flexGrow: 1,
//             padding: theme.spacing(3),
//         },
//     }),
// );

// const sideBarData = [
//     {
//         title: "User",
//         path: "/user",
//         icon: <MailIcon />,
//         cName: 'nav-text'
//     },
//     {
//         title: "Đăng Ký Khóa Học",
//         path: "/user/CourseSignUp",
//         icon: <MailIcon />,
//         cName: 'nav-text'
//     },
//     {
//         title: "Thông tin cá nhân",
//         path: "/user/userAccount",
//         icon: <MailIcon />,
//         cName: 'nav-text'
//     },
//     {
//         title: "Hủy đăng ký",
//         path: "/user/deleteCourses",
//         icon: <MailIcon />,
//         cName: 'nav-text'
//     },
//     {
//         title: "Update thông tin",
//         path: "/user/userUpdate",
//         icon: <MailIcon />,
//         cName: 'nav-text'
//     }
// ]

// export default function ClippedDrawer() {
//     const classes = useStyles();


//     return (
//         <div className={classes.root}>
//             {/* <CssBaseline /> */}
//             {/* <AppBar position="fixed" className={classes.appBar}> */}
//                 {/* <Toolbar>
//                     <Typography variant="h6" noWrap>
//                         Clipped drawer
//           </Typography>
//                 </Toolbar> */}
//             {/* </AppBar> */}
//             <Drawer
//                 className={classes.drawer}
//                 variant="permanent"
//                 classes={{
//                     paper: classes.drawerPaper,
//                 }}
//             >
//                 <Toolbar />
//                 <div className={classes.drawerContainer}>

//                     <List>
//                         {sideBarData.map((item, index) => (
//                             <ListItem button key={index} style={{textDecoration: "none"}}>
//                                 <Link to={item.path} style={{ display: "flex" }}>
//                                     <ListItemIcon>{item.icon}</ListItemIcon>
//                                     <ListItemText primary={item.title} />
//                                 </Link>
//                             </ListItem>
//                         ))}
//                     </List>
//                 </div>
//             </Drawer>
//             <main className={classes.content}>
//                 {/* <Toolbar /> */}
//                 {/* <BrowserRouter> */}
//                 <Switch>
//                     <Route exact path="/user" render={User} />
//                     <Route path="/user/CourseSignUp" component={DangKyKhoaHoc} />
//                     <Route exact path="/user/userAccount" component={UserAccount} />
//                     <Route exact path="/user/deleteCourses" component={UserDeleteCourses} />
//                     <Route exact path="/user/userUpdate" component={UserUpdate} />
//                 </Switch>
//                 {/* </BrowserRouter> */}
//                 {/* <DangKyKhoaHoc/> */}

//             </main>
//         </div>
//     );
// }