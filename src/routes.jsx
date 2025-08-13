import Home from "./pages/home";
import Layout from "./Components/layout/layout";
import { createBrowserRouter } from "react-router-dom";
import ITSTAFFINGS from "./pages/it-staffings";
import Payroll from "./pages/payroll&operations";

const routes=createBrowserRouter(
[{
    path:'/',
    element:<Layout/>,
    children:[
        {path:"",element:<Home/>},
        {path:"it-staffing-solutions" ,element:<ITSTAFFINGS/>},
        {path:"payroll-and-operations", element:<Payroll/>}
    ]
}])

export default routes;