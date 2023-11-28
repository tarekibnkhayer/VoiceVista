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
        }
      ]
    },
  
  ]);
  export default router;