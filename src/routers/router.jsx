import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Surveys from "../pages/Surveys";
import Pro from "../pages/Pro";
import PrivateRoutes from "./PrivateRoutes";
import SurveyorDashboard from "../pages/SurveyorDashboard";
import CreateSurvey from "../components/forDashboardPages/CreateSurvey";
import SurveyDetails from "../pages/SurveyDetails";
import UpdateSurvey from "../components/forDashboardPages/UpdateSurvey";
import AdminDashboard from "../pages/AdminDashboard";
import AdminSurveys from "../components/forAdminDashboard/AdminSurveys";
import ManageUsers from "../components/forAdminDashboard/ManageUsers";
import DahboardPayments from "../components/forAdminDashboard/DahboardPayments";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/surveys',
          element: <Surveys></Surveys>
        },
        {
          path: '/pro',
          element: <PrivateRoutes><Pro></Pro></PrivateRoutes>
        },
        {
          path: '/surveyorDashboard',
          element: <SurveyorDashboard></SurveyorDashboard>
        },
        {
          path: '/createSurvey',
          element: <CreateSurvey></CreateSurvey>
        },
        {
          path: '/surveyDetails',
          element: <SurveyDetails></SurveyDetails>
        },
        {
          path: '/updateSurvey/:id',
          element: <UpdateSurvey></UpdateSurvey>
        }
      ],
    },
    {
      path: '/adminDashboard',
      element: <AdminDashboard></AdminDashboard>,
      children: [
        {
          path: '/adminDashboard/surveys',
          element: <AdminSurveys></AdminSurveys>
        },
        {
          path: '/adminDashboard/manageUsers',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: '/adminDashboard/payments',
          element: <DahboardPayments></DahboardPayments>
        }
      ]
    }
  
  ]);
  export default router;