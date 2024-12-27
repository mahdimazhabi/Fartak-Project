import { RouteObject } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Authentication/login";
import Registration from "@/pages/Authentication/Registration";
import Courses from "@/pages/Courses/Courses";
import RootLayout from "@/shared/layouts/RootLayout/RootLayout";
import HeroSection from "@/pages/Home/components/HeroSection/HeroSection";
import TopCourses from "@/pages/Home/components/TopCourses/TopCourses";
import Services from "@/pages/Home/components/Services/Services";
import Professors from "@/pages/Home/components/Professors/Professors";
import AuthLayout from "@/shared/layouts/AuthLayout/AuthLayout";
import CourserTrainingcourse from "@/pages/Courses/components/CourserTrainingcourse";
import Blog from "@/pages/Blog/Blog";
import BlogHeroSwction from "@/pages/Blog/components/BlogHeroSection";
import BlogCardSection from "@/pages/Blog/components/BlogCardSection";
import BlogHighlightSection from "@/pages/Blog/components/BlogHighlightSection";
import Projects from "@/pages/Projects/Projects";
import TopProjects from "@/pages/Projects/components/TopProjects";
import UrgentProjects from "@/pages/Projects/components/UrgentProjects";
import SlidersPage from "@/shared/components/SlidersPage";
import Teaching from "@/pages/Teaching/Teaching";

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
            element: (
              <>
                <CourserTrainingcourse />
                <SlidersPage />
              </>
            ),
          },
        ],
      },
      {
        path: "/Blog",
        element: <Blog />,
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
        element: <Projects />,
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
        element: <Teaching />,
        children: [],
      },
    ],
  },
];
