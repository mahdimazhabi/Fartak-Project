import { Outlet } from "react-router-dom";
import Frequentlyaskedquestions from "@/pages/Home/components/Frequentlyaskedquestions";
import HeroSection from "@/pages/Home/components/HeroSection";
import TopCourses from "@/pages/Home/components/TopCourses";
import Services from "@/pages/Home/components/Services";
import Professors from "@/pages/Home/components/Professors";

const HomeLayout = () => {
  return (
    <>
      <HeroSection />
      <TopCourses />
      <Services />
      <Professors />
      <Frequentlyaskedquestions />
      <Outlet />
    </>
  );
};

export default HomeLayout;
