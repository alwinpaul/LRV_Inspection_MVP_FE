import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InspectionForm from "../views/InspectionForm/InspectionForm";
import Login from "../views/Login/Login";
import Review from "../views/Review/Review";
import ProtectedRoute from "../components/Auth/ProtectedRoute";


const router = createBrowserRouter([
    {
        path: "/dmi",
        element: <ProtectedRoute />,
        children: [
            {
                path: "inspect",
                element: <InspectionForm />,
            },
            {
                path: "review",
                element: <Review />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },

])

function Routes() {

    return (
        <RouterProvider router={router} />
    )
}

export default Routes