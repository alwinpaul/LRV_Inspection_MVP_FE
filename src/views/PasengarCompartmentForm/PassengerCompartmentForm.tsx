import { Checkbox, Table } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";
import { IPsgCompartmentFormItem } from "../../types/inspectionTypes";
import { selectAllFormData, updatePsgCompartmentData } from "../../store/slice/InspectionSlice";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";

const PassengerCompartmentForm = () => {

    const dispatch = useAppDispatch()

    const [checkAllCab, setCheckAllCab] = useState(false)

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
        if (record.value) {
            setCheckAllCab(false)
        }
        dispatch(updatePsgCompartmentData({ record }))
    }

    const selectAllCabFields = (e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            setCheckAllCab(true)
        } else {
            setCheckAllCab(false)
        }
        dispatch(
            selectAllFormData({ cab: null, formName: 'psg', value: e.target.checked })
        )
    }

    function hasCabValue(): boolean {
        return data.some(item => item.value);
    }

    const data = useAppSelector((root: RootState) => root.inspection.psgCompartmentData)

    return (
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
    )
}

export default PassengerCompartmentForm