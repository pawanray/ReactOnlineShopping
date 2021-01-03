import {FETCH_ALL_USERS, FETCH_LOGED_IN_USER, LOGOUT_USER} from '../actionTypes';
import {fetchAllUsers} from  '../../service/users'
export const getAllUsers = () => dispatch =>{
    return fetchAllUsers().then(res=>{
            dispatch({type:FETCH_ALL_USERS,payload:res.data})
        })
}

export const getLogedInUser = (user) => dispatch => {
    return fetchAllUsers().then(res=>{
            const getUser = res.data ? res.data.find(users=>{
                      return users.username === user.username && users.password === user.password
            }):{}
            dispatch({type:FETCH_LOGED_IN_USER,payload:getUser})
            return [true, false];
        }).catch(err=>{
            console.log(err)
            return [false, true];
        })
    
}

export const logoutUser = (logout) => dispatch =>{
    return dispatch({type:LOGOUT_USER,payload:logout})
}