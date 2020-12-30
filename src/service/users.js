import HTTP from '../utility/HTTP'
export const fetchAllUsers = () =>{
    return HTTP.get("/users");
} 