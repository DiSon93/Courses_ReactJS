import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/css';


import Header from './Layout/Homepage/Header';
import Footer from './Layout/Homepage/Footer'

import Layout from './Layout/index';
import Login from './User/Login/index';
import Register from './User/Register';
import CoursesList from './Layout/Courses/CoursesList';
import Customer from './Layout/Homepage/Comment';
import AdminManagement from './Admin/AdminManagement';

import AdminRoute from './guards/AdminRoute/index';
import CoursesDetail from './Layout/Courses/CoursesDetail/index';
import AddCourses from './Admin/QuanLyKhoaHoc/addCourses';

import UserPage from './User/index';
import CourseSignUp from './User/DangKyKhoaHoc/dangKyKhoaHoc';

import UserAccount from './User/ThongTinTaiKhoan/UserAccount';
import UserDeleteCourses from './User/HuyGhiDanh/DeleteCourses';
import UserUpdate from './User/UpdateInformation/UpdateInformation';
import GetCoursesItem from './User/GetCourseItemAndDetail/getCoursesItem';


import ShownAllCourses from './Admin/QuanLyKhoaHoc/shownAllCourses';
import UpdateCourses from './Admin/QuanLyKhoaHoc/updateCourses';
import TakeInfoOfStudent from './Admin/QuanLyKhoaHoc/takeInfoOfStudent';

import ClippedDrawer from './User/index'

function App() {
  return (


    <div>

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={["/", "/coursesList", "/customer", "/courses/:courseID"]}>
            <Switch>
              <Route exact path="/" component={Layout} />
              <Route exact path="/coursesList" component={CoursesList} />
              <Route exact path="/customer" component={Customer} />
              <Route exact path="/courses/:courseID" component={CoursesDetail} />



            </Switch>
          </Route>

          <Route exact path={["/register", "/login"]}>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />


            </Switch>
          </Route>

          <Route exact path={["/admin/users", "/admin/addCourse", "/admin/shownAllCourses", "/admin/updateCourses/:courseID", "/admin/takeInfoOfStudent/:courseID"]}>
            <Switch>
              <AdminRoute exact path="/admin/users" component={AdminManagement} />
              <AdminRoute exact path="/admin/addCourse" component={AddCourses} />
              <AdminRoute exact path="/admin/shownAllCourses" component={ShownAllCourses} />
              <AdminRoute exact path="/admin/updateCourses/:courseID" component={UpdateCourses} />
              <AdminRoute exact path="/admin/takeInfoOfStudent/:courseID" component={TakeInfoOfStudent} />


            </Switch>
          </Route>

          <Route exact path={["/user", "/user/CourseSignUp", "/user/userAccount", "/user/deleteCourses", "/user/userUpdate", "/user/ItemsAndCourses"]}>
            {/* <ClippedDrawer class="col-3" /> */}
            <Switch class="col-9">

              <Route exact path="/user" component={UserPage} />
              <Route exact path="/user/CourseSignUp" component={CourseSignUp} />
              <Route exact path="/user/userAccount" component={UserAccount} />
              <Route exact path="/user/deleteCourses" component={UserDeleteCourses} />
              <Route exact path="/user/userUpdate" component={UserUpdate} />
              <Route exact path="/user/ItemsAndCourses" component={GetCoursesItem} />

            </Switch>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export default App;
