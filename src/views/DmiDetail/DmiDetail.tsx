import { Table, Modal } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, MinusOutlined } from '@ant-design/icons'
import { IDDDFormItem, IDmiListing } from "../../types/inspectionTypes";


interface IDmiDetailProps {
    dmiData: IDmiListing,
    isOpen: boolean,
    handleClose: () => void
}


const DmiDetail = (props: IDmiDetailProps) => {


    const cabData = props.dmiData.cabData
    const exteriorData = props.dmiData.exteriorData
    const exteriorOptionalData = props.dmiData.exteriorOptionalData
    const psgData = props.dmiData.psgData
    const dddData = props.dmiData.dddData
    const mileage = props.dmiData.mileage
    const notes = props.dmiData.notes
    const fitForService = props.dmiData.fitForService
    const vehicleInfoData = props.dmiData.vehicleInfo

    const showCrossCheck = (value: boolean) => {
        return value ?
            <CheckCircleOutlined className="text-green-700" /> :
            <CloseCircleOutlined className="text-red-500" />
    }

    const showCheck = (value: boolean) => {
        return value ?
            <CheckCircleOutlined className="text-green-700" /> :
            <MinusOutlined className="text-slate-500" />
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
            render: (value: boolean, record: IDDDFormItem) => (
                record.hide_b_value ? "" : showCrossCheck(value)
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
    const vehicleColumns = [
        {
            title: 'Vehicle ID',
            dataIndex: 'vehicle_id',
            key: 'vehicle_id',
        },
        {
            title: 'Technician Id (1)',
            dataIndex: 'technician_id_1',
            key: 'technician_id_1',
        },
        {
            title: 'Technician Id (2)',
            dataIndex: 'technician_id_2',
            key: 'technician_id_2',
        },
        {
            title: 'Work Order',
            dataIndex: 'work_order_number',
            key: 'work_order_number',
        },
    ];




    return (
        <Modal width="auto" open={props.isOpen} footer={null} style={{ top: 10 }} onCancel={props.handleClose}>
            <div className="w-11/12 sm:w-10/12 m-auto my-10">
                <>
                    <section className="m-3 hidden sm:block">
                        <Table dataSource={[vehicleInfoData]} columns={vehicleColumns} pagination={false} rowKey='id' />
                    </section>
                    <section className="sm:hidden">
                        {vehicleColumns.map(col => (
                            <div className="flex items-centre justify-start w-full p-2" key={col.dataIndex}>
                                <div className="text-sm font-bold w-6/12 text-left">{col.title}</div>:
                                <div className="text-sm ml-5"> {vehicleInfoData[col.key as keyof typeof vehicleInfoData] || '-'}</div>
                            </div>
                        ))}
                    </section>
                </>
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
                        <div className="m-2 w-3/12 sm:w-full">{showCheck(opData.value)}</div>
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

            {/* <div className="py-5 bg-[#f7f7f7] w-full z-10">
                <Button type="default" size="large" className="px-3 sm:px-20 mx-3" onClick={gotoEdit}>Edit</Button>
            </div> */}

        </Modal >

    )
}

export default DmiDetail