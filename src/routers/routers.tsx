import { RouteObject } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Authentication/login";
import Registration from "@/pages/Authentication/Registration";
import Courses from "@/pages/Courses/Courses";
import CoursesHeader from "@/pages/Courses/components/CoursesHeader";
import RootLayout from "@/shared/layouts/RootLayout/RootLayout";
import HeroSection from "@/pages/Home/components/HeroSection/HeroSection";
import TopCourses from "@/pages/Home/components/TopCourses/TopCourses";
import Services from "@/pages/Home/components/Services/Services";
import Professors from "@/pages/Home/components/Professors/Professors";
import AuthLayout from "@/shared/layouts/AuthLayout/AuthLayout";
export const AllRouters: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/Login",
        element: <Login />,
      },
      {
        path: "/auth/Registration",
        element: <Registration />,
      },
    ],
  },

  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: (
              <>
                <HeroSection />
                <TopCourses />
                <Services />
                <Professors />
              </>
            ),
          },
        ],
      },
      {
        path: "/Courses",
        element: <Courses />,
        children: [
          {
            path: "/Courses",
            element: <CoursesHeader />,
          },
        ],
      },
    ],
  },
];
