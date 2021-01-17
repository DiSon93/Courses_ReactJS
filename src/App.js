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
import CoursesList from './Courses/CoursesList/index';
import Customer from './Layout/Homepage/Comment';
import AdminManagement from './Admin/AdminManagement';

import AdminRoute from './guards/AdminRoute/index';
import CoursesDetail from './Courses/CoursesDetail/index';
import AddCourses from './Admin/QuanLyKhoaHoc/addCourses';

import UserPage from './User/index';
import CourseSignUp from './User/DangKyKhoaHoc/dangKyKhoaHoc';

import UserAccount from './User/ThongTinTaiKhoan/UserAccount';
import UserDeleteCourses from './User/HuyGhiDanh/DeleteCourses';
import UserUpdate from './User/UpdateInformation/UpdateInformation';
import GetCoursesItem from './User/GetCourseItemAndDetail/getCoursesItem'


function App() {
  return (


    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path={["/","/coursesList", "/customer", "/courses/:courseID"]}>
            <Switch>
              <Route exact path="/" component={Layout} />
              <Route exact path="/coursesList" component = {CoursesList}/>
              <Route exact path="/customer" component = {Customer}/>
              <Route exact path="/courses/:courseID" component = {CoursesDetail}/>



            </Switch>
          </Route>

          <Route exact path={["/register", "/login"]}>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />


            </Switch>
          </Route>

          <Route exact path={["/admin/users", "/admin/addCourse"]}>
            <Switch>
              <AdminRoute exact path="/admin/users" component={AdminManagement} />
              <Route exact path="/admin/addCourse" component={AddCourses} />


            </Switch>
          </Route>

          <Route exact path={["/user", "/user/CourseSignUp", "/user/userAccount", "/user/deleteCourses", "/user/userUpdate", "/user/ItemsAndCourses"]}>
            <Switch>
              <Route exact path="/user" component={UserPage} />
              <Route exact path="/user/CourseSignUp" component={CourseSignUp} />
              <Route exact path="/user/userAccount" component={UserAccount} />
              <Route exact path="/user/deleteCourses" component={UserDeleteCourses} />
              <Route exact path="/user/userUpdate" component={UserUpdate} />
              <Route exact path="/user/ItemsAndCourses" component={GetCoursesItem} />



            </Switch>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
