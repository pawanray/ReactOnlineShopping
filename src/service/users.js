import HTTP from '../utility/HTTP'
export const fetchAllUsers = () =>{
    return HTTP.get("/users");
} 
export const addUser = (data) =>{
    return HTTP.post("/users",data);
} 