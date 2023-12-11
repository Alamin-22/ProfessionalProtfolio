import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import AboutUs from "../Pages/AbutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            }
        ]
    },
]);

export default router;