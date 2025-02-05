import TittleSection from "@/shared/components/TittleSection";
import Card from "@/shared/components/CardCourses";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useProjectApi from "@/api/Project/ProjectApi";
import { getList } from "@/shared/interfaces/ProjectInterface";

const UrgentProjects = () => {
  const { data } = useProjectApi();
  console.log("Fetched Data:", data);

  return (
    <section className="gap-10 px-5 pt-48 lg:px-20 md:px-10">
      {/* Header */}
      <TittleSection
        title="پروژه‌های برتر"
        color="bg-yellow-600"
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
              <Card
                dataCard={{
                  img: `https://www.backendtestali.ir/upload/Projects/${
                    item.image || "default.jpg"
                  }`,
                  title: item.title,
                  descreption: item.description,
                  profile: `https://www.backendtestali.ir/upload/Projects/${
                    item.image || "default.jpg"
                  }`,
                  NameTeacher: item.description,
                  TitleCourses: item.title,
                  score: item.projectTypeId,
                  price: item.price,
                  people: "12",
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
