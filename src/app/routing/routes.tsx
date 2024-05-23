import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "../modules/auth/components/Login";

const routes = createBrowserRouter([
    {
        path: "/",
        element: Navigate({to: '/dashboard'}),
    },
    {
        path: "/auth/login",
        element: <Login />,
        errorElement: <Navigate to="/error/404" />,
    },
]);
export default routes