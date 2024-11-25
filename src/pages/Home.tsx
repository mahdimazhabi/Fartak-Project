import Header from "@/shared/components/Header/Header";
import { Outlet } from "react-router-dom";
import HeroSection from "@/shared/components/HeroSection/HeroSection";
import TopCourses from "@/shared/components/TopCourses/TopCourses";
import Services from "@/shared/components/Services/Services";
import Professors from "@/shared/components/Professors/Professors";
const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <TopCourses />
      <Services />
      <Professors />
      <Outlet />
    </>
  );
};

export default Home;
