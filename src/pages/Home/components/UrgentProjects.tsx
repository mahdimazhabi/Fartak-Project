import TittleSection from "@/shared/components/TittleSection";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useProjectApi from "@/api/Project/ProjectApi";
import { getList } from "@/shared/interfaces/ProjectInterface";
import CardProjects from "@/shared/components/CardProjects";

const UrgentProjects = () => {
  const { data } = useProjectApi();

  return (
    <section className="gap-10 px-5 pt-48 lg:px-20 md:px-10">
      {/* Header */}
      <TittleSection
        title="پروژه‌های فوری"
        color="bg-red-600"
        titleCourse=""
        mode={false}
      />

      {/* Swiper */}
      {data?.projects && data.projects.length > 0 ? (
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
          {data.projects.map((item: getList) => (
            <SwiperSlide key={item.projectId}>
              <CardProjects
                dataCardProject={{
                  descreption: item.description,
                  score: item.ownerId,
                  price: item.price,
                  timeProject: "14",
                  TitleProject: item.title,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex justify-center mt-20">
          <span>پروژه‌ای وجود ندارد</span>
        </div>
      )}
    </section>
  );
};

export default UrgentProjects;
