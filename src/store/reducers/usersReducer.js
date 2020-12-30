
import {FETCH_ALL_USERS} from '../actionTypes';
const initialState = {
  allUsers:[]
}
const userReducer = (state = initialState,{type,payload}) =>{
  switch(type){
    case FETCH_ALL_USERS:
      return {
        ...state,
        allUsers:payload
      }
      default:
        return{
        ...state
      }
  }
   
} 

export default userReducer