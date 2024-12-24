import { createSlice } from '@reduxjs/toolkit'
import storage from '../services/storage'

const userSlicer = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser(state, action) {
            return action.payload
        },
    },
})

export const initializeUser = () => {
    return (dispatch) => {
        const user = storage.loadUser()
        if (user) {
            dispatch(setUser(user))
        }
    }
}

export const { setUser } = userSlicer.actions

export default userSlicer.reducer
