import { Button, Table } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";
import { CheckCircleOutlined, CloseCircleOutlined, Loading3QuartersOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router";
import VehicleInfoView from "../VehicleInfo/VehicleInfoView";
import { submitForm } from "../../thunks/submitForm.thunk";
import { useState } from "react";


const Review = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const cabData = useAppSelector((root: RootState) => root.inspection.cabFormData)
    const exteriorData = useAppSelector((root: RootState) => root.inspection.exteriorFormData)
    const exteriorOptionalData = useAppSelector((root: RootState) => root.inspection.exterioroptionalData)
    const psgData = useAppSelector((root: RootState) => root.inspection.psgCompartmentData)
    const dddData = useAppSelector((root: RootState) => root.inspection.dddFormData)
    const mileage = useAppSelector((rootState: RootState) => rootState.inspection.mileage)
    const notes = useAppSelector((rootState: RootState) => rootState.inspection.notes)
    const fitForService = useAppSelector((rootState: RootState) => rootState.inspection.fitForService)
    const vehicleInfoData = { ...useAppSelector((root: RootState) => root.inspection.vehicleInfo) }
    const showSaveLoader = useAppSelector((root: RootState) => root.inspection.showSavingLoader)

    const [saveError, setSaveError] = useState('')

    const showCrossCheck = (value: boolean) => {
        return value ?
            <CheckCircleOutlined className="text-green-700" /> :
            <CloseCircleOutlined className="text-red-500" />
    }

    const cabColumns = [
        {
            title: 'Cab Condition and Function',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: 'Cab A',
            dataIndex: 'cab_a_value',
            key: 'cab_a_value',
            render: (value: boolean) => (
                showCrossCheck(value)
            )
        },
        {
            title: 'Cab B',
            dataIndex: 'cab_b_value',
            key: 'cab_b_value',
            render: (value: boolean) => (
                showCrossCheck(value)
            )
        },
    ];

    const dddColumns = [
        {
            title: 'DDD',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: 'Cab A',
            dataIndex: 'cab_a_value',
            key: 'cab_a_value',
            render: (value: boolean) => (
                showCrossCheck(value)
            )
        },
        {
            title: 'Cab B',
            dataIndex: 'cab_b_value',
            key: 'cab_b_value',
            render: (value: boolean) => (
                showCrossCheck(value)
            )
        },
    ];

    const psgColumns = [
        {
            title: 'Passenger Compartment Condition and Function',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: '',
            dataIndex: 'value',
            key: 'value',
            render: (value: boolean) => (
                showCrossCheck(value)
            )
        },
    ];

    const exteriorColumns = [
        {
            title: 'Vehicle Exterior Condition',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: '',
            dataIndex: 'value',
            key: 'value',
            render: (value: boolean) => (
                showCrossCheck(value)
            )
        },
    ];

    const gotoEdit = () => {
        navigate("/")
    }

    const handleSubmit = async () => {
        const data = {
            cabData,
            exteriorData,
            exteriorOptionalData,
            psgData,
            dddData,
            mileage,
            notes,
            fitForService,
            vehicleInfo: vehicleInfoData,
            dateTime: new Date().toString()
        }
        const respAction = await dispatch(submitForm(data))
        if (submitForm.rejected.match(respAction)) {
            if (respAction.error.code === "501") {
                setSaveError("Session Expired. Login and try again.")
            } else {
                setSaveError("Error saving Data...Please try again later.")
            }
            setSaveError("Error saving Data...Please try again later.")
        } else if (submitForm.fulfilled.match(respAction)) {
            setSaveError('')
            navigate("/dmi")
        }
    }


    return (
        <section>
            <div className="w-11/12 sm:w-10/12 m-auto my-10">
                <VehicleInfoView />
            </div>


            <div className="flex flex-col sm:flex-row justify-center w-full">
                <div className="w-11/12 m-auto sm:w-5/12 mx-3">
                    <div className="my-5">
                        <Table dataSource={cabData} columns={cabColumns} pagination={false} rowKey='id' />
                    </div>
                    <div className="my-5">
                        <Table dataSource={dddData} columns={dddColumns} pagination={false} rowKey='id' />
                    </div>
                </div>
                <div className="w-11/12 m-auto sm:w-5/12 mx-3">
                    <div className="my-5">
                        <Table dataSource={psgData} columns={psgColumns} pagination={false} rowKey='id' />
                    </div>
                    <div className="my-5">
                        <Table dataSource={exteriorData} columns={exteriorColumns} pagination={false} rowKey='id' />
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-center w-full sm:w-10/12 m-auto">
                {exteriorOptionalData.map(opData => (
                    <div className="flex items-center sm:block border border-slate-300 sm:w-3/12 h-22 sm:p-2">
                        < div className="sm:h-10 font-bold text-sm m-2 w-9/12 sm:w-full text-left sm:text-center p-2" > {opData.label}</div>
                        <div className="m-2 w-3/12 sm:w-full">{showCrossCheck(opData.value)}</div>
                    </div>
                ))
                }
            </div >

            <div className="flex flex-col items-start justify-start w-full sm:w-10/12 m-auto my-5">
                <div className="font-bold text-sm m-2 w-2/12 text-left">Notes:</div>
                <div className="m-2 text-left w-full sm:w-10/12">{notes}</div>
            </div>

            <div className="flex items-center justify-start w-full sm:w-10/12 m-auto my-5">
                <div className="font-bold text-sm m-2 w-2/12 text-left">Mileage:</div>
                <div className="m-2 text-left w-10/12">{mileage}</div>
            </div>

            <div className="flex items-center justify-start w-full sm:w-10/12 m-auto my-5">
                <div className="font-bold text-sm m-2 sm:w-2/12 text-left">Fit for service:</div>
                <div className="m-2 text-left sm:w-10/12">{showCrossCheck(fitForService)}</div>
            </div>

            {saveError && (
                <div className="text-xs text-red-500 text-centre w-full">{saveError}</div>
            )}

            <div className="py-5 bg-[#f7f7f7] w-full z-10">
                <Button
                    type="default"
                    size="large"
                    className="px-3 sm:px-20 mx-3"
                    onClick={gotoEdit}
                    disabled={showSaveLoader}
                >
                    Edit
                </Button>
                <Button
                    type="primary"
                    size="large"
                    className="px-3 sm:px-20 mx-3"
                    onClick={handleSubmit}
                    disabled={showSaveLoader}
                >
                    {showSaveLoader ? <Loading3QuartersOutlined /> : "Submit"}
                </Button>
            </div>



        </section >

    )
}

export default Review