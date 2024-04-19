import { Checkbox, Table } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";
import { ICabFormItem } from "../../types/inspectionTypes";
import { selectAllFormData, updateCabFormData } from "../../store/slice/InspectionSlice";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";

const CabForm = () => {

    const dispatch = useAppDispatch()

    const [checkAllCabA, setCheckAllCabA] = useState(false)
    const [checkAllCabB, setCheckAllCabB] = useState(false)

    const columns = [
        {
            title: 'Cab Condition and Function',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: 'Cab A',
            dataIndex: 'cab_a_value',
            key: 'cab_a_value',
            render: (value: boolean, record: ICabFormItem) => (
                <Checkbox checked={value} onChange={() => updateCabValue(record, 'cab_a_value')} />
            )
        },
        {
            title: 'Cab B',
            dataIndex: 'cab_b_value',
            key: 'cab_b_value',
            render: (value: boolean, record: ICabFormItem) => (
                <Checkbox checked={value} onChange={() => updateCabValue(record, 'cab_b_value')} />
            )
        },
    ];

    const updateCabValue = (record: ICabFormItem, cab: 'cab_a_value' | 'cab_b_value') => {
        if (record.cab_a_value) {
            setCheckAllCabA(false)
        }
        if (record.cab_b_value) {
            setCheckAllCabB(false)
        }
        dispatch(updateCabFormData({ record, cab }))
    }

    const selectAllCabAFields = (e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            setCheckAllCabA(true)
        } else {
            setCheckAllCabA(false)
        }
        dispatch(
            selectAllFormData({ cab: 'A', formName: 'cab', value: e.target.checked })
        )
    }

    const selectAllCabBFields = (e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            setCheckAllCabB(true)
        } else {
            setCheckAllCabB(false)
        }
        dispatch(
            selectAllFormData({ cab: 'B', formName: 'cab', value: e.target.checked })
        )
    }

    function hasCabValue(cab: 'A' | 'B'): boolean {
        return data.some(item => item[cab === "A" ? 'cab_a_value' : 'cab_b_value']);
    }


    const data = useAppSelector((root: RootState) => root.inspection.cabFormData)

    return (
        <section className="my-9 border rounded-md border-slate-200 shadow-md">
            <div className="w-full flex items-center justify-end">
                <div className="p-2 mr-3 text-xs font-bold">Select All</div>
                <div className="p-2">
                    <Checkbox checked={checkAllCabA} indeterminate={!checkAllCabA && hasCabValue("A")} onChange={selectAllCabAFields}>
                        <span className="text-xs">Cab A</span>
                    </Checkbox>
                </div>
                <div className="p-2">
                    <Checkbox checked={checkAllCabB} indeterminate={!checkAllCabB && hasCabValue("B")} onChange={selectAllCabBFields}>
                        <span className="text-xs">Cab B</span>
                    </Checkbox>
                </div>
            </div>
            <Table dataSource={data} columns={columns} pagination={false} rowKey='id' />
        </section>
    )
}

export default CabForm