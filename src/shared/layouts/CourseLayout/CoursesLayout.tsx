import { Outlet } from "react-router-dom";
import CoursesHeader from "@/pages/Courses/components/CoursesHeader";

const CoursesLayout = () => {
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

      <Outlet />
    </>
  );
};

export default CoursesLayout;
