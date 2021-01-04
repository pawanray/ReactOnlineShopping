
import {FETCH_ALL_USERS, FETCH_LOGED_IN_USER, LOGOUT_USER, ADD_USER} from '../actionTypes';
const initialState = {
  allUsers:[],
  logedInUser:{},
  register:[]
}
const userReducer = (state = initialState,{type,payload}) =>{
  switch(type){
    case FETCH_ALL_USERS:
      return {
        ...state,
        allUsers:payload
      }
      case FETCH_LOGED_IN_USER:
      return {
        ...state,
        logedInUser:payload
      }
      case ADD_USER:
        return {
          ...state,
          register:[...state.register,payload]
        }

      case LOGOUT_USER:
        return {
          ...state,
          logedInUser:payload
        }
      default:
        return{
        ...state
      }
  }
   
} 

export default userReducer