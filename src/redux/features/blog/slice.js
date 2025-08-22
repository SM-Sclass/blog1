import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
    // name
    name: "blog",

    // initialstate
    initialState: [
    ],

    // reducers
    reducers: {
        addBlogs:(state, action)=>{
            state = action.payload
            return state
        },
        addBlog: (state, action) => {
            const newBlog = action.payload
            state.push(newBlog)
            return state
        },
        updateBlog:(state, action)=>{
            const updatedBlogObj = action.payload

            state = state.map((blog) => {
                if(blog._id == updatedBlogObj._id){
                    return updatedBlogObj
                }
                return blog
            })

            return state
        },
        deleteBlog:(state, action) =>{
            const blogId = action.payload

            state = state.filter((blog, index) => blog._id != blogId)
            return state
        },
    }
})


export const {addBlogs, addBlog, updateBlog, deleteBlog} = blogSlice.actions
const blogReducer = blogSlice.reducer
export default blogReducer