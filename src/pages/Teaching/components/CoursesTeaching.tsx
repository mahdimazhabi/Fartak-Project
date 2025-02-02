import Img1 from "@/assets/Img/imageCourses1.png";
import Img2 from "@/assets/Img/imageCourses2.png";
import Img3 from "@/assets/Img/imageCourses3.png";
import Img4 from "@/assets/Img/imageCourses4.png";
import Img5 from "@/assets/Img/imageCourses5.png";
import Img6 from "@/assets/Img/imageCourses6.png";
import Img7 from "@/assets/Img/imageCourses7.png";
import Img8 from "@/assets/Img/imageCourses8.png";
import Img9 from "@/assets/Img/imageCourses9.png";
import Img10 from "@/assets/Img/imageCourses10.png";

const courses = [
  { img: Img1, title: "برنامه نویسی" },
  { img: Img2, title: "طراحی وب" },
  { img: Img3, title: "هوش مصنوعی" },
  { img: Img4, title: "داده‌کاوی" },
  { img: Img5, title: "امنیت سایبری" },
  { img: Img6, title: "شبکه‌های کامپیوتری" },
  { img: Img7, title: "توسعه فرانت‌اند" },
  { img: Img8, title: "توسعه بک‌اند" },
  { img: Img9, title: "مدیریت پایگاه داده" },
  { img: Img10, title: "طراحی تجربه کاربری" },
];

const CoursesTeaching = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-7 gap-4 lg:p-11 md:p-11 py-11 px-1">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] dark:bg-slate-800 flex flex-col items-center shadow-md rounded-xl cursor-pointer py-11 "
          >
            <img
              src={course.img}
              alt={course.title}
              className="w-20 h-20 lg:w-32 lg:h-32 object-contain"
            />
            <p className="mt-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
              {course.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesTeaching;
