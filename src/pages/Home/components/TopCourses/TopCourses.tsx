import { Users, CreditCard, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Img from "@/assets/Img/image1.png";
import Profile from "@/assets/Img/image.png";
import TittleSection from "@/shared/layouts/TittleSection/TittleSection";

const DataCourses = [
  { id: 1, Img: Profile, title: "دوره‌های پرفروش" },
  { id: 2, Img: Profile, title: "دوره‌های پرفروش" },
  { id: 3, Img: Profile, title: "دوره‌های پرفروش" },
  { id: 4, Img: Profile, title: "دوره‌های پرفروش" },
  { id: 5, Img: Profile, title: "دوره‌های پرفروش" },
  { id: 6, Img: Profile, title: "دوره‌های پرفروش" },
  { id: 8, Img: Profile, title: "دوره‌های پرفروش" },
  { id: 9, Img: Profile, title: "دوره‌های پرفروش" },
  { id: 10, Img: Profile, title: "دوره‌های پرفروش" },
  { id: 11, Img: Profile, title: "دوره‌های پرفروش" },
  { id: 12, Img: Profile, title: "دوره‌های پرفروش" },
  { id: 13, Img: Profile, title: "دوره‌های پرفروش" },
];

const TopCourses = () => {
  return (
    <section className="py-48  flex flex-col gap-10 lg:px-20 md:px-10 px-5">
      {/* Header */}
      <TittleSection
        title="دوره‌های پرفروش"
        color="bg-yellow-600"
        mode={true}
        titleCourse="مشاهده همه دوره‌ها"
      />

      {/* Courses Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {DataCourses.map((item) => (
          <div
            key={item.id}
            className="dark:bg-slate-800 bg-[#F4F4F4] rounded-2xl shadow-md"
          >
            <img
              src={Img}
              alt="Course Cover"
              className="w-full h-40 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <span className="text-black dark:text-white font-semibold">
                دوره‌های آموزشی
              </span>
              <p className="text-[11px] mt-4 leading-loose text-gray-700 dark:text-gray-300">
                در دنیای امروز، پایتون به عنوان یکی از محبوب‌ترین و قدرتمندترین
                زبان‌های برنامه‌نویسی شناخته می‌شود. این زبان برنامه‌نویسی به
                دلیل سادگی و خوانایی بالای آن، به ویژه برای افراد تازه‌کار در
                حوزه برنامه‌نویسی، بسیار مناسب است...
              </p>
            </div>
            <div className="flex items-center justify-between px-4 mb-4">
              <div className="flex items-center gap-2">
                <img
                  src={Profile}
                  alt="Instructor"
                  className="w-10 h-9 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-black text-[9px] dark:text-white">
                    فرهاد حسنی
                  </span>
                  <span className="text-[8px] text-gray-500 dark:text-gray-400">
                    مدرس پایتون و هوش مصنوعی
                  </span>
                </div>
              </div>
              <div className="flex gap-2 ">
                <span className="text-yellow-500 text-sm font-medium">3.5</span>
                <Star className="text-yellow-500 fill-current w-4 h-4" />
              </div>
            </div>
            <hr className="border border-[#BBBBBB]" />
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-2 text-[#626262] dark:text-white">
                <Users />
                <span className="text-sm">144 نفر</span>
              </div>
              <Button className="bg-[#5171FC] px-4 py-5 text-white hover:bg-[#405ecf] flex items-center gap-2 rounded-lg">
                <CreditCard className="w-5 h-5" />
                4,500,000 تومان
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCourses;
