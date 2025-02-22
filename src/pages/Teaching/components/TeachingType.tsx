import teacherImg from "@/assets/Img/teaching-removebg-preview.png";
import { Button } from "@/components/ui/button";
import { GoHome } from "react-icons/go";
import { FaChalkboardTeacher } from "react-icons/fa";
import "@/shared/CoustomStyle/imdex.css";

const TeachingType = () => {
  return (
    <section className="flex justify-center items-center py-40 ">
      <div className="container flex flex-col items-center text-center mx-auto ">
        <div className=" flex  items-center gap-20">
          <div>
            <h1 className=" font-bold text-center mb-5 text-3xl">
              انتخاب سریع و آسان معلم خصوصی
            </h1>
            <span className="block text-lg font-normal text-center">
              برای تدریس به دانش‌آموزان در سراسر ایران.
            </span>
          </div>
          <div>
            <img
              src={teacherImg}
              alt="teacher"
              className="w-[480px] bg-inherit  mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-20">
          <Button className="flex items-center gap-2 px-14 py-8 bg-gradient-to-r from-blue-500  border-none to-blue-700 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-500">
            تدریس خصوصی آنلاین
            <FaChalkboardTeacher size={22} className="mr-2" />
          </Button>
          <Button className="flex items-center gap-2 px-14 py-8 bg-gradient-to-r from-green-500  border-none to-green-700 text-white rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 transition-colors duration-500">
            تدریس حضوری در منزل
            <GoHome size={22} className="mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeachingType;
