import { RouteObject } from "react-router-dom";
import Login from "@/pages/Authentication/components/login";
import Registration from "@/pages/Authentication/components/Registration";
import RootLayout from "@/shared/layouts/RootLayout/RootLayout";
import AuthLayout from "@/shared/layouts/AuthLayout/AuthLayout";
import TeachingLayout from "@/shared/layouts/TeachingLayout/TeachingLayout";
import HomeLayout from "@/shared/layouts/HomeLayout/HomeLayout";
import CoursesLayout from "@/shared/layouts/CourseLayout/CoursesLayout";
import BlogLayout from "@/shared/layouts/BogLayout/BlogLayout";
import ProjectsLayout from "@/shared/layouts/projectsLayout/ProjectsLayout";
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
        element: <HomeLayout />,
      },
      {
        path: "/Courses",
        element: <CoursesLayout />,
      },
      {
        path: "/Blog",
        element: <BlogLayout />,
      },
      {
        path: "/Projects",
        element: <ProjectsLayout />,
      },
      {
        path: "/Teaching",
        element: <TeachingLayout />,
      },
    ],
  },
];
