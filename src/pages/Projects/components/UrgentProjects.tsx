import TittleSection from "@/shared/layouts/TittleSection/TittleSection";
import Card from "@/shared/components/Card";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Img from "@/assets/Img/image1.png";
import Profile from "@/assets/Img/image.png";

const UrgentProjects = () => {
  const dataCard = [
    {
      id: 1,
      Img: Img,
      title: "دوره‌های پرفروش",
      descreption: "توضیح مختصر دوره",
      profile: Profile,
      NameTeacher: "استاد برتر",
      TitleCourses: "موضوع دوره",
      score: "4.8",
      price: "200,000",
      people: "150",
    },
    {
      id: 2,
      Img: Img,
      title: "دوره‌های جدید",
      descreption: "توضیح مختصر دوره جدید",
      profile: Profile,
      NameTeacher: "استاد دیگر",
      TitleCourses: "موضوع جدید",
      score: "4.7",
      price: "300,000",
      people: "250",
    },
    {
      id: 3,
      Img: Img,
      title: "دوره‌های توسعه فردی",
      descreption: "توضیح مختصر دوره توسعه فردی",
      profile: Profile,
      NameTeacher: "استاد سوم",
      TitleCourses: "موضوع توسعه فردی",
      score: "4.9",
      price: "400,000",
      people: "100",
    },
    {
      id: 4,
      Img: Img,
      title: "دوره‌های تخصصی React",
      descreption: "توضیح مختصر دوره React",
      profile: Profile,
      NameTeacher: "استاد متخصص React",
      TitleCourses: "دوره تخصصی React",
      score: "5.0",
      price: "500,000",
      people: "300",
    },
    {
      id: 5,
      Img: Img,
      title: "دوره‌های تخصصی React",
      descreption: "توضیح مختصر دوره React",
      profile: Profile,
      NameTeacher: "استاد متخصص React",
      TitleCourses: "دوره تخصصی React",
      score: "5.0",
      price: "500,000",
      people: "300",
    },
    {
      id: 6,
      Img: Img,
      title: "دوره‌های تخصصی React",
      descreption: "توضیح مختصر دوره React",
      profile: Profile,
      NameTeacher: "استاد متخصص React",
      TitleCourses: "دوره تخصصی React",
      score: "5.0",
      price: "500,000",
      people: "300",
    },
    {
      id: 7,
      Img: Img,
      title: "دوره‌های تخصصی React",
      descreption: "توضیح مختصر دوره React",
      profile: Profile,
      NameTeacher: "استاد متخصص React",
      TitleCourses: "دوره تخصصی React",
      score: "5.0",
      price: "500,000",
      people: "300",
    },
  ];
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
        {dataCard.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              dataCard={{
                img: item.Img,
                title: item.title,
                descreption: item.descreption,
                profile: item.profile,
                NameTeacher: item.NameTeacher,
                TitleCourses: item.TitleCourses,
                score: item.score,
                price: item.price,
                people: item.people,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default UrgentProjects;
