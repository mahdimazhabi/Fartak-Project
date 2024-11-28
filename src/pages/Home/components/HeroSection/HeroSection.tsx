import ImgDeveloper from "@/assets/Img/Video game developer-pana.png";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto flex flex-col md:flex-row  items-center justify-between px-4">
        {/* بخش تصویر */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <img
            src={ImgDeveloper}
            alt="Developer"
            className="w-[580px] h-auto object-contain"
          />
        </div>

        {/* بخش متن */}
        <div className="w-full md:w-1/2 text-center md:text-right  order-2 md:order-1">
          <h1 className="text-3xl  md:text-5xl font-black text-gray-800 dark:text-white leading-[50px] md:leading-[100px]">
            با ما یاد بگیرید و درآمد کسب کنید؛ جایی که آموزش و کار در کنار
            هم‌اند!
          </h1>

          <p className="mt-4 text-lg text-gray-600 font-bold dark:text-gray-300">
            یادگیری مهارت‌های جدید هیچ‌وقت این‌قدر ساده و کاربردی نبوده است.
          </p>
          <div className="lg:flex lg:justify-stretch  items-center gap-4 mt-10">
            <div>
              <Button className="bg-blue-500 p-6" rounded={"full"}>
                از این مسیر ها شروع کن{" "}
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-10 lg:mt-0 md:mt-0 font-medium">
              <span>دوره های رایگان</span>
              <Link to={""}>
                <Button
                  icon={Play}
                  className="bg-pink-800 border-none p-6"
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
