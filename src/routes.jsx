import Home from "./pages/home";
import Layout from "./Components/layout/layout";
import { createBrowserRouter } from "react-router-dom";

import Payroll from "./pages/payroll&operations";
import AboutUs from "./pages/abouts-us";
import TalktoUs from "./pages/talk-to-us";
import ItStaffings from "./pages/it-staffings";
import Recruitment from "./pages/recruitment/recruitment";

const routes=createBrowserRouter(
[{
    path:'/',
    element:<Layout/>,
    children:[
        {path:"",element:<Home/>},
        {path:"it-staffing-solutions" ,element:<ItStaffings/>},
        {path:"payroll-and-operations", element:<Payroll/>},
        {path:"recruitment", element:<Recruitment/>},
        {path:"about-us", element:<AboutUs/>},
         {path:"talkto-us", element:<TalktoUs/>},
        
    ]
}])

export default routes;