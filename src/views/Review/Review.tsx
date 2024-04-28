import { Button, Table } from "antd";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router";
import VehicleInfoView from "../VehicleInfo/VehicleInfoView";


const Review = () => {

    const navigate = useNavigate();

    const cabData = useAppSelector((root: RootState) => root.inspection.cabFormData)
    const exteriorData = useAppSelector((root: RootState) => root.inspection.exteriorFormData)
    const exteriorOptionalData = useAppSelector((root: RootState) => root.inspection.exterioroptionalData)
    const psgData = useAppSelector((root: RootState) => root.inspection.psgCompartmentData)
    const dddData = useAppSelector((root: RootState) => root.inspection.dddFormData)
    const mileage = useAppSelector((rootState: RootState) => rootState.inspection.mileage)
    const notes = useAppSelector((rootState: RootState) => rootState.inspection.notes)
    const fitForService = useAppSelector((rootState: RootState) => rootState.inspection.fitForService)

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


    return (
        <section>
            <div className="w-10/12 m-auto my-10">
                <VehicleInfoView />
            </div>


            <div className="flex justify-center w-full">
                <div className="w-5/12 mx-3">
                    <div className="my-5">
                        <Table dataSource={cabData} columns={cabColumns} pagination={false} rowKey='id' />
                    </div>
                    <div className="my-5">
                        <Table dataSource={dddData} columns={dddColumns} pagination={false} rowKey='id' />
                    </div>
                </div>
                <div className="w-5/12 mx-3">
                    <div className="my-5">
                        <Table dataSource={psgData} columns={psgColumns} pagination={false} rowKey='id' />
                    </div>
                    <div className="my-5">
                        <Table dataSource={exteriorData} columns={exteriorColumns} pagination={false} rowKey='id' />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-10/12 m-auto">
                {exteriorOptionalData.map(opData => (
                    <div className="border border-slate-300 w-3/12 h-22">
                        <div className="h-10 font-bold text-sm m-2">{opData.label}</div>
                        <div className="m-2">{showCrossCheck(opData.value)}</div>
                    </div>
                ))}
            </div>

            <div className="flex items-start justify-start w-10/12 m-auto my-5">
                <div className="font-bold text-sm m-2 w-2/12 text-left">Notes:</div>
                <div className="m-2 text-left w-10/12">{notes}</div>
            </div>

            <div className="flex items-center justify-start w-10/12 m-auto my-5">
                <div className="font-bold text-sm m-2 w-2/12 text-left">Mileage:</div>
                <div className="m-2 text-left w-10/12">{mileage}</div>
            </div>

            <div className="flex items-center justify-start w-10/12 m-auto my-5">
                <div className="font-bold text-sm m-2 w-2/12 text-left">Fit for service:</div>
                <div className="m-2 text-left w-10/12">{showCrossCheck(fitForService)}</div>
            </div>

            <div className="py-5 bg-[#f7f7f7] w-full z-10">
                <Button type="default" size="large" className="px-3 sm:px-20 mx-3" onClick={gotoEdit}>Edit</Button>
                <Button type="primary" size="large" className="px-3 sm:px-20 mx-3">Submit</Button>
            </div>

        </section>

    )
}

export default Review