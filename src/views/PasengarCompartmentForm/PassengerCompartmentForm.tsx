import { Checkbox, Table } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";
import { IPsgCompartmentFormItem } from "../../types/inspectionTypes";
import { updatePsgCompartmentData } from "../../store/slice/InspectionSlice";

const PassengerCompartmentForm = () => {

    const dispatch = useAppDispatch()

    const columns = [
        {
            title: 'Passenger Compartment Condition and Function',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: '',
            dataIndex: 'value',
            key: 'value',
            render: (value: boolean, record: IPsgCompartmentFormItem) => (
                <Checkbox checked={value} onChange={() => updateCabValue(record)} />
            )
        },
    ];

    const updateCabValue = (record: IPsgCompartmentFormItem) => {
        dispatch(updatePsgCompartmentData({ record }))
    }

    const data = useAppSelector((root: RootState) => root.inspection.psgCompartmentData)

    return (
        <section className="m-3">
            <Table dataSource={data} columns={columns} pagination={false} rowKey='id' />
        </section>
    )
}

export default PassengerCompartmentForm