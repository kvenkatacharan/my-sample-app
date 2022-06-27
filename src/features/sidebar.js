import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{value:{active:true}},
    reducers:{
        activate:(state)=>{
            state.value ={active:true}
        },
        deactivate:(state)=>{
            state.value ={active:false}
        }
    }
})
export const {activate, deactivate} = sidebarSlice.actions;
export default sidebarSlice.reducer;