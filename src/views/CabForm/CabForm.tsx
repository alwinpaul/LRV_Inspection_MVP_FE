import { Checkbox, Table } from "antd";

const CabForm = () => {
    const columns = [
        {
            title: 'Cab Condition and Function',
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
            label: "Operator's Seat, Belt, Footrest",
            cab_a: false,
            cab_b: false
        },
        {
            id: 2,
            label: "Interior Mirrors, Sun Visors and Blinds",
            cab_a: false,
            cab_b: false
        },
        {
            id: 3,
            label: "Broom, Switch bar()one Cab, Fire extinguisher, Emergency Hammer",
            cab_a: false,
            cab_b: false
        },
        {
            id: 4,
            label: "Ceiling panels and perch seat are secured",
            cab_a: false,
            cab_b: false
        },
        {
            id: 5,
            label: "Left console switches are normal and sealed, wall panels secured",
            cab_a: false,
            cab_b: false
        },
        {
            id: 6,
            label: "WIFI Router is ON and GFCI not tripped",
            cab_a: false,
            cab_b: false
        },
        {
            id: 7,
            label: "Lamp Test and 4-way Flashers",
            cab_a: false,
            cab_b: false
        },
        {
            id: 8,
            label: "Gong, bell, and horn",
            cab_a: false,
            cab_b: false
        },
        {
            id: 9,
            label: "Washers/Wipers and Distress push button",
            cab_a: false,
            cab_b: false
        },
        {
            id: 10,
            label: "Sanders, PA (Int/Ext)",
            cab_a: false,
            cab_b: false
        },
        {
            id: 11,
            label: "Enable LHS/RHS door, Stop request",
            cab_a: false,
            cab_b: false
        },
        {
            id: 12,
            label: "Cab Lights and Instructor switch",
            cab_a: false,
            cab_b: false
        },
        {
            id: 13,
            label: "Radio and ADU test",
            cab_a: false,
            cab_b: false
        },
        {
            id: 14,
            label: "Door open Pink Decal Present",
            cab_a: false,
            cab_b: false
        }
    ]

    return (
        <section className="m-3">
            <Table dataSource={data} columns={columns} pagination={false} rowKey='id' />
        </section>
    )
}

export default CabForm