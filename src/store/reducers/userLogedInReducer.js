

const userLogedInReducer = (state = "", usersLogedInAction) =>{
    debugger;
    console.log('user logged redcer',usersLogedInAction.payload)
        if(usersLogedInAction.type==="USER_LOGED_IN"){
            return{
                ...state, userLogedIn:usersLogedInAction.payload
            }
        }
        return {
            ...state
        }
}

export default userLogedInReducer