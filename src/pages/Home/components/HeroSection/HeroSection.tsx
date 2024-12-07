import ImgDeveloper from "@/assets/Img/Video game developer-pana.png";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-12 ">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
        {/* بخش تصویر */}
        <div className="flex justify-end order-1 w-full mb-8 md:w-1/2 md:order-2 md:mb-0">
          <img
            src={ImgDeveloper}
            alt="Developer"
            className="w-[580px] h-auto object-contain"
          />
        </div>

        {/* بخش متن */}
        <div className="order-2 w-full text-center md:w-1/2 md:text-right md:order-1">
          <h1 className="text-3xl  md:text-5xl font-black text-gray-800 dark:text-white leading-[50px] md:leading-[100px]">
            با ما یاد بگیرید و درآمد کسب کنید؛ جایی که آموزش و کار در کنار
            هم‌اند!
          </h1>

          <p className="mt-4 text-lg font-bold text-gray-600 dark:text-gray-300">
            یادگیری مهارت‌های جدید هیچ‌وقت این‌قدر ساده و کاربردی نبوده است.
          </p>
          <div className="items-center gap-4 mt-10 lg:flex lg:justify-stretch">
            <div>
              <Button className="p-6 bg-blue-500" rounded={"full"}>
                از این مسیر ها شروع کن{" "}
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-10 font-medium lg:mt-0 md:mt-0">
              <span>دوره های رایگان</span>
              <Link to={""}>
                <Button
                  icon={Play}
                  className="p-6 bg-pink-800 border-none"
                  rounded={"full"}
                  size={"icon"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
