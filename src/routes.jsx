import Home from "./pages/home";
import Layout from "./Components/layout/layout";
import { createBrowserRouter } from "react-router-dom";
import Payroll from "./pages/payroll&operations";
import AboutUs from "./pages/abouts-us";
import TalktoUs from "./pages/talk-to-us";
import ItStaffings from "./pages/it-staffings";
import Recruitment from "./pages/recruitment/recruitment";
import TemporaryRecruitment from "./pages/recruitment/tempory";
import PermanentRecruitment from "./pages/recruitment/permanent";
import WhiteCollarStaffing from "./pages/contracting/whitecolor";
import BlueCollarStaffing from "./pages/contracting/bluecollar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "it-staffing-solutions", element: <ItStaffings /> },
      { path: "payroll-and-operations", element: <Payroll /> },
      { path: "recruitment", element: <Recruitment /> },
      { path: "recruitment/temp-staff", element: <TemporaryRecruitment /> },
      { path: "recruitment/perm-staff", element: <PermanentRecruitment /> },
      { path: "contracting/white-color", element: <WhiteCollarStaffing /> },
       { path: "contracting/blue-color", element: <BlueCollarStaffing /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "talkto-us", element: <TalktoUs /> },
    ],
  },
]);

export default routes;
