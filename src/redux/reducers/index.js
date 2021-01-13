import { combineReducers } from "redux";
import courseReducer from './Courses';
import loginReducer from './login';
import registerReducer from './Register'

const rootReducer = combineReducers ({
    courseReducer,
    loginReducer,
    registerReducer,
})
export default rootReducer;