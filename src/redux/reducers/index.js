import { combineReducers } from "redux";
import phones from "./phone";
import auth from './auth';

export default combineReducers({
  phones,
  auth
});
