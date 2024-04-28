import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InspectionForm from "../views/InspectionForm/InspectionForm";
import Login from "../views/Login/Login";
import Review from "../views/Review/Review";


const router = createBrowserRouter([
    {
        path: "/",
        element: <InspectionForm />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/review",
        element: <Review />,
    },
])

function Routes() {

    return (
        <RouterProvider router={router} />
    )
}

export default Routes