import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{value:{active:true}},
    reducers:{
        activate:(state)=>{
            console.log("activating")
            state.value ={active:true}
        },
        deactivate:(state)=>{
            console.log("deactivating")
            state.value ={active:false}
        }
    }
})
export const {activate, deactivate} = sidebarSlice.actions;
export default sidebarSlice.reducer;