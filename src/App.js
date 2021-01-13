import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './Style/css'

import Header from './Layout/Header';
import Footer from './Layout/Footer'

import Layout from './Layout/index';
import Login from './Login/index';
import Register from './Register';
import CoursesList from './Courses/CoursesList/index';
import Customer from './Layout/Comment';
import AdminManagement from './Admin/AdminManagement';

import AdminRoute from './guards/AdminRoute/index';
import CoursesDetail from './Courses/CoursesDetail/index'


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

          <Route exact path={["/admin/users"]}>
            <Switch>
              <AdminRoute exact path="/admin/users" component={AdminManagement} />
              {/* <Route exact path="/register" component={Register} /> */}


            </Switch>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
