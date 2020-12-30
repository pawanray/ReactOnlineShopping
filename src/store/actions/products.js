import {FETCH_ALL_PRODUCTS, FETCH_CATEGORY_BY_PRODUCTS} from '../actionTypes';
import {fetchProducts, fetchCategoryByProducts} from '../../service/products'
export const getAllProducts = () =>{
    return (dispatch) =>{
        fetchProducts().then(res=>{
            dispatch({type:FETCH_ALL_PRODUCTS,payload:res.data})
        }).catch(err=>console.log(err))
    }
}
export const getCategoryByProduct = (categoryName) =>{
    return (dispatch) =>{
        fetchCategoryByProducts(categoryName).then(res=>{
            dispatch({type:FETCH_CATEGORY_BY_PRODUCTS,payload:res.data})
        }).catch(err=>console.log(err))
    }
}