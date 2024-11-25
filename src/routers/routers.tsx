import { RouteObject } from "react-router-dom";
import Home from "@/pages/Home";

export const AllRouters: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];
