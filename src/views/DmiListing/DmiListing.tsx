import { PlusCircleOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { getDmiListing } from "../../thunks/dmiListing.thunk"
import { RootState } from "../../store/store"
import DmiDetail from "../DmiDetail/DmiDetail"
import { IDmiListing } from "../../types/inspectionTypes"
import DmiTableDesktop from "../DmiTable/DmiTableDesktop"
import DmiTableMobile from "../DmiTable/DmiTableMobile"

const DmiListing = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const dmiList = useAppSelector((root: RootState) => root.inspection.dmiListing)
    const isDmiLoading = useAppSelector((root: RootState) => root.inspection.isDmiLoading)

    const [selectedListing, setSelectedListing] = useState<IDmiListing | null>(null)

    useEffect(() => {
        dispatch(getDmiListing())
    }, [])

    const handleNewInspection = () => {
        navigate('inspect')
    }

    const showDetail = (dmiData: IDmiListing) => {
        setSelectedListing(dmiData)
    }

    const onModalClose = () => {
        setSelectedListing(null)
    }

    return (
        <section className="mt-5 w-full">
            <div className="h-10 w-full border-b ">
                <Button className="float-right flex items-center" type="primary" onClick={handleNewInspection}>
                    <PlusCircleOutlined /> New Inspection
                </Button>
            </div>
            {
                isDmiLoading && (
                    <div className="h-36 text-slate-300 text-center w-full">Loading DMI list..Please Wait</div>
                )
            }
            {
                !isDmiLoading && dmiList && (
                    (
                        <>
                            <div className="w-full">
                                <DmiTableDesktop showDetail={showDetail} />
                                <DmiTableMobile showDetail={showDetail} />
                            </div>
                            {
                                selectedListing && <DmiDetail handleClose={onModalClose} isOpen={selectedListing !== null} dmiData={selectedListing} />
                            }

                        </>
                    )
                )
            }

        </section>
    )
}

export default DmiListing