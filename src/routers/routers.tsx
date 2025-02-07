import { RouteObject } from "react-router-dom";
import Login from "@/pages/Authentication/components/login";
import Registration from "@/pages/Authentication/components/Registration";
import RootLayout from "@/shared/layouts/RootLayout/RootLayout";
import AuthLayout from "@/shared/layouts/AuthLayout/AuthLayout";
import TeachingLayout from "@/shared/layouts/TeachingLayout/TeachingLayout";
import HomeLayout from "@/shared/layouts/HomeLayout/HomeLayout";
import CoursesLayout from "@/shared/layouts/CourseLayout/CoursesLayout";
import BlogLayout from "@/shared/layouts/BlogLayout/BlogLayout";
import ProjectsLayout from "@/shared/layouts/projectsLayout/ProjectsLayout";
import ProjectRegistration from "@/pages/Projects/components/ProjectRegistration";
import RequiredKind from "@/shared/required/RequiredKind";

export const AllRouters: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/registration",
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
        path: "/courses",
        element: <CoursesLayout />,
      },
      {
        path: "/blog",
        element: <BlogLayout />,
      },
      {
        path: "/projects",
        element: <ProjectsLayout />,
      },
      {
        path: "projects/registration",
        element: (
          <RequiredKind>
            <ProjectRegistration />
          </RequiredKind>
        ),
      },
      {
        path: "/teaching",
        element: <TeachingLayout />,
      },
    ],
  },
];
