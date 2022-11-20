import { combineReducers, createStore } from "redux";
import {reducer as UserReducer} from "./reducer/userReducer";

const rootReducer = combineReducers(
  {
    userDataState: UserReducer
  }
)

export const store = createStore(
  rootReducer,
)