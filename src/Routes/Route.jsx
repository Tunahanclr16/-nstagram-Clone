import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'register',
        element:<Register/>
    }
]);
export default router;