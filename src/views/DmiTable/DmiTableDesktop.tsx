import { CloudDownloadOutlined, EyeOutlined } from "@ant-design/icons"
import { Button, Space, Table, TableProps, Collapse } from "antd"
import { IDmiListing } from "../../types/inspectionTypes"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../hooks/hooks"
import { RootState } from "../../store/store"
import { categorizeListing, getAccordianLabels } from "../../utils/dmiTableUtils"

interface IDmiTableDesktop {
    showDetail: (item: IDmiListing) => void
}

interface IColumnType {
    dateTime: string;
    vehicle_id: string;
    technician_id_1: string;
    technician_id_2: string;
    work_order_number: string;
    pdf: string;
    ref: IDmiListing;
    _id: string
}


const DmiTableDesktop = ({ showDetail }: IDmiTableDesktop) => {

    const dmiList = useAppSelector((root: RootState) => root.inspection.dmiListing)

    const [todaysList, setTodaysList] = useState<IColumnType[] | null>(null)
    const [yesterdaysList, setYesterdaysList] = useState<IColumnType[] | null>(null)
    const [olderList, setOlderList] = useState<IColumnType[] | null>(null)
    const collapseLabels = getAccordianLabels()

    useEffect(() => {
        const categorizedData = categorizeListing(dmiList)
        setTodaysList(categorizedData.today)
        setYesterdaysList(categorizedData.yesterday)
        setOlderList(categorizedData.olderData)
    }, [dmiList])

    const columns: TableProps<IColumnType>['columns'] = [
        {
            title: 'Date & Time',
            dataIndex: 'dateTime',
            key: 'dateTime',
            render: (text) => <span>{new Date(text).toLocaleString()}</span>,
        },
        {
            title: 'Vehicle Id',
            dataIndex: 'vehicle_id',
            key: 'vehicle_id',
        },
        {
            title: 'Technician 1',
            dataIndex: 'technician_id_1',
            key: 'technician_id_1',
        },
        {
            title: 'Technician 2',
            dataIndex: 'technician_id_2',
            key: 'technician_id_2',
        },
        {
            title: 'WO Number',
            dataIndex: 'work_order_number',
            key: 'work_order_number',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item) => (
                <Space size="middle">
                    <Button className="text-xl" type="link" onClick={() => showDetail(item.ref)}><EyeOutlined /></Button>
                    {item.pdf && (
                        <Button type="link" className="text-xl" href={item.pdf} target="_blank">
                            <CloudDownloadOutlined />
                        </Button>
                    )}
                </Space>
            ),
        },
    ];

    return (
        <div className="hidden lg:block">
            <Space direction="vertical" className="w-full">
                <Collapse
                    defaultActiveKey={['1']}
                    size="large"
                    items={[
                        {
                            key: '1',
                            label: <div className="font-bold text-left">Current <span className="font-normal text-xs">{collapseLabels.todayLabel}</span> </div>,
                            children: todaysList && <Table columns={columns} dataSource={todaysList} rowKey={(record) => record._id} />
                        },
                    ]}
                />
                <Collapse
                    defaultActiveKey={['2']}
                    size="large"
                    items={[
                        {
                            key: '2',
                            label: <div className="font-bold text-left">Previous <span className="font-normal text-xs">{collapseLabels.yesterdayLabel}</span></div>,
                            children: yesterdaysList && <Table columns={columns} dataSource={yesterdaysList} rowKey={(record) => record._id} />
                        },
                    ]}
                />
                <Collapse
                    defaultActiveKey={['3']}
                    size="large"
                    items={[
                        {
                            key: '3',
                            label: <div className="font-bold text-left">Older <span className="font-normal text-xs">{collapseLabels.olderLabel}</span></div>,
                            children: olderList && <Table columns={columns} dataSource={olderList} rowKey={(record) => record._id} />
                        },
                    ]}
                />
            </Space>
        </div>
    )
}

export default DmiTableDesktop