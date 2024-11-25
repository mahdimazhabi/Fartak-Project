import TittleSection from "@/shared/layouts/TittleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import IMG from "@/assets/Img/image 11.png"; // از تصویر ارسال‌شده برای استفاده در کارت‌ها
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Professors = () => {
  return (
    <section className="py-48  flex flex-col gap-10 lg:px-20 md:px-10 px-5">
      <div>
        <TittleSection
          title="برترین اساتید"
          color="bg-yellow-600" //*/
          mode={false}
          titleCourse=""
        />
      </div>
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true} // برای تکرار شدن خودکار اسلایدها
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay, Pagination, Navigation]}
          className="flex justify-center mt-10"
        >
          <SwiperSlide>
            <div className="flex flex-col border items-center  p-4 bg-white/10 shadow-lg rounded-lg">
              <img
                src={IMG}
                alt="استاد 1"
                className="w-full sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto border-yellow-500 mb-4"
              />

              <span className="lg:text-xl text-[9px] font-semibold text-right">
                احمد استامعلی
              </span>
              <span className="text-[9px] text-gray-500">دوره JS</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col  border items-center  p-4 bg-white/10 shadow-lg rounded-lg">
              <img
                src={IMG}
                alt="استاد 1"
                className="w-full sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto border-yellow-500 mb-4"
              />

              <span className="lg:text-xl text-[9px] font-semibold ">
                علی داوکی
              </span>
              <span className="text-[9px] text-gray-500">دوره Python</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col border items-center  p-4 bg-white/10 shadow-lg rounded-lg">
              <img
                src={IMG}
                alt="استاد 1"
                className="w-full sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto border-yellow-500 mb-4"
              />

              <span className="lg:text-xl text-[9px]  font-semibold text-right">
                لیلا رجینی
              </span>
              <span className="text-[9px] text-gray-500">دوره Frontend</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col border items-center  p-4 bg-white/10 shadow-lg rounded-lg">
              <img
                src={IMG}
                alt="استاد 1"
                className="w-full sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto border-yellow-500 mb-4"
              />

              <span className="lg:text-xl text-[9px] font-semibold text-right">
                مهدی حسینی
              </span>
              <span className="text-[9px] text-gray-500">دوره React</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Professors;
