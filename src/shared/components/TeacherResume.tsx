import { useTeacherDataApi } from "@/api/teaching/TeacherDataApi";
import { Button } from "@/components/ui/button";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Loading from "../common/Loading";
const TeacherResume = () => {
  const { DataTeacherById, DataTeacherByIdLoading } = useTeacherDataApi();
  console.log(DataTeacherById);

  return (
    <section>
      {DataTeacherByIdLoading && <Loading />}
      <div className="flex justify-center gap-10 mt-20">
        {DataTeacherById?.map((item) => (
          <div className="shadow-lg rounded-2xl min-w-[700px]  space-y-10 dark:bg-slate-800 bg-slate-200 px-8 py-10">
            <div key={item.userId} className="flex gap-5   ">
              <img
                className="w-52 h-52 object-cover rounded"
                src={`https://www.backend.fartakproject.ir/upload/teacheruserImages/${item.imageName}`}
                alt={`تصویر پروفایل ${item.imageName}`}
              />
              <div className="flex flex-col text-right ml-4 justify-center   gap-5">
                <h1 className="text-2xl font-medium">{item.teacherName}</h1>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  استاد تایید شده
                </span>
                <div className="flex items-center gap-2">
                  <span>سطح استاد :</span>
                  <FaStar
                    size={12}
                    color="gold"
                    className=" relative bottom-[1px]"
                  />
                </div>
                <div className="flex items-center gap-2 ">
                  <FaChalkboardTeacher size={22} />
                  <span className="text-xs">تدریس آنلاین</span>
                </div>
                <div className="text-sm">
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
        <div className="dark:bg-slate-800 bg-slate-200 px-8 py-4 sticky top-20    rounded-2xl h-min min-w-[550px] shadow-lg">
          <p>برای مشاهده قیمت باید نوع تدریس و درس را انتخاب کنید</p>
          <div className="w-full">
            <Button className="w-full border-none mt-10" rounded={"md"}>
              مشاهده قیمت و انتخاب استاد
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherResume;
