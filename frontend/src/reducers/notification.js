import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: null,
    reducers: {
        set(state, action) {
            return action.payload
        },
        clear(state, action) {
            return null
        },
    },
})
export const setNotification = (message, type = 'success') => {
    return async (dispatch) => {
        dispatch(set({ message, type }))
        setTimeout(() => {
            dispatch(clear())
        }, 4000)
    }
}

export const { set, clear } = notificationSlice.actions
export default notificationSlice.reducer
