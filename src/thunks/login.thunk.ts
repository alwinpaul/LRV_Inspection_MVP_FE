import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthVerifyUrl, getLoginUrl } from "../constants/apiUrls";
import apiUtils from "../utils/apiUtils";


interface IUserSignIn {
    email: string;
    password: string
}

export const userSignIn = createAsyncThunk(
    'auth/userSignIn',
    async (data: IUserSignIn) => {
        const resp = await apiUtils.post(getLoginUrl(), {
            email: data.email,
            password: data.password
        })
        return resp.data
    }
)

export const verifyAuth = createAsyncThunk(
    'auth/verifyUser',
    async () => {
        const resp = await apiUtils.get(getAuthVerifyUrl())
        return resp.data
    }
)