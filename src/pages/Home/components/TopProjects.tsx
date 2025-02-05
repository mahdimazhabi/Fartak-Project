import TittleSection from "@/shared/components/TittleSection";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Profile from "@/assets/Img/image.png";
import CardProjects from "@/shared/components/CardProjects";

const TopProjects = () => {
  const dataCard = [
    {
      id: 1,
      title: "دوره‌های پرفروش",
      descreption:
        "این دوره‌ها شامل بهترین و پرفروش‌ترین آموزش‌ها هستند که توسط کاربران زیادی مورد توجه قرار گرفته‌اند. با گذراندن این دوره‌ها، می‌توانید مهارت‌های خود را در زمینه‌های مختلف تقویت کنید.",
      profile: Profile,
      TitleProjects: "موضوع دوره",
      score: 4.8,
      price: 200000,
      time: "14",
    },
    {
      id: 2,
      title: "دوره‌های جدید",
      descreption:
        "دوره‌های جدید شامل آموزش‌های به‌روز و مطابق با آخرین تغییرات صنعت هستند. این دوره‌ها به شما کمک می‌کنند تا همیشه یک قدم جلوتر از رقبایتان باشید.",
      profile: Profile,
      TitleProjects: "موضوع جدید",
      score: 4.7,
      price: 300000,
      time: "14",
    },
    {
      id: 3,

      title: "دوره‌های توسعه فردی",
      descreption:
        "این دوره‌ها به شما کمک می‌کنند تا مهارت‌های فردی و روانشناسی خود را تقویت کرده و در زندگی شخصی و شغلی خود به موفقیت‌های بیشتری دست یابید.",
      profile: Profile,
      NameTeacher: "استاد سوم",
      TitleProjects: "موضوع توسعه فردی",
      score: 4.9,
      price: 400000,
      time: "14",
    },
    {
      id: 4,

      title: "دوره‌های تخصصی React",
      descreption:
        "دوره‌های تخصصی React، بهترین انتخاب برای افرادی است که می‌خواهند در زمینه توسعه وب با استفاده از React به تخصص برسند. این دوره‌ها به صورت عملی و پروژه محور طراحی شده‌اند.",
      profile: Profile,
      NameTeacher: "استاد متخصص React",
      TitleProjects: "دوره تخصصی React",
      score: 5.0,
      price: 500000,
      time: "14",
    },
    {
      id: 5,

      title: "دوره‌های تخصصی React",
      descreption:
        "آموزش‌های تخصصی React به شما می‌آموزند تا با این کتابخانه قدرتمند به سرعت پروژه‌های حرفه‌ای و مقیاس‌پذیر بسازید. این دوره‌ها شامل موضوعات پیشرفته و چالش‌های عملی است.",
      profile: Profile,
      NameTeacher: "استاد متخصص React",
      TitleProjects: "دوره تخصصی React",
      score: 5.0,
      price: 500000,
      time: "14",
    },
    {
      id: 6,

      title: "دوره‌های تخصصی React",
      descreption:
        "دوره‌های تخصصی React برای کسانی که می‌خواهند به عمق مفاهیم React و طراحی اپلیکیشن‌های پیچیده بپردازند، طراحی شده‌اند. در این دوره‌ها، از جدیدترین تکنیک‌ها و ابزارها استفاده می‌شود.",
      profile: Profile,
      NameTeacher: "استاد متخصص React",
      TitleProjects: "دوره تخصصی React",
      score: 5.0,
      price: 500000,
      time: "14",
    },
    {
      id: 7,
      title: "دوره‌های تخصصی React",
      descreption:
        "در این دوره‌ها، شما با مفاهیم پیشرفته React آشنا می‌شوید و مهارت‌های خود را برای ساخت پروژه‌های واقعی تقویت می‌کنید. این دوره‌ها مناسب توسعه‌دهندگان حرفه‌ای است.",
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
