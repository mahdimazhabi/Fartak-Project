import CoursesHeader from "@/pages/Courses/components/CoursesHeader";
import TopProjects from "@/pages/Projects/components/TopProjects";
import UrgentProjects from "@/pages/Projects/components/UrgentProjects";
import SlidersPage from "@/shared/components/SlidersPage";

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
      <TopProjects />
      <UrgentProjects />
      <SlidersPage />
    </>
  );
};

export default ProjectsLayout;
