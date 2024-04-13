import { Button, Checkbox, Radio } from "antd"
import TextArea from "antd/es/input/TextArea"


const passFailOptions = [
    { label: 'Pass', value: true },
    { label: 'Fail', value: false },
];

const NotesForm = () => {
    return (
        <section>
            <div className="flex items-center justify-start flex-wrap">
                <div className="w-6/12 text-left mt-4 p-2">
                    <Checkbox>Maximum WO Completed</Checkbox>
                </div>
                <div className="w-6/12 text-left mt-4 p-2">
                    <Checkbox>Exterior wash/Sand/Washer fluid If required</Checkbox>
                </div>
                <div className="w-6/12 text-left mt-4 p-2">
                    <Checkbox>Daily Clean completed</Checkbox>
                </div>
                <div className="w-6/12 text-left mt-4 p-2">
                    <Checkbox>Weekly clean if required</Checkbox>
                </div>
            </div>

            <div className="mt-8 text-left">
                <div>Notes:</div>
                <TextArea rows={4} />
            </div>

            <div className="mt-8 text-left flex justify-between">
                <div>Fit for Revenue Service</div>
                <div className="w-2/12">
                    <Radio.Group
                        options={passFailOptions}
                        optionType="button"
                        buttonStyle="solid"
                        defaultValue={true}
                    />
                </div>
            </div>

            <div className="my-12">
                <Button type="primary" size="large" className="px-24">Submit</Button>
            </div>
        </section>
    )
}

export default NotesForm