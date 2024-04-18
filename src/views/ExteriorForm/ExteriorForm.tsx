import { Checkbox, Table } from "antd";
import { RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IExteriorFormItem } from "../../types/inspectionTypes";
import { updateExteriorFormData, updateExteriorOptionalFormData } from "../../store/slice/InspectionSlice";

const ExteriorForm = () => {

    const dispatch = useAppDispatch()

    const columns = [
        {
            title: 'Vehicle Exterior Condition',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: '',
            dataIndex: 'value',
            key: 'value',
            render: (value: boolean, record: IExteriorFormItem) => (
                <Checkbox checked={value} onChange={() => updateCabValue(record)} />
            )
        },
    ];

    const optionalFormColumns = [
        {
            title: 'Others',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: '',
            dataIndex: 'value',
            key: 'value',
            render: (value: boolean, record: IExteriorFormItem) => (
                <Checkbox checked={value} onChange={() => updateOptionalFormValue(record)} />
            )
        },
    ];

    const updateCabValue = (record: IExteriorFormItem) => {
        dispatch(updateExteriorFormData({ record }))
    }

    const updateOptionalFormValue = (record: IExteriorFormItem) => {
        dispatch(updateExteriorOptionalFormData({ record }))
    }

    const data = useAppSelector((root: RootState) => root.inspection.exteriorFormData)
    const optionalFormData = useAppSelector((root: RootState) => root.inspection.exterioroptionalData)

    return (
        <section className="m-3">
            <Table dataSource={data} columns={columns} pagination={false} rowKey='id' />

            <div className="my-3">
                <Table dataSource={optionalFormData} columns={optionalFormColumns} pagination={false} rowKey='id' />
            </div>
        </section>
    )
}

export default ExteriorForm