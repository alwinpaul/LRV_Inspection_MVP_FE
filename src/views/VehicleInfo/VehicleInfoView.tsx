import { Table } from "antd";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";

const columns = [
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

const VehicleInfoView = () => {

    const vehicleInfoData = { ...useAppSelector((root: RootState) => root.inspection.vehilceInfo), id: 1 }

    return (
        <section className="m-3">
            <Table dataSource={[vehicleInfoData]} columns={columns} pagination={false} rowKey='id' />
        </section>

    )
}

export default VehicleInfoView