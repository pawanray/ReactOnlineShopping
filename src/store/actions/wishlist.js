import {FETCH_ALL_WISHLIST, FETCH_USER_WISHLIST, DELETE_WISHLIST_PRODUCT} from '../actionTypes';

export const getAllWishlist = (data) => dispatch =>{
   return dispatch({type:FETCH_ALL_WISHLIST,payload:data})
}

export const getUserWishlist = (data,userId) => dispatch =>{
    return dispatch({type:FETCH_USER_WISHLIST,payload:{data,userId}})
 }

 export const deleteWishlistProduct = (id) => dispatch =>{
   return dispatch({type:DELETE_WISHLIST_PRODUCT,payload:id})
}
