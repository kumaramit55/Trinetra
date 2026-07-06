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
import ConsultationAudit from "./pages/compliance&aduit";
import Licensing from "./pages/licensing";
import JobOpportunities from "./pages/jobs";
import Resources from "./pages/resources";
import StaffingSolutions from "./pages/contracting";
import LiaisoningRegistration from "./pages/liaisoning-registration";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },  // Default route at "/"
      { path: "it-staffing-solutions", element: <ItStaffings /> },
      { path: "payroll-and-operations", element: <Payroll /> },
      { path: "recruitment", element: <Recruitment /> },
      { path: "/contracting", element: <StaffingSolutions/> },
      { path: "/consultation-audit", element: <ConsultationAudit /> },
      { path: "job-opportunities", element: <JobOpportunities /> },
      { path: "services/liaisoning-registration", element: <LiaisoningRegistration /> },
      
      { path: "about-us", element: <AboutUs /> },
      { path: "talk-to-us", element: <TalktoUs /> },
    ],
  },
]);

export default routes;

