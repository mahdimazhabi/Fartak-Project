import img from "@/assets/Img/image 7.png";

const BlogHighlightSection = () => {
  return (
    <section className="mt-80">
      <div className="flex flex-col-reverse lg:flex-row justify-between  shadow-xl items-start lg:items-center rounded-[30px]">
        <div className="p-4 sm:p-6 lg:p-10 w-full sm:w-11/12 lg:w-[600px]">
          <h1 className="mb-5 text-3xl font-bold text-black sm:text-4xl lg:text-5xl dark:text-white">
            عنوان
          </h1>
          {/* عنوان */}
          {/* توضیحات */}
          <p className="text-right text-[10px] sm:text-base leading-6 sm:leading-8 lg:leading-9 text-[#9C9C9C] dark:text-white">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
          </p>
          {/* جزئیات */}
          <div className="flex flex-wrap items-center justify-between mt-5 sm:flex-nowrap">
            <span className="text-[#2B4DE3] font-black cursor-pointer text-[10px] lg:text-base">
              خواندن مطلب
            </span>
            <span className="text-[#9C9C9C] dark:text-white text-[10px] lg:text-base">
              ۴ مرداد ۱۴۰۳
            </span>
          </div>
        </div>
        {/* تصویر */}
        <div className="w-full lg:w-auto">
          <img src={img} alt="" className="rounded-b-[30px] lg:rounded-none" />
        </div>
      </div>
    </section>
  );
};

export default BlogHighlightSection;
