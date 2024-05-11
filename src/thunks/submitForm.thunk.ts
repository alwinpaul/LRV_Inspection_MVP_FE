import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../utils/apiUtils"
import { submitFormUrl } from "../constants/apiUrls"
import { ICabFormItem, IDDDFormItem, IExteriorFormItem, IPsgCompartmentFormItem, IVehicleInfo } from "../types/inspectionTypes"

interface ISubmitForm {
    vehicleInfo: IVehicleInfo
    cabData: Array<ICabFormItem>
    exteriorData: Array<IExteriorFormItem>
    exteriorOptionalData: Array<IExteriorFormItem>
    psgData: Array<IPsgCompartmentFormItem>
    dddData: Array<IDDDFormItem>
    mileage: number
    notes: string
    fitForService: boolean
    dateTime: string
}

export const submitForm = createAsyncThunk(
    'dmi/submitForm',
    async (data: ISubmitForm) => {
        const resp = await axiosInstance.post(submitFormUrl(), data)
        return resp.data
    }
)