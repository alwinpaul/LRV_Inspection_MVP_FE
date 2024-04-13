import { Checkbox, Input, Table } from "antd";

const DDDForm = () => {
    const columns = [
        {
            title: 'DDD',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: 'Cab A',
            dataIndex: 'cab_a',
            key: 'cab_a',
            render: () => (
                <Checkbox />
            )
        },
        {
            title: 'Cab B',
            dataIndex: 'cab_b',
            key: 'cab_b',
            render: () => (
                <Checkbox />
            )
        },
    ];

    const data = [
        {
            id: 1,
            label: "Date, Time and speed limit (80km/hr.)",
            cab_a: false,
            cab_b: false
        },
        {
            id: 2,
            label: "SVSCS Cameras",
            cab_a: false,
            cab_b: false
        },
        {
            id: 3,
            label: "Battery Voltage",
            cab_a: false,
            cab_b: false
        },
        {
            id: 4,
            label: "Perform Departure Tests (Primary and secondary vigilance, Maximum speed test and roll back test)",
            cab_a: false,
            cab_b: false
        },

    ]

    return (
        <section className="m-3">
            <Table dataSource={data} columns={columns} pagination={false} rowKey='id' />
            <div className="flex items-centre m-3">
                <div className="w-1/2 text-md text-slate-600 text-left">Record Mileage</div>
                <div className="w-1/2">
                    <Input />
                </div>
            </div>
        </section>
    )
}

export default DDDForm