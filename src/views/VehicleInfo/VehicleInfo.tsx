import { Button, Form, Input } from "antd"
import { IVehicleInfo } from "../../types/inspectionTypes"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormItem } from "react-hook-form-antd";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { updateVehilceData } from "../../store/slice/InspectionSlice";
import { useEffect } from "react";
import { RootState } from "../../store/store";


const schema = z.object({
    vehicle_id: z.string(),
    technician_id_1: z.string(),
    technician_id_2: z.string().nullable(),
    work_order_number: z.string().nullable()
});


const VehicleInfo = () => {

    const dispatch = useAppDispatch()

    const vehicleData = useAppSelector((root: RootState) => root.inspection.vehilceInfo)

    const saveData = (data: IVehicleInfo) => {
        dispatch(updateVehilceData(data))
    }

    const { control,
        handleSubmit,
        formState: { errors },
    } = useForm<IVehicleInfo>({
        resolver: zodResolver(schema),
        defaultValues: vehicleData
    });

    useEffect(() => {
        if (errors) {
            console.log(errors)
        }
    }, [errors])

    return (
        <section className="m-20 w-11/12">
            <>
                <Form
                    style={{ maxWidth: 600 }}
                    onFinish={handleSubmit((data) => {
                        console.log(data)
                        saveData(data)
                    })}
                >
                    <div className="flex items-centre">
                        <div className="w-1/2 text-md text-slate-600 text-left">Vehicle Id</div>
                        <div className="w-1/2">
                            <FormItem control={control} name="vehicle_id">
                                <Input />
                            </FormItem>
                        </div>
                    </div>
                    <div className="flex items-centre">
                        <div className="w-1/2 text-md text-slate-600 text-left">Technician Id 1</div>
                        <div className="w-1/2">
                            <FormItem control={control} name="technician_id_1">
                                <Input />
                            </FormItem>
                        </div>
                    </div>
                    <div className="flex items-centre">
                        <div className="w-1/2 text-md text-slate-600 text-left">Technician Id 2</div>
                        <div className="w-1/2">
                            <FormItem control={control} name="technician_id_2">
                                <Input />
                            </FormItem>
                        </div>
                    </div>
                    <div className="flex items-centre">
                        <div className="w-1/2 text-md text-slate-600 text-left">Work Order Number</div>
                        <div className="w-1/2">
                            <FormItem control={control} name="work_order_number">
                                <Input />
                            </FormItem>
                        </div>
                    </div>
                    <div className="m-6">
                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large">
                                <div className="px-12">Next</div>
                            </Button>
                        </Form.Item>
                    </div>
                </Form>

            </>


        </section>
    )
}

export default VehicleInfo