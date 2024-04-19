import { Alert, Button, Input, Radio, RadioChangeEvent, Space } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { ChangeEvent, useState } from "react";
import { resetForms, updateFitForService, updateMileage, updateNotes } from "../../store/slice/InspectionSlice";
import { RootState } from "../../store/store";


const passFailOptions = [
    { label: 'Pass', value: true },
    { label: 'Fail', value: false },
];



const NotesForm = () => {

    const dispatch = useAppDispatch();

    const [showResetAlert, setShowResetAlert] = useState(false)

    const mileage = useAppSelector((rootState: RootState) => rootState.inspection.mileage)
    const notes = useAppSelector((rootState: RootState) => rootState.inspection.notes)
    const fitForService = useAppSelector((rootState: RootState) => rootState.inspection.fitForService)

    const handleMileageChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            updateMileage(parseInt(e.target.value))
        )
    }

    const handleNotesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(
            updateNotes(e.target.value)
        )
    }

    const handleFitForServiceChange = (e: RadioChangeEvent) => {
        updateFitForService(e.target.checked)
    }

    const handleResetForm = () => {
        dispatch(resetForms())
    }

    return (
        <section>
            <div className="pb-20">
                <div className="flex items-centre m-3">
                    <div className="w-1/2 text-md text-slate-600 text-left">Record Mileage</div>
                    <div className="w-1/2">
                        <Input value={mileage} type="number" onChange={handleMileageChange} />
                    </div>
                </div>



                <div className="mt-8 text-left">
                    <div className="text-md font-bold">Notes :</div>
                    <TextArea rows={4} onChange={handleNotesChange} value={notes} />
                </div>

                <div className="mt-8 text-left flex justify-between">
                    <div className="font-bold text-md">Fit for Revenue Service : </div>
                    <div className="sm:w-2/12">
                        <Radio.Group
                            options={passFailOptions}
                            optionType="button"
                            buttonStyle="solid"
                            value={fitForService}
                            onChange={handleFitForServiceChange}
                        />
                    </div>
                </div>
            </div>

            {showResetAlert && (
                <div className="fixed bottom-20 bg-[#f7f7f7] w-11/12 z-10 sm:w-4/12 sm:right-10">
                    <Alert
                        message="All changes will be lost!"
                        description="Are you sure you want to reset the form?"
                        type="info"
                        action={
                            <Space direction="vertical">
                                <Button type="primary" onClick={handleResetForm}>
                                    Yes
                                </Button>
                                <Button danger ghost onClick={() => setShowResetAlert(false)}>
                                    No
                                </Button>
                            </Space>
                        }
                    />
                </div>

            )}

            <div className="fixed bottom-0 left-0 py-5 bg-[#f7f7f7] w-full z-10">
                <Button type="default" size="large" className="px-3 sm:px-20 mx-3" onClick={() => setShowResetAlert(true)}>Reset</Button>
                <Button type="primary" size="large" className="px-3 sm:px-20 mx-3">Review</Button>
            </div>
        </section>
    )
}

export default NotesForm