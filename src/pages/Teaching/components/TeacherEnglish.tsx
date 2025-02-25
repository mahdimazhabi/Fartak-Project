import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { GroupIcon } from "@/assets";
import img from "@/assets/Img/image 11.png";
import { ChevronDown } from "lucide-react";
import "swiper/swiper-bundle.css";
import { useTeacherDataApi } from "@/api/teaching/TeacherDataApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const TeacherEnglish = () => {
  const { data } = useTeacherDataApi();
  const safeTeacherData = Array.isArray(data) ? data : [];
  const professors =
    safeTeacherData?.filter((item) => item.teacherTypeId === "9") || [];

  return (
    <section className="mt-20">
      <h1 className="text-center text-4xl font-bold">اساتید زبان انگلیسی</h1>
      <div className=" px-11 mt-16">
        {professors.length > 0 ? (
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="flex justify-center mt-10"
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }}
          >
            {professors.map((prof) => (
              <SwiperSlide key={prof.userId}>
                <div
                  key={prof.teacherTypeId}
                  className="bg-[#F7F7F7] dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center p-6 w-full"
                >
                  <img
                    className="w-32 h-32 object-cover rounded-full"
                    src={img}
                    alt={`Profile picture of ${prof.imageName}`}
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <p className="text-lg font-medium">{prof.imageName}</p>
                    <GroupIcon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 text-center mt-2">
                    <p className="text-sm text-[#B0B0B0] flex items-center gap-1.5 dark:text-gray-300">
                      <Check size={17} />
                      {prof.description}
                    </p>
                  </div>
                  <Button className="mt-3 w-full border-none rounded-full bg-blue-500 text-white">
                    مشاهده رزومه
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            هیچ استادی یافت نشد.
          </p>
        )}
      </div>

      <div className="flex justify-center py-32">
        <Button
          className="bg-[#96A9FF5E] dark:bg-[#1D40D7] dark:text-white border-[#1D40D7] bottom-1  text-[#1D40D7] rounded-md p-6 hover:text-white"
          icon={ChevronDown}
          size={"md"}
        >
          موارد بیشتر
        </Button>
      </div>
    </section>
  );
};

export default TeacherEnglish;
