import {FETCH_ALL_PRODUCTS, FETCH_CATEGORY_BY_PRODUCTS, FETCH_PRODUCT_QUANITY} from '../actionTypes';
const initialState = {
    allProducts:[],
    categoryByProducts:[],
    productQuantity:[]
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
            case FETCH_PRODUCT_QUANITY:
              // let productQunty = [...new Set([...dupAddress.map(address => dupAddress[address.id])])]

              return {
                ...state,
                productQuantity:[...state.productQuantity,payload]
              }
          default:
            return{
            ...state
          }
      }

}

export default productReducer