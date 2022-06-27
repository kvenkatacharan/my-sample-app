import { createSlice } from "@reduxjs/toolkit"

const postSlice = createSlice({
    name: "posts",
    initialState: {postsList : []},
    reducers: {
        setPostList (state, action) {
            state.postsList = [...state.postsList,...action.payload]
        },
    },
}, 
)


export const PostsReducer = postSlice.reducer

export const PostActions = postSlice.actions

export default postSlice;