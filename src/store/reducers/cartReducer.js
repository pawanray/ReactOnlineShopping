
import { FETCH_ALL_CART, FETCH_USER_CART, DELETE_USER_CART } from '../actionTypes';
const initialState = {
  allCart: [],
  userCart: {
    id: Math.random(),
    userId: null,
    data: new Date().toLocaleString(),
    products: [],
  }
}
const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_CART:
      return {
        ...state,
        allCart: payload
      }
    case FETCH_USER_CART:
      return {
        ...state,
        userCart: { ...state.userCart, id: 1, products: [...state.userCart.products, payload] }
      }
    case DELETE_USER_CART:
      const products = [...state.userCart.products]
      const deleteUserCart = products.length ? products.filter(product => {
        return product.id !== payload
      }) : []
      return {
        ...state,
        userCart: { ...state.userCart, id: 1, products: deleteUserCart }
      }
    default:
      return {
        ...state
      }
  }

}

export default cartReducer