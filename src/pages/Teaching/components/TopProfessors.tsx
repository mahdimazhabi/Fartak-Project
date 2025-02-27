import { useState } from "react";
import { GroupIcon } from "@/assets";
import { Button } from "@/components/ui/button";
// import { useTeacherTypeApi } from "@/api/teaching/TeacherTypeApi";
import { useTeacherDataApi } from "@/api/teaching/TeacherDataApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ReactLoading from "react-loading";

import { StarsIcon } from "@/assets/index";
const TopProfessors = () => {
  // const { data: categories } = useTeacherTypeApi();
  const { data: teacherData, isLoading, refetch } = useTeacherDataApi();
  const [selectedCategory, setSelectedCategory] = useState("همه دروس");
  const safeTeacherData = Array.isArray(teacherData) ? teacherData : [];
  const categories = [
    { id: "1", title: "ریاضی" },
    { id: "2", title: "برنامه نویسی" },
    { id: "3", title: "گرافیک" },
    { id: "4", title: "انگلیسی" },
    { id: "5", title: "ادبیات" },
    { id: "6", title: "آی تی" },
    { id: "7", title: "موسیقی" },
  ];

  const navigate = useNavigate();
  useEffect(() => {
    refetch();
  }, [teacherData]);

  const filteredProfessors =
    selectedCategory === "همه دروس"
      ? safeTeacherData
      : safeTeacherData.filter(
          (prof) => prof.teacherTypeId === selectedCategory
        );

  return (
    <section>
      <div className="mt-20 min-h-[31rem]">
        <div className="text-center text-4xl font-bold">
          <h1>اساتید فرتاک</h1>
        </div>

        <ul className="flex justify-center gap-7 my-16">
          <li
            className={`cursor-pointer pb-2 ${
              selectedCategory === "همه دروس"
                ? "border-b-[2px] border-[#2B4DE3] dark:border-white font-semibold"
                : "text-gray-600 dark:text-gray-400"
            }`}
            onClick={() => setSelectedCategory("همه دروس")}
          >
            همه دروس
          </li>
          {categories?.map((category) => (
            <li
              key={category.id}
              className={`cursor-pointer pb-2 ${
                selectedCategory === category.id
                  ? "border-b-[2px] border-[#2B4DE3] dark:border-white font-semibold"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.title}
            </li>
          ))}
        </ul>

        {/* نمایش اساتید */}
        <div className=" px-11 mt-16">
          {isLoading ? (
            <div className="flex justify-center items-center mt-28">
              <ReactLoading
                type="spin"
                color="#2B4DE3"
                height={40}
                width={40}
              />
            </div>
          ) : filteredProfessors.length > 0 ? (
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
                1024: { slidesPerView: 4, spaceBetween: 10 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                480: { slidesPerView: 2, spaceBetween: 20 },
                0: { slidesPerView: 1, spaceBetween: 15 },
              }}
            >
              {filteredProfessors.map((prof) => (
                <SwiperSlide key={prof.userId}>
                  <div className="bg-black/10 dark:bg-black/25  rounded-xl  shadow-md flex flex-col items-center p-6">
                    <img
                      className="w-32 h-32 object-cover rounded-full"
                      src={`https://www.backend.fartakproject.ir/upload/teacheruserImages/${prof.imageName}`}
                      alt={`تصویر پروفایل ${prof.teacherName}`}
                    />

                    <div className="flex items-center gap-2 mt-2">
                      <GroupIcon className="w-6 h-6" />
                      <p className="text-lg font-medium">{prof.teacherName}</p>
                    </div>
                    {/* <div className="space-y-1 text-center mt-2">
                      <p className="text-sm text-[#B0B0B0] flex items-center gap-1.5 dark:text-gray-300">
                        <Check size={17} />
                        {prof.description || "بدون توضیحات"}
                      </p>
                    </div> */}
                    <div className="flex items-center mt-5 gap-2">
                      <span>سطح استاد :</span>
                      <StarsIcon className="w-24" />
                    </div>

                    <Button
                      className="mt-16 py-5  w-full border-none rounded"
                      onClick={() =>
                        navigate(`/teaching/resume/${prof.userId}`)
                      }
                    >
                      مشاهده رزومه
                    </Button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-500 col-span-full mt-28">
              هیچ استادی یافت نشد.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopProfessors;
