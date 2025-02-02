import { Outlet } from "react-router-dom";
import Frequentlyaskedquestions from "@/pages/Home/components/Frequentlyaskedquestions/Frequentlyaskedquestions";
import HeroSection from "@/pages/Home/components/HeroSection/HeroSection";
import TopCourses from "@/pages/Home/components/TopCourses/TopCourses";
import Services from "@/pages/Home/components/Services/Services";
import Professors from "@/pages/Home/components/Professors/Professors";

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
