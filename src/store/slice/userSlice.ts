import { createSlice } from '@reduxjs/toolkit'
import { userSignIn, verifyAuth } from '../../thunks/login.thunk'
import { IUserDetails } from '../../types/userTypes'

interface UserState {
    userDetails: IUserDetails,
    isAuthenticated: boolean,
    isAuthLoading: boolean
}

const initialState: UserState = {
    userDetails: {
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        role: ''
    },
    isAuthenticated: false,
    isAuthLoading: true
}

export const UserSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(userSignIn.fulfilled, (state, { payload }) => {
            state.userDetails = { ...payload }
            state.isAuthenticated = true
            state.isAuthLoading = false
        });
        builder.addCase(userSignIn.pending, (state) => {
            state.isAuthLoading = true
        });
        builder.addCase(verifyAuth.fulfilled, (state, { payload }) => {
            state.userDetails = { ...payload }
            state.isAuthLoading = false
            state.isAuthenticated = true
        })
        builder.addCase(verifyAuth.pending, (state) => {
            state.isAuthLoading = true
        });

    }
})

// export const {
//     
// } = UserSlice.actions

export default UserSlice.reducer