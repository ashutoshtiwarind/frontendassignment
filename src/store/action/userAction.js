import { ADD_USER_DATA } from "../actionType/userActionType"

export const addUserData = (data) => ({
  type: ADD_USER_DATA,
  payload: data
});