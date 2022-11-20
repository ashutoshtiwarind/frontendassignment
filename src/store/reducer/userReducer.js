import { ADD_USER_DATA } from "../actionType/userActionType"


const init = {userData: []}
export const reducer = (state = init, { type, payload}) => {
  switch(type) {
    case ADD_USER_DATA:
      return {
        ...state,
        userData: [...state.userData, ...payload]
      } 
    default:
    return state;
  }
}