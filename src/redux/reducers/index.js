import { combineReducers } from "redux";
import courseReducer from './Courses';
import loginReducer from './login';
import registerReducer from './Register';
import courseItemReducer from './courseItem';
import addCoursesReducer from './Admin/addCourses';
import courseSignUpReducer from './User/DangKyKhoaHoc';
import userAccountReducer from './User/ThongTinTaiKhoan';
import deleteCoursesReducer from './User/DeleteCourses';
import userUpdateReducer from './User/userUpdate';
import itemOfCourseReducer from './User/getItemsOfCourse'

const rootReducer = combineReducers ({
    courseReducer,
    loginReducer,
    registerReducer,
    courseItemReducer,
    addCoursesReducer,
    courseSignUpReducer,
    userAccountReducer,
    deleteCoursesReducer,
    userUpdateReducer,
    itemOfCourseReducer
})
export default rootReducer;