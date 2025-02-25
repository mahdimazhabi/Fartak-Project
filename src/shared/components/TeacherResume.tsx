import { useTeacherDataApi } from "@/api/teaching/TeacherDataApi";
import { Button } from "@/components/ui/button";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
const TeacherResume = () => {
  const { DataTeacherById } = useTeacherDataApi();
  console.log(DataTeacherById);

  return (
    <section>
      <div className="flex justify-center gap-10">
        {DataTeacherById?.map((item) => (
          <div className="shadow-lg rounded-lg min-w-[700px]  space-y-5 dark:bg-slate-800 bg-slate-200 px-8 py-10">
            <div key={item.userId} className="flex gap-5  ">
              <img
                className="w-52 h-52 object-cover rounded-full"
                src={`https://www.backend.fartakproject.ir/upload/teacheruserImages/${item.imageName}`}
                alt={`تصویر پروفایل ${item.imageName}`}
              />
              <div className="flex flex-col text-right ml-4 justify-center   gap-5">
                <h1 className="text-lg font-bold">{item.teacherName}</h1>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  استاد تایید شده
                </span>
                <div className="flex items-center gap-2 ">
                  <FaChalkboardTeacher size={22} />
                  <span className="text-xs">تدریس آنلاین</span>
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
              <p className="mt-4">{item.description}</p>
            </div>
          </div>
        ))}
        <div>
          <Button>مشاهده قیمت و انتخاب استاد</Button>
        </div>
      </div>
    </section>
  );
};

export default TeacherResume;
