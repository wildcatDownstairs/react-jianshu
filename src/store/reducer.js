import {combineReducers} from "redux-immutable";
import {reducer as headerReducer} from '../common/header/store'

// 这里的 combineReducers 由 redux-immutable,从而生成不可修改的 state
export default combineReducers({
  header: headerReducer
});
