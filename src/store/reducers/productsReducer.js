import {FETCH_ALL_PRODUCTS, FETCH_CATEGORY_BY_PRODUCTS} from '../actionTypes';
const initialState = {
    allProducts:[],
    categoryByProducts:[],
  }
 const productReducer = (state = initialState,{type,payload}) =>{
     switch(type){
        case FETCH_ALL_PRODUCTS:
          return {
            ...state,
            allProducts:payload
          }
          case FETCH_CATEGORY_BY_PRODUCTS:
            return {
              ...state,
              categoryByProducts:payload
            }
          default:
            return{
            ...state
          }
      }

}

export default productReducer