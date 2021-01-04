
import { FETCH_ALL_WISHLIST, FETCH_USER_WISHLIST, DELETE_WISHLIST_PRODUCT } from '../actionTypes';
const initialState = {
  allWishlist: [],
  userWishlist: {
    id: Math.random(),
    userId: null,
    data: new Date().toLocaleString(),
    products: [],
  }
}
const wishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_WISHLIST:
        // if(state.allWishlist.length !== 0 ? state.allWishlist.some(item=>item?.userId === 1): []){
        //   return {
        //     ...state,
        //    allWishlist: [...state.allWishlist, [...state.allWishlist.products,payload]]
        //   }
        // }
        // else{
        //   return {
        //     ...state,
        //     allWishlist: [...state.allWishlist,payload]
        //   }
        // }
        return {
          ...state,
          allWishlist: [...state.allWishlist,payload]
        }

    case FETCH_USER_WISHLIST:
      const {data,userId} = payload
      return {
        ...state,
        userWishlist: { ...state.userWishlist, userId: userId, products: [...state.userWishlist.products, data] }
      }
    case DELETE_WISHLIST_PRODUCT:
      const products = [...state.userWishlist.products]
      const deleteWishlistProduct = products.length ? products.filter(product => {
        return product.id !== payload
      }) : []
      return {
        ...state,
        userWishlist: { ...state.userWishlist,  products: deleteWishlistProduct }
      }
    default:
      return {
        ...state
      }
  }

}

export default wishlistReducer