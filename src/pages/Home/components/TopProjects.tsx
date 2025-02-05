import TittleSection from "@/shared/components/TittleSection";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Img from "@/assets/Img/image1.png";
import Profile from "@/assets/Img/image.png";
import CardProjects from "@/shared/components/CardProjects";

const TopProjects = () => {
  const dataCard = [
    {
      id: 1,
      Img: Img,
      title: "دوره‌های پرفروش",
      descreption: "توضیح مختصر دوره",
      profile: Profile,
      TitleProjects: "موضوع دوره",
      score: 4.8,
      price: 200000,
      time: "14",
    },
    {
      id: 2,
      Img: Img,
      title: "دوره‌های جدید",
      descreption: "توضیح مختصر دوره جدید",
      profile: Profile,
      NameTeacher: "استاد دیگر",
      TitleProjects: "موضوع جدید",
      score: 4.7,
      price: 300000,
      time: "14",
    },
    {
      id: 3,
      Img: Img,
      title: "دوره‌های توسعه فردی",
      descreption: "توضیح مختصر دوره توسعه فردی",
      profile: Profile,
      NameTeacher: "استاد سوم",
      TitleProjects: "موضوع توسعه فردی",
      score: 4.9,
      price: 400000,
      time: "14",
    },
    {
      id: 4,
      Img: Img,
      title: "دوره‌های تخصصی React",
      descreption: "توضیح مختصر دوره React",
      profile: Profile,
      NameTeacher: "استاد متخصص React",
      TitleProjects: "دوره تخصصی React",
      score: 5.0,
      price: 500000,
      time: "14",
    },
    {
      id: 5,
      Img: Img,
      title: "دوره‌های تخصصی React",
      descreption: "توضیح مختصر دوره React",
      profile: Profile,
      NameTeacher: "استاد متخصص React",
      TitleProjects: "دوره تخصصی React",
      score: 5.0,
      price: 500000,
      time: "14",
    },
    {
      id: 6,
      Img: Img,
      title: "دوره‌های تخصصی React",
      descreption: "توضیح مختصر دوره React",
      profile: Profile,
      NameTeacher: "استاد متخصص React",
      TitleProjects: "دوره تخصصی React",
      score: 5.0,
      price: 500000,
      time: "14",
    },
    {
      id: 7,
      Img: Img,
      title: "دوره‌های تخصصی React",
      descreption: "توضیح مختصر دوره React",
      profile: Profile,
      NameTeacher: "استاد متخصص React",
      TitleProjects: "دوره تخصصی React",
      score: 5.0,
      price: 500000,
      time: "14",
    },
  ];

  return (
    <section className="gap-10 px-5 pt-32 lg:px-20 md:px-10">
      {/* Header */}
      <TittleSection
        title="پروژه‌های برتر"
        color="bg-yellow-600"
        titleCourse=""
        mode={false}
      />

      {/* Swiper */}
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="flex justify-center mt-10 "
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
        {dataCard.map((item) => (
          <SwiperSlide key={item.id}>
            <CardProjects
              dataCardProject={{
                descreption: item.descreption,
                score: item.score,
                price: item.price,
                timeProject: item.time,
                TitleProject: item.TitleProjects,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopProjects;
