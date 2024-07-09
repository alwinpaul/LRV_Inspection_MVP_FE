import { CloudDownloadOutlined, EyeOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { IDmiListing } from "../../types/inspectionTypes"
import { useAppSelector } from "../../hooks/hooks"
import { RootState } from "../../store/store"

interface IDmiTableMobile {
    showDetail: (item: IDmiListing) => void
}

const DmiTableMobile = ({ showDetail }: IDmiTableMobile) => {

    const dmiList = useAppSelector((root: RootState) => root.inspection.dmiListing)

    return (
        <div className="block lg:hidden">
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
                        {item.pdf && (
                            <a href={item.pdf} target="_blank">
                                <CloudDownloadOutlined />
                            </a>
                        )}

                    </div>
                </div>
            ))}
        </div>
    )
}

export default DmiTableMobile