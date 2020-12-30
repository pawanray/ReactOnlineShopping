import {FETCH_ALL_USERS} from '../actionTypes';
import {fetchAllUsers} from  '../../service/users'
export const getAllUsers = () =>{
    return (dispatch) =>{
        fetchAllUsers().then(res=>{
            dispatch({type:FETCH_ALL_USERS,payload:res.data})
        })
    }
}

// export const usersLogedInAction = (userLogedIn) =>{

//     debugger;
//    console.log('user logged in action',userLogedIn) 
//     return (dispatch) =>{
//             dispatch({type:"USER_LOGED_IN",payload:userLogedIn})
//     }
// }