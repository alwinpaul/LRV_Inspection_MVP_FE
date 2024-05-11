import { CloudDownloadOutlined, EyeOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { getDmiListing } from "../../thunks/dmiListing.thunk"
import { RootState } from "../../store/store"
import DmiDetail from "../DmiDetail/DmiDetail"
import { IDmiListing } from "../../types/inspectionTypes"

const DmiListing = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const dmiList = useAppSelector((root: RootState) => root.inspection.dmiListing)
    const isDmiLoading = useAppSelector((root: RootState) => root.inspection.isDmiLoading)

    const [selectedListing, setSelectedListing] = useState<IDmiListing | null>(null)

    useEffect(() => {
        dispatch(getDmiListing())
    }, [])

    const handleNewInspection = () => {
        navigate('inspect')
    }

    const showDetail = (dmiData: IDmiListing) => {
        setSelectedListing(dmiData)
    }

    const onModalClose = () => {
        setSelectedListing(null)
    }

    return (
        <section className="mt-5 w-full">
            <div className="h-10 w-full border-b ">
                <Button className="float-right flex items-center" type="primary" onClick={handleNewInspection}>
                    <PlusCircleOutlined /> New Inspection
                </Button>
            </div>
            {
                isDmiLoading && (
                    <div className="h-36 text-slate-300 text-center w-full">Loading DMI list..Please Wait</div>
                )
            }
            {
                !isDmiLoading && dmiList && (
                    (
                        <>
                            <div className="w-full">
                                {dmiList && dmiList.map((item) => (
                                    <div key={item._id} className="m-2 p-2 border rounded-lg border-slate-400">
                                        <div className="flex items-center my-1">
                                            <div className="w-5/12 text-left text-sm">Date & Time</div>
                                            <div className="w-7/12 text-left font-bold text-sm">{new Date(item.dateTime).toLocaleString()}</div>
                                        </div>
                                        <div className="flex items-center my-1">
                                            <div className="w-5/12 text-left text-sm">Vehicle Id</div>
                                            <div className="w-7/12 text-left font-bold text-sm">{item.vehicleInfo.vehicle_id || 'NA'}</div>
                                        </div>
                                        <div className="flex items-center my-1">
                                            <div className="w-5/12 text-left text-sm">Technician 1</div>
                                            <div className="w-7/12 text-left font-bold text-sm">{item.vehicleInfo.technician_id_1 || 'NA'}</div>
                                        </div>
                                        <div className="flex items-center my-1">
                                            <div className="w-5/12 text-left text-sm">Technician 2</div>
                                            <div className="w-7/12 text-left font-bold text-sm">{item.vehicleInfo.technician_id_2 || 'NA'}</div>
                                        </div>
                                        <div className="flex items-center my-1">
                                            <div className="w-5/12 text-left text-sm">WO number</div>
                                            <div className="w-7/12 text-left font-bold text-sm">{item.vehicleInfo.work_order_number || 'NA'}</div>
                                        </div>
                                        <div className="flex items-center my-1 justify-end">
                                            <Button type="link" onClick={() => showDetail(item)}><EyeOutlined /></Button>
                                            <Button type="link"><CloudDownloadOutlined /></Button>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            {
                                selectedListing && <DmiDetail handleClose={onModalClose} isOpen={selectedListing !== null} dmiData={selectedListing} />
                            }

                        </>
                    )
                )
            }

        </section>
    )
}

export default DmiListing