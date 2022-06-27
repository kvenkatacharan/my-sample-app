import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice(
    {
        name:"login",
        initialState:{value:{loggedIn:false}},
        reducers:{
            login:(state)=>{
                state.value = {loggedIn:true}
            },
            logout:(state)=>{
                state.value = {loggedIn:false}
            }
        }
    }
)

export const {login, logout} = loginSlice.actions;
//export const loginSelector = (state)=> state.value;

export default loginSlice.reducer;