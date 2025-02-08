import CoursesHeader from "@/pages/Courses/components/CoursesHeader";
import SlidersPage from "@/shared/components/SlidersPage";
import Project from "@/pages/Projects/components/Project";
import { Outlet } from "react-router-dom";
const ProjectsLayout = () => {
  return (
    <>
      <CoursesHeader
        title="همه پروژه ها"
        dataHeader={[
          { id: 1, title: "برنامه نویسی ", url: "" },
          { id: 2, title: "گرافیک ", url: "" },
          { id: 3, title: "زبان انگلیسی ", url: "" },
          { id: 4, title: "ریاضی ", url: "" },
          { id: 5, title: " ادبیات", url: "" },
          { id: 6, title: " آی تی", url: "" },
          { id: 7, title: " موسیقی", url: "" },
        ]}
      />
      <Project />
      <SlidersPage />
     
      <Outlet />
    </>
  );
};

export default ProjectsLayout;
