import { useTeacherDataApi } from "@/api/teaching/TeacherDataApi";
import { Button } from "@/components/ui/button";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";

import Loading from "../common/Loading";
import { StarsIcon } from "@/assets";
const TeacherResume = () => {
  const { DataTeacherById, DataTeacherByIdLoading } = useTeacherDataApi();


  return (
    <section>
      {DataTeacherByIdLoading && <Loading />}
      <div className="flex justify-center gap-10 mt-20 flex-wrap">
        {DataTeacherById?.map((item) => (
          <div className="shadow-lg rounded-2xl lg:min-w-[700px] min-w-[300px]  space-y-10 dark:bg-slate-800 bg-slate-200 px-8 py-10">
            <div key={item.userId} className="flex flex-wrap gap-5">
              <img
                className="lg:w-52 lg:h-52 w-28 h-28 object-cover rounded"
                src={`https://www.backend.fartakproject.ir/upload/teacheruserImages/${item.imageName}`}
                alt={`تصویر پروفایل ${item.imageName}`}
              />
              <div className="flex flex-col text-right ml-4 justify-center lg:gap-5 gap-2.5">
                <h1 className="lg:text-2xl  text-xs font-medium">
                  {item.teacherName}
                </h1>
                <span className="lg:text-sm text-xs text-gray-600 dark:text-gray-400">
                  استاد تایید شده
                </span>
                <div className="flex items-center text-xs lg:text-sm gap-2">
                  <span>سطح استاد :</span>
                  <StarsIcon className="w-24" />
                </div>
                <div className="flex items-center gap-2 ">
                  <FaChalkboardTeacher size={22} />
                  <span className="lg:text-xs text-[10px]">تدریس آنلاین</span>
                </div>
                <div className="lg:text-sm text-xs">
                  <span>استان : {item.city}</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 ">
                <FaChalkboardUser size={28} className="text-blue-600" />
                <span className="text-black dark:text-white font-semibold">
                  درباره استاد
                </span>
              </div>
              <p className="mt-4  text-sm">{item.description}</p>
            </div>
          </div>
        ))}
        <div className="dark:bg-slate-800 bg-slate-200 lg:px-8 px-4 py-8 sticky top-20      rounded-2xl h-min lg:min-w-[550px] shadow-lg">
          <p className="lg:text-base text-xs">
            برای مشاهده قیمت باید نوع تدریس و درس را انتخاب کنید
          </p>
          <div className="lg:w-full">
            <Button className="w-full  border-none mt-10" rounded={"md"}>
              مشاهده قیمت و انتخاب استاد
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherResume;
