import { combineReducers } from "redux"
import courseReducer from './Courses'

const rootReducer = combineReducers ({
    courseReducer,
})
export default rootReducer;