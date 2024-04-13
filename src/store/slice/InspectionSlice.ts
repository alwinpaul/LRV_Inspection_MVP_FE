import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IVehicleInfo } from '../../types/inspectionTypes'

interface InspectionState {
    vehilceInfo: IVehicleInfo,
    currentPage: 1 | 2 | 3
}

const initialState: InspectionState = {
    vehilceInfo: {
        vehicle_id: null,
        technician_id_1: null,
        technician_id_2: null,
        work_order_number: null
    },
    currentPage: 1
}

export const InspectionSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateVehilceData: (state, action: PayloadAction<IVehicleInfo>) => {
            state.vehilceInfo = { ...action.payload }
            state.currentPage = 2
        },
    },
})

export const { updateVehilceData } = InspectionSlice.actions

export default InspectionSlice.reducer