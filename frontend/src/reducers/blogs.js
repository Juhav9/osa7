import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'

const blogSlice = createSlice({
    name: 'blogs',
    initialState: [],
    reducers: {
        setBlogs(state, action) {
            return action.payload
        },
        addBlog(state, action) {
            return state.concat(action.payload)
        },
        update(state, action) {
            return state.map((b) =>
                b.id === action.payload.id ? action.payload : b,
            )
        },
        remove(state, action) {
            return state.filter((b) => b.id !== action.payload)
        },
    },
})
export const initializeBlogs = () => {
    return async (dispatch) => {
        const blogs = await blogService.getAll()
        dispatch(setBlogs(blogs))
    }
}

export const addNewBlog = (blog) => {
    return async (dispatch) => {
        const newBlog = await blogService.create(blog)
        dispatch(addBlog(newBlog))
    }
}

export const likeBlog = (blog) => {
    return async (dispatch) => {
        const likedBlog = await blogService.update(blog.id, blog)
        dispatch(update(blog))
    }
}

export const removeBlog = (id) => {
    return async (dispatch) => {
        const response = await blogService.remove(id)
        dispatch(remove(id))
    }
}

export const commentBlog = (blog) => {
    return async (dispatch) => {
        const response = await blogService.addComment(blog)
        dispatch(update(response))
    }
}

export const { setBlogs, addBlog, update, remove } = blogSlice.actions
export default blogSlice.reducer
