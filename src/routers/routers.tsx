import { RouteObject } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Authentication/login";
import Registration from "@/pages/Authentication/Registration";

export const AllRouters: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
];
