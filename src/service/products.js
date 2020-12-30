import HTTP from '../utility/HTTP';
export const fetchProducts = () =>{
    return HTTP.get("/products");
} 
export const fetchCategoryByProducts = (categoryName) =>{
    return HTTP.get(`/products/category/${categoryName}`);
} 
