import TittleSection from "@/shared/components/TittleSection";

const Services = () => {
  return (
    <section className="py-48 flex flex-col gap-10 lg:px-20 md:px-10 px-5">
      <div>
        <TittleSection
          title="
        ما چه کمکی میتونیم بهت بکنیم  ؟"
          color="bg-blue-600"
          mode={false}
          titleCourse=""
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className=" bg-white bg-opacity-10 rounded-lg lg:p-8 p-4 border-2 border-yellow-400 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 shadow-lg shadow-yellow-500/50">
          <h1 className="text-xl font-bold text-white mb-3 dark:text-shadow-xl">
            فریلنسینگ
          </h1>
          <p className="text-white font-bold lg:text-base md:text-sm text-xs">
            فرصت‌های متعددی برای ارائه خدمات مستقل در زمینه‌های مانند توسعه وب
          </p>
        </div>
        <div className=" bg-white bg-opacity-10 rounded-lg border-2 border-teal-400 lg:p-8 p-4 bg-gradient-to-r from-teal-300 via-teal-500 to-teal-600 shadow-lg shadow-teal-500/50">
          <h1 className="text-xl font-bold text-white mb-3 dark:text-shadow-xl">
            دوره‌های آموزشی
          </h1>
          <p className="text-white font-bold lg:text-base md:text-sm text-xs">
            دوره‌های آموزشی گسترده در زمینه‌های مختلف از جمله علوم کامپیوتر،
            زبان‌ها، هنرها و...
          </p>
        </div>
        <div className=" bg-white bg-opacity-10 border-2 border-pink-400 rounded-lg lg:p-8 p-4 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-600 shadow-lg shadow-pink-500/50">
          <h1 className="text-xl font-bold text-white mb-3 dark:text-shadow-xl">
            پاسخگویی سریع
          </h1>
          <p className="text-white font-bold lg:text-base md:text-sm text-xs">
            پاسخگویی سریع به سوالات و راهنمایی‌های فنی در طول شبانه‌روز
          </p>
        </div>
        <div className=" bg-white bg-opacity-10 border-2 border-blue-400 rounded-lg lg:p-8 p-4 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 shadow-lg shadow-blue-500/50">
          <h1 className="text-xl font-bold text-white mb-3 dark:text-shadow-xl">
            دوره‌های آموزشی (تکراری)
          </h1>
          <p className="text-white font-bold lg:text-base md:text-sm text-xs">
            دوره‌های آموزشی گسترده در زمینه‌های مختلف از جمله علوم کامپیوتر،
            زبان‌ها، هنرها و...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
