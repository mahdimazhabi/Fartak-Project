import CoursesTeaching from "@/pages/Teaching/components/CoursesTeaching";
import TopProfessors from "@/pages/Teaching/components/TopProfessors";
import TeachingFartak from "@/pages/Teaching/components/TeachingFartak";
import TeacherEnglish from "@/pages/Teaching/components/TeacherEnglish";
import CoursesHeadareTeaching from "@/pages/Teaching/components/CoursesHeadareTeaching";
import TeachingType from "@/pages/Teaching/components/TeachingType";
const TeachingLayout = () => {
  return (
    <>
      <CoursesHeadareTeaching />
      <TeachingType />
      <CoursesTeaching />
      <TopProfessors />
      <TeachingFartak />
      <TeacherEnglish />
    </>
  );
};

export default TeachingLayout;
