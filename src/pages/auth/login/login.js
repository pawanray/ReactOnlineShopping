import React, { useEffect, useState } from 'react';
import {  getAllUsers} from '../../../store/actions/users';
function Login(){
    // console.log("props", props.users)
    // const [loginObj,setLogin] = useState({
    //     username:"",
    //     password:""
    // })

    // useEffect(()=>{ 
    //     props.fetchUsers();
    // },[])

    // const loginHandler  =() =>{
    //     console.log("login", loginObj)
    //    let filterUser =  props.users.find(user=>{
    //         return user.username === loginObj.username
    //     })
    //     props.userLogedInHandler(filterUser);
    //     console.log("filterUser", filterUser)
    // }

    // const inputEvent = (e) =>{
    //     const name = e.target.name;
    //     const value = e.target.value;
        
    //     setLogin((prevVal)=>{
            
    //         if(name === "username"){
    //             return{
    //                 username:value,
    //                 password:prevVal.password
    //             }
    //         }

    //         else if(name === "password"){
    //             return{
    //                 username:prevVal.username,
    //                 password:value
    //             }
    //         }

    //     })
    //     console.log(e.target.value)
    // }
    return (
        <>login</>
        // <div className="col-sm-5 mx-auto mt-5">
        //     <div className="card">
        //         <div className="card-body">
        //             <h5>Login</h5>
        //             {loginObj.username}
        //             <div className="form-group">
        //                  <input type="text" name="username" value={loginObj.username}  className="form-control" placeholder="username" onChange={inputEvent}/>
        //             </div>
        //             <div className="form-group">
        //                  <input type="text" name="password" value={loginObj.password}  className="form-control" placeholder="password" onChange={inputEvent} />
        //             </div>
        //             <div className="form-group">
        //                 <button className="btn btn-primary" onClick={loginHandler}>Login</button>
        //             </div>
        //             </div>
        //     </div>

        // </div>
    )
}


export default Login