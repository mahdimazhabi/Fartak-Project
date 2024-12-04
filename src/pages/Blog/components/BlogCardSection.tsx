import img from "@/assets/Img/image 2.png";

const BlogCardSection = () => {
  const dataCard = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <section className="mt-80">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
        {dataCard.map((items) => (
          <div
            key={items.id}
            className="border-2 border-[#E2E2E2] rounded-[47px] shadow-xl w-full sm:w-11/12 "
          >
            <img src={img} alt="img" className="w-full" />
            <h1 className="p-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl dark:text-white sm:p-6">
              عنوان
            </h1>
            <p className="text-right text-[10px] sm:text-base leading-6 sm:leading-8 p-4  lg:leading-9 text-[#9C9C9C] dark:text-white">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای
            </p>
            <div className="flex flex-wrap items-center justify-between p-4 sm:flex-nowrap sm:p-6">
              <span className="text-[#2B4DE3] font-black cursor-pointer text-[10px] lg:text-base">
                خواندن مطلب
              </span>
              <span className="text-[#9C9C9C] dark:text-white text-[10px] lg:text-base">
                ۴ مرداد ۱۴۰۳
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default BlogCardSection;
