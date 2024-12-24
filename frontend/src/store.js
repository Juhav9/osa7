import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notification'
import blogReducer from './reducers/blogs'
import userReducer from './reducers/user'

const store = configureStore({
    reducer: {
        notifications: notificationReducer,
        blogs: blogReducer,
        user: userReducer,
    },
})

export default store
