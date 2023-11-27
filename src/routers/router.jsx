import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Surveys from "../pages/Surveys";
import Pro from "../pages/Pro";
import PrivateRoutes from "./PrivateRoutes";

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
        }
      ]
    },
  ]);
  export default router;