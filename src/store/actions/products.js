import {FETCH_ALL_PRODUCTS, FETCH_CATEGORY_BY_PRODUCTS, FETCH_PRODUCT_QUANITY} from '../actionTypes';
import {fetchProducts, fetchCategoryByProducts} from '../../service/products'
export const getAllProducts = () => dispatch => {
    return fetchProducts().then(res=>{
            dispatch({type:FETCH_ALL_PRODUCTS,payload:res.data})
            return [true,false]
        }).catch(err=>{
            console.log(err);
            return [false,true]
        })
    
}
export const getCategoryByProduct = (categoryName) => dispatch =>{
    return fetchCategoryByProducts(categoryName).then(res=>{
            dispatch({type:FETCH_CATEGORY_BY_PRODUCTS,payload:res.data})
            return [true,false]
        }).catch(err=>{
            console.log(err)
            return [false,true]
        })
    
}
export const getProductQuantity = (quantity) => dispatch =>{
        return  dispatch({type:FETCH_PRODUCT_QUANITY,payload:quantity})
}
