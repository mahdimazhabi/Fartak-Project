import img from "@/assets/Img/image 1.png";

const BlogHeroSwction = () => {
  return (
    <section>
      <div className="flex flex-col-reverse items-center justify-between gap-5 lg:px-20 lg:flex-row md:flex-row ">
        <div className="border-2 border-[#E2E2E2] rounded-[30px] p-4 sm:p-6 lg:p-10 shadow-xl w-full sm:w-11/12 lg:w-[610px]">
          <h1 className="mb-5 text-3xl font-bold text-black sm:text-4xl lg:text-5xl dark:text-white">
            عنوان
          </h1>
          <p className="text-right text-[10px] sm:text-base leading-6 sm:leading-8 lg:leading-9 text-[#9C9C9C] dark:text-white">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
          </p>
          <div className="flex flex-wrap items-center justify-between mt-5 sm:flex-nowrap">
            <span className="text-[#2B4DE3] font-black cursor-pointer text-[10px] lg:text-base">
              خواندن مطلب
            </span>
            <span className="text-[#9C9C9C] dark:text-white text-[10px] lg:text-base">
              ۴ مرداد ۱۴۰۳
            </span>
          </div>
        </div>
        <div>
          <img src={img} alt="img" className="flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSwction;
