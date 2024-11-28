import Courser from "@/assets/Img/Rectangle 1093.png";
import { Users, User, Clock8, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface dataTypeCourser {
  id: number;
  title: string;
}

const CourserTrainingcourse = () => {
  const dataCourser: dataTypeCourser[] = [
    { id: 1, title: "دوره آموزش برنامه نویسی پایتون" },
    { id: 2, title: "دوره آموزش تولید محتوا" },
    { id: 3, title: "دوره آموزش برنامه نویسی فلاتر" },
    { id: 4, title: "دوره آموزش برنامه نویسی پایتون" },
    { id: 5, title: "دوره آموزش تولید محتوا" },
    { id: 6, title: "دوره آموزش برنامه نویسی فلاتر" },
    { id: 7, title: "دوره آموزش برنامه نویسی پایتون" },
    { id: 8, title: "دوره آموزش تولید محتوا" },
  ];

  return (
    <div className="px-6" dir="rtl">
      {dataCourser.map((items) => (
        <div key={items.id} className="my-8 h-full">
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
      ))}
    </div>
  );
};

export default CourserTrainingcourse;
