import TittleSection from "@/shared/layouts/TittleSection/TittleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import IMG from "@/assets/Img/image 11.png"; // تصویر ارسال‌شده
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Professors = () => {
  // داده‌های اساتید
  const professors = [
    { name: "احمد استامعلی", course: "دوره JS", image: IMG },
    { name: "علی داوکی", course: "دوره Python", image: IMG },
    { name: "لیلا رجینی", course: "دوره Frontend", image: IMG },
    { name: "مهدی حسینی", course: "دوره React", image: IMG },
  ];

  return (
    <section className="flex flex-col gap-10 px-5 py-48 lg:px-20 md:px-10">
      {/* بخش عنوان */}
      <div>
        <TittleSection
          title="برترین اساتید"
          color="bg-yellow-600"
          mode={false}
          titleCourse=""
        />
      </div>

      {/* بخش اسلایدر */}
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="flex justify-center mt-10"
        >
          {professors.map((professor, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white/10">
                {/* تصویر استاد */}
                <img
                  src={professor.image}
                  alt={`استاد ${professor.name}`}
                  className="w-full h-auto mb-4 border-yellow-500 sm:w-32 md:w-40 lg:w-48 xl:w-56"
                />
                {/* نام استاد */}
                <span className="lg:text-xl text-[9px] font-semibold text-right">
                  {professor.name}
                </span>
                {/* دوره استاد */}
                <span className="text-[9px] text-gray-500">
                  {professor.course}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Professors;
