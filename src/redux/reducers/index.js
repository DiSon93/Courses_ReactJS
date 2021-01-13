import { combineReducers } from "redux";
import courseReducer from './Courses';
import loginReducer from './login';
import registerReducer from './Register';
import courseItemReducer from './courseItem'

const rootReducer = combineReducers ({
    courseReducer,
    loginReducer,
    registerReducer,
    courseItemReducer,
})
export default rootReducer;