import { RouteObject } from "react-router-dom";
import Login from "@/pages/Authentication/components/login";
import Registration from "@/pages/Authentication/components/Registration";
import RootLayout from "@/shared/layouts/RootLayout/RootLayout";
import AuthLayout from "@/shared/layouts/AuthLayout/AuthLayout";
import CourserTrainingcourse from "@/pages/Courses/components/CourserTrainingcourse";
import BlogHeroSwction from "@/pages/Blog/components/BlogHeroSection";
import BlogCardSection from "@/pages/Blog/components/BlogCardSection";
import BlogHighlightSection from "@/pages/Blog/components/BlogHighlightSection";
import TopProjects from "@/pages/Projects/components/TopProjects";
import UrgentProjects from "@/pages/Projects/components/UrgentProjects";
import SlidersPage from "@/shared/components/SlidersPage";
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
        children: [
          {
            path: "/Blog",
            element: (
              <>
                <BlogHeroSwction />
                <BlogCardSection />
                <BlogHighlightSection />
                <BlogCardSection />
              </>
            ),
          },
        ],
      },
      {
        path: "/Projects",
        element: <ProjectsLayout />,
        children: [
          {
            path: "/Projects",
            element: (
              <>
                <TopProjects />
                <UrgentProjects />
                <SlidersPage />
              </>
            ),
          },
        ],
      },
      {
        path: "/Teaching",
        element: <TeachingLayout />,
        children: [],
      },
    ],
  },
];
