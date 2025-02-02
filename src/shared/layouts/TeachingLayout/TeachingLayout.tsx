import CoursesHeader from "@/pages/Courses/components/CoursesHeader";
import CoursesTeaching from "@/pages/Teaching/components/CoursesTeaching";
import TopProfessors from "@/pages/Teaching/components/TopProfessors";
import TeachingFartak from "@/pages/Teaching/components/TeachingFartak";
import TeacherEnglish from "@/pages/Teaching/components/TeacherEnglish";
const TeachingLayout = () => {
  return (
    <>
      <CoursesHeader
        title="همه دروس"
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
      <CoursesTeaching />
      <TopProfessors />
      <TeachingFartak />
      <TeacherEnglish />
    </>
  );
};

export default TeachingLayout;
