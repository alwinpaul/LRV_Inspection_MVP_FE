import { Checkbox, Table } from "antd";

const ExteriorForm = () => {
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
            render: () => (
                <Checkbox />
            )
        },
    ];

    const data = [
        {
            id: 1,
            label: "Sanders",
            value: false,
        },
        {
            id: 2,
            label: "Lights, Camera, and destination Sign",
            value: false,
        },
        {
            id: 3,
            label: "Windshields and Wipers blade",
            value: false,
        },
        {
            id: 4,
            label: "Windows and Doors",
            value: false,
        },
        {
            id: 5,
            label: "Bellows",
            value: false,
        },
        {
            id: 6,
            label: "Panels and covers are closed and secured",
            value: false,
        },
        {
            id: 7,
            label: "Decals and Paintwork",
            value: false,
        },
        {
            id: 8,
            label: "Roof and water boxes, Pantograph (Weekly)",
            value: false,
        },
        {
            id: 9,
            label: "EAD covers and buttons",
            value: false,
        },
        {
            id: 10,
            label: "Undercar (Weekly)",
            value: false,
        }
    ]

    return (
        <section className="m-3">
            <Table dataSource={data} columns={columns} pagination={false} rowKey='id' />
        </section>
    )
}

export default ExteriorForm