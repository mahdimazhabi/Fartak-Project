import Courser from "@/assets/Img/Rectangle 1093.png";
import { Users, User, Clock8, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCoursesApi } from "@/api/Courses/Courses";
import Loading from "@/shared/common/Loading";
import { getAlllist } from "@/shared/interfaces/CoursesInterface";
const CourserTrainingcourse = () => {
  const { data, isLoading } = useCoursesApi();

  return (
    <div className="px-6" dir="rtl">
      {isLoading && <Loading />}
      {data.courses.length > 0 ? (
        data?.courses.map((items: getAlllist) => (
          <div key={items.courseId} className="my-8 h-full">
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 justify-between bg-[#E7E7E74D] dark:bg-white/5 rounded-3xl p-4">
              {/* بخش چپ */}
              <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
                <img
                  src={Courser}
                  alt="Courser"
                  className="rounded-lg object-cover w-full max-w-[300px] lg:w-auto"
                />
                <div className="flex flex-col gap-5">
                  <h1 className="text-black dark:text-white font-bold text-lg text-center lg:text-right">
                    {items.title}
                  </h1>
                  <div className="flex flex-wrap gap-6 text-sm text-[#9C9C9C] justify-center lg:justify-start">
                    <span className="flex items-center">
                      <Users className="ml-2" /> 144 دانشجو
                    </span>
                    <span className="flex items-center">
                      <User className="ml-2" /> فرهاد حسنی
                    </span>
                    <span className="flex items-center">
                      <Clock8 className="ml-2" /> ۴ ساعت و ۴۰ دقیقه
                    </span>
                  </div>
                </div>
              </div>
              {/* بخش راست */}
              <div className="flex  lg:flex-row items-center gap-5 mt-4 lg:mt-0">
                <Button className="bg-[#8399FA] text-white px-6 py-6 text-sm rounded-xl border-none shadow-md w-full lg:w-auto">
                  یادگیری را شروع کنید!
                </Button>
                <div className="flex items-center justify-center w-14 h-14 lg:bg-[#DCDCDC] lg:dark:bg-white/5 rounded-xl">
                  <Heart className="fill-[#A8A8A899] cursor-pointer w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="my-8 h-full">
          <div className="flex flex-col  items-center  bg-[#E7E7E74D] dark:bg-white/5 rounded-3xl py-16">
            <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
              <div className="flex flex-col gap-5">
                <h1 className="  font-bold text-lg text-center text-[#E4911F] ">
                  هیچ دوره ای وجود ندارد
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourserTrainingcourse;
