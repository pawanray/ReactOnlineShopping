import {FETCH_ALL_CART, FETCH_USER_CART, DELETE_USER_CART} from '../actionTypes';

export const getAllCart = (data) => dispatch =>{
   return dispatch({type:FETCH_ALL_CART,payload:data})
}

export const getUserCart = (data) => dispatch =>{
    return dispatch({type:FETCH_USER_CART,payload:data})
 }

 export const deleteUserCart = (id) => dispatch =>{
   return dispatch({type:DELETE_USER_CART,payload:id})
}
