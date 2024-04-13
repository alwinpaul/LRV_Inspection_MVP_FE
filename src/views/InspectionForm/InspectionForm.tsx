import VehicleInfo from "../VehicleInfo/VehicleInfo"
import VehicleInfoView from "../VehicleInfo/VehicleInfoView"
import CabForm from "../CabForm/CabForm"
import { useAppSelector } from "../../hooks/hooks"
import { RootState } from "../../store/store"
import DDDForm from "../DDDForm/DDDForm"
import PassengerCompartmentForm from "../PasengarCompartmentForm/PassengerCompartmentForm"
import ExteriorForm from "../ExteriorForm/ExteriorForm"

const InspectionForm = () => {


    const currentPage = useAppSelector((root: RootState) => root.inspection.currentPage)


    return (
        <section>
            <h2 className="text-centre text-xl text-slate-600 font-bold">LRV Daily Inspection / Maintenance</h2>
            {currentPage === 1 ? (
                <VehicleInfo />
            ) : (
                <div className="w-8/12 m-auto pt-8">
                    <VehicleInfoView />
                    <CabForm />
                    <PassengerCompartmentForm />
                    <DDDForm />
                    <ExteriorForm />
                </div>
            )}
        </section>
    )
}

export default InspectionForm