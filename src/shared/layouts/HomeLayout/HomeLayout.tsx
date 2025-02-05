import { Outlet } from "react-router-dom";
import Frequentlyaskedquestions from "@/pages/Home/components/Frequentlyaskedquestions";
import HeroSection from "@/pages/Home/components/HeroSection";
import TopCourses from "@/pages/Home/components/TopCourses";
import Services from "@/pages/Home/components/Services";
import Professors from "@/pages/Home/components/Professors";
import TopProjects from "@/pages/Home/components/TopProjects";
import UrgentProjects from "@/pages/Home/components/UrgentProjects";

const HomeLayout = () => {
  return (
    <>
      <HeroSection />
      <TopCourses />
      <TopProjects />
      <Services />
      <UrgentProjects />
      <Professors />
      <Frequentlyaskedquestions />
      <Outlet />
    </>
  );
};

export default HomeLayout;
