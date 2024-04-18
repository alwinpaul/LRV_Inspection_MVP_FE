import { Checkbox, Table } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";
import { IDDDFormItem } from "../../types/inspectionTypes";
import { updateDDDFormData } from "../../store/slice/InspectionSlice";

const DDDForm = () => {

    const dispatch = useAppDispatch();

    const columns = [
        {
            title: 'DDD',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: 'Cab A',
            dataIndex: 'cab_a_value',
            key: 'cab_a_value',
            render: (value: boolean, record: IDDDFormItem) => (
                <Checkbox checked={value} onChange={() => updateCabValue(record, 'cab_a_value')} />
            )
        },
        {
            title: 'Cab B',
            dataIndex: 'cab_b_value',
            key: 'cab_b_value',
            render: (value: boolean, record: IDDDFormItem) => (
                <Checkbox checked={value} onChange={() => updateCabValue(record, 'cab_b_value')} />
            )
        },
    ];

    const updateCabValue = (record: IDDDFormItem, cab: 'cab_a_value' | 'cab_b_value') => {
        dispatch(updateDDDFormData({ record, cab }))
    }

    const data = useAppSelector((root: RootState) => root.inspection.dddFormData)

    return (
        <section className="m-3">
            <Table dataSource={data} columns={columns} pagination={false} rowKey='id' />
        </section>
    )
}

export default DDDForm