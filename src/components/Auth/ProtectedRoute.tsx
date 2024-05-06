import { Navigate, Outlet } from "react-router"
import { useAppSelector } from "../../hooks/hooks"
import { RootState } from "../../store/store"
import { LoadingOutlined } from "@ant-design/icons"

const ProtectedRoute = () => {


    const isAuthenticated = useAppSelector((root: RootState) => root.user.isAuthenticated)
    const isAuthLoading = useAppSelector((root: RootState) => root.user.isAuthLoading)

    return (
        <>
            {isAuthLoading ? (
                <div className="h-96 flex items-center justify-center text-slate-500 text-xs">
                    Loading User Details...
                    <div className="mx-3">
                        <LoadingOutlined />
                    </div>
                </div>
            ) : (
                isAuthenticated ? <Outlet /> : <Navigate to="/login" />
            )}
        </>

    )
}

export default ProtectedRoute