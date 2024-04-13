import { Checkbox, Table } from "antd";

const PassengerCompartmentForm = () => {
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
            render: () => (
                <Checkbox />
            )
        },
    ];

    const data = [
        {
            id: 1,
            label: "Accessibility Stop Request",
            value: false,
        },
        {
            id: 2,
            label: "Stanchions, Handrails, and hand straps.",
            value: false,
        },
        {
            id: 3,
            label: "Windows (Upper windows locked)",
            value: false,
        },
        {
            id: 4,
            label: "Articulation and Inner Bellows",
            value: false,
        },
        {
            id: 5,
            label: "Interior panels, lights floor and seats",
            value: false,
        },
        {
            id: 6,
            label: "CCTV Cameras, Signs and Displays",
            value: false,
        },
        {
            id: 7,
            label: "Interior Jacking hole E module",
            value: false,
        },
        {
            id: 8,
            label: "Emergency Hammer, EED normalize",
            value: false,
        },
        {
            id: 9,
            label: "General Condition and Cleanliness",
            value: false,
        },
        {
            id: 10,
            label: "Door Open close and Sensitive Edge",
            value: false,
        },
        {
            id: 11,
            label: "Decals, Verify operation of Saloon HVAC units",
            value: false,
        },
        {
            id: 12,
            label: "Accessibility and Emergency Intercoms",
            value: false,
        },
        {
            id: 13,
            label: "Crew pushbuttons",
            value: false,
        },


    ]

    return (
        <section className="m-3">
            <Table dataSource={data} columns={columns} pagination={false} rowKey='id' />
        </section>
    )
}

export default PassengerCompartmentForm