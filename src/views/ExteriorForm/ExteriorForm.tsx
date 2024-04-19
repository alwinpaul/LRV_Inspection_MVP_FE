import { Checkbox, Table } from "antd";
import { RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IExteriorFormItem } from "../../types/inspectionTypes";
import { selectAllFormData, updateExteriorFormData, updateExteriorOptionalFormData } from "../../store/slice/InspectionSlice";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";

const ExteriorForm = () => {

    const dispatch = useAppDispatch()

    const [checkAllCab, setCheckAllCab] = useState(false)

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
        if (record.value) {
            setCheckAllCab(false)
        }
        dispatch(updateExteriorFormData({ record }))
    }

    const updateOptionalFormValue = (record: IExteriorFormItem) => {
        dispatch(updateExteriorOptionalFormData({ record }))
    }

    const selectAllCabFields = (e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            setCheckAllCab(true)
        } else {
            setCheckAllCab(false)
        }
        dispatch(
            selectAllFormData({ cab: null, formName: 'exterior', value: e.target.checked })
        )
    }

    function hasCabValue(): boolean {
        return data.some(item => item.value);
    }

    const data = useAppSelector((root: RootState) => root.inspection.exteriorFormData)
    const optionalFormData = useAppSelector((root: RootState) => root.inspection.exterioroptionalData)

    return (
        <>
            <section className="my-9 border rounded-md border-slate-200 shadow-md">
                <div className="w-full flex items-center justify-end">
                    <div className="p-2 text-xs font-bold">Select All</div>
                    <div className="p-2">
                    <Checkbox checked={checkAllCab} indeterminate={!checkAllCab && hasCabValue()} onChange={selectAllCabFields}>
                        </Checkbox>
                    </div>
                </div>
                <Table dataSource={data} columns={columns} pagination={false} rowKey='id' />


            </section>
            <section className="my-9 border rounded-md border-slate-200 shadow-md">
                <Table dataSource={optionalFormData} columns={optionalFormColumns} pagination={false} rowKey='id' />
            </section>
        </>
    )
}

export default ExteriorForm