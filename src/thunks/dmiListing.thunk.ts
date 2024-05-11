import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../utils/apiUtils"
import { getDmiListingUrl } from "../constants/apiUrls"


export const getDmiListing = createAsyncThunk(
    'dmi/listing',
    async () => {
        const resp = await axiosInstance.get(getDmiListingUrl())
        console.log(resp)
        return resp.data
    }
)