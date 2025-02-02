import { Outlet } from "react-router-dom";
import HoverComponetsTeacher from "@/shared/components/HoverComponetsTeacher";

const HomeLayout = () => {
  return (
    <>
      <HoverComponetsTeacher />
      <Outlet />
    </>
  );
};

export default HomeLayout;
