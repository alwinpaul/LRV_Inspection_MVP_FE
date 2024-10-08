import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICabFormItem, IDDDFormItem, IDmiListing, IExteriorFormItem, IPsgCompartmentFormItem, IVehicleInfo } from '../../types/inspectionTypes'
import { getDmiListing } from '../../thunks/dmiListing.thunk'
import { submitForm } from '../../thunks/submitForm.thunk'

interface InspectionState {
    vehicleInfo: IVehicleInfo,
    currentPage: 1 | 2 | 3,
    cabFormData: Array<ICabFormItem>,
    dddFormData: Array<IDDDFormItem>,
    psgCompartmentData: Array<IPsgCompartmentFormItem>,
    exteriorFormData: Array<IExteriorFormItem>,
    exterioroptionalData: Array<IExteriorFormItem>,
    mileage: number,
    notes: string,
    fitForService: boolean,
    dmiListing: Array<IDmiListing> | null,
    isDmiLoading: boolean,
    showSavingLoader: boolean,
    initials: string
}

const initialState: InspectionState = {
    vehicleInfo: {
        vehicle_id: null,
        technician_id_1: null,
        technician_id_2: null,
        work_order_number: null
    },
    dmiListing: null,
    isDmiLoading: false,
    showSavingLoader: false,
    initials: "",
    cabFormData: [
        {
            id: 1,
            label: "Operator's Seat, Belt, Footrest",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 2,
            label: "Interior Mirrors, Sun Visors and Blinds",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 3,
            label: "Broom, Switch bar (one Cab), Fire extinguisher, Emergency Hammer",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 4,
            label: "Ceiling panels and perch seat are secured",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 5,
            label: "Left console switches are normal and sealed, wall panels secured",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 6,
            label: "WIFI Router is ON and GFCI not tripped",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 7,
            label: "Lamp Test and 4-way Flashers",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 8,
            label: "Gong, bell, and horn",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 9,
            label: "Washers/Wipers and Distress push button",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 10,
            label: "Sanders, PA (Int/Ext)",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 11,
            label: "Enable LHS/RHS door, Stop request",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 12,
            label: "Cab Lights and Instructor switch",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 13,
            label: "Radio and ADU test",
            cab_a_value: false,
            cab_b_value: false
        },
    ],
    dddFormData: [
        {
            id: 1,
            label: "Date, Time and speed limit (80km/hr.)",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 2,
            label: "SVSCS Cameras",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 3,
            label: "Battery Voltage",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 4,
            label: "Perform Departure Tests (Primary and secondary vigilance, Maximum speed test and roll back test)",
            cab_a_value: false,
            cab_b_value: false
        },
        {
            id: 5,
            label: "Perform Load Levelling Self-test (Every 48 hours)",
            cab_a_value: false,
            cab_b_value: false,
            hide_b_value: true
        },
    ],
    psgCompartmentData: [
        {
            id: 1,
            label: "Accessibility Stop Request",
            value: false,
        },
        {
            id: 2,
            label: "Stanchions, Handrails, and hand straps.",
            value: false,
        },
        {
            id: 3,
            label: "Windows (Upper windows locked)",
            value: false,
        },
        {
            id: 4,
            label: "Articulation and Inner Bellows",
            value: false,
        },
        {
            id: 5,
            label: "Interior panels, lights floor and seats",
            value: false,
        },
        {
            id: 6,
            label: "CCTV Cameras, Signs and Displays",
            value: false,
        },
        {
            id: 7,
            label: "Interior Jacking hole E module",
            value: false,
        },
        {
            id: 8,
            label: "Emergency Hammer, EED normalize",
            value: false,
        },
        {
            id: 9,
            label: "General Condition and Cleanliness",
            value: false,
        },
        {
            id: 10,
            label: "Door Open close and Sensitive Edge",
            value: false,
        },
        {
            id: 11,
            label: "Decals, Verify operation of Saloon HVAC units",
            value: false,
        },
        {
            id: 12,
            label: "Accessibility and Emergency Intercoms",
            value: false,
        },
        {
            id: 13,
            label: "Crew pushbuttons",
            value: false,
        },
    ],
    exteriorFormData: [
        {
            id: 1,
            label: "Sanders",
            value: false,
        },
        {
            id: 2,
            label: "Lights, Camera, and destination Sign",
            value: false,
        },
        {
            id: 3,
            label: "Windshields and Wipers blade",
            value: false,
        },
        {
            id: 4,
            label: "Windows, Doors and Bellows",
            value: false,
        },
        {
            id: 5,
            label: "Inspect Calipers are mechanically applied",
            value: false,
        },
        {
            id: 6,
            label: "Panels and covers are closed and secured",
            value: false,
        },
        {
            id: 7,
            label: "Decals and Paintwork",
            value: false,
        },
        {
            id: 8,
            label: "Roof and water boxes, Pantograph (Weekly)",
            value: false,
        },
        {
            id: 9,
            label: "EAD covers and buttons",
            value: false,
        },
        {
            id: 10,
            label: "Undercar (Weekly)",
            value: false,
        }
    ],
    exterioroptionalData: [
        {
            id: 9001,
            label: "Maximo WO Completed",
            value: false,
        },
        {
            id: 9002,
            label: "Exterior wash/Sand/Washer fluid If required",
            value: false,
        },
        {
            id: 9003,
            label: "Daily Clean completed",
            value: false,
        },
        {
            id: 9004,
            label: "Weekly clean if required",
            value: false,
        }
    ],
    mileage: 0,
    notes: "",
    fitForService: true,
    currentPage: 1
}

export const InspectionSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateVehilceData: (state, action: PayloadAction<IVehicleInfo>) => {
            state.vehicleInfo = { ...action.payload }
            state.currentPage = 2
        },
        updateCabFormData: (state, action: PayloadAction<{ record: ICabFormItem, cab: 'cab_a_value' | 'cab_b_value' }>) => {
            const cabDataCopy = [...state.cabFormData]
            const elem = cabDataCopy.filter((item: ICabFormItem) => item.id === action.payload.record.id)[0]
            elem[action.payload.cab] = !elem[action.payload.cab]
        },
        updateDDDFormData: (state, action: PayloadAction<{ record: IDDDFormItem, cab: 'cab_a_value' | 'cab_b_value' }>) => {
            const dddDataCopy = [...state.dddFormData]
            const elem = dddDataCopy.filter((item: IDDDFormItem) => item.id === action.payload.record.id)[0]
            elem[action.payload.cab] = !elem[action.payload.cab]
        },
        updateExteriorFormData: (state, action: PayloadAction<{ record: IExteriorFormItem }>) => {
            const exteriorFormDataCopy = [...state.exteriorFormData]
            const elem = exteriorFormDataCopy.filter((item: IExteriorFormItem) => item.id === action.payload.record.id)[0]
            elem.value = !elem.value
        },
        updateExteriorOptionalFormData: (state, action: PayloadAction<{ record: IExteriorFormItem }>) => {
            const exteriorFormDataCopy = [...state.exterioroptionalData]
            const elem = exteriorFormDataCopy.filter((item: IExteriorFormItem) => item.id === action.payload.record.id)[0]
            elem.value = !elem.value
        },
        updatePsgCompartmentData: (state, action: PayloadAction<{ record: IPsgCompartmentFormItem }>) => {
            const psgCompertmentDataCopy = [...state.psgCompartmentData]
            const elem = psgCompertmentDataCopy.filter((item: IPsgCompartmentFormItem) => item.id === action.payload.record.id)[0]
            elem.value = !elem.value
        },
        updateMileage: (state, action: PayloadAction<number>) => {
            state.mileage = action.payload
        },
        updateNotes: (state, action: PayloadAction<string>) => {
            state.notes = action.payload
        },
        updateInitials: (state, action: PayloadAction<string>) => {
            state.initials = action.payload
        },
        updateFitForService: (state, action: PayloadAction<boolean>) => {
            state.fitForService = action.payload
        },
        resetForms: () => {
            return initialState
        },
        selectAllFormData: (state, action: PayloadAction<{ value: boolean, formName: "cab" | "ddd" | "exterior" | "psg" | "opex", cab: "A" | "B" | null }>) => {
            if (action.payload.formName === 'cab') {
                state.cabFormData.map(item => item[action.payload.cab === "A" ? 'cab_a_value' : 'cab_b_value'] = action.payload.value)
            } else if (action.payload.formName === 'ddd') {
                state.dddFormData.map(item => item[action.payload.cab === "A" ? 'cab_a_value' : 'cab_b_value'] = action.payload.value)
            } else if (action.payload.formName === 'exterior') {
                state.exteriorFormData.map(item => item.value = action.payload.value)
            } else if (action.payload.formName === 'psg') {
                state.psgCompartmentData.map(item => item.value = action.payload.value)
            } else if (action.payload.formName === 'opex') {
                state.exterioroptionalData.map(item => item.value = action.payload.value)
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getDmiListing.pending, (state) => {
            state.isDmiLoading = true
        });
        builder.addCase(getDmiListing.fulfilled, (state, { payload }) => {
            state.dmiListing = payload
            state.isDmiLoading = false
        });
        builder.addCase(getDmiListing.rejected, (state) => {
            state.isDmiLoading = false
        });
        builder.addCase(submitForm.pending, (state) => {
            state.showSavingLoader = true
        });
        builder.addCase(submitForm.fulfilled, (state, { payload }) => {
            state.dmiListing = [...state.dmiListing || [], payload]
            state.showSavingLoader = false
        });
        builder.addCase(submitForm.rejected, (state) => {
            state.showSavingLoader = false
        });
    }
})

export const {
    updateVehilceData,
    updateCabFormData,
    updateDDDFormData,
    updateExteriorFormData,
    updateExteriorOptionalFormData,
    updatePsgCompartmentData,
    updateMileage,
    updateNotes,
    updateInitials,
    updateFitForService,
    resetForms,
    selectAllFormData
} = InspectionSlice.actions

export default InspectionSlice.reducer