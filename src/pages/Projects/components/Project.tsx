import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { Plus } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Star } from "lucide-react";
const Project = () => {
  return (
    <section>
      <div className="lg:flex space-y-3 lg:space-y-0 md:flex md:space-y-0 justify-between gap-3 items-start mt-20 px-4">
        <div className="p-10 bg-slate-100 rounded h-auto">
          <h1 className="text-black border-b-2 pb-4 text-center">
            پیشنهاد های باقی مانده
          </h1>
          <div className="flex flex-col justify-center border-b-2 mt-5">
            <Button
              className="bg-white border-none text-blue-500 hover:bg-white px-20 py-6"
              shadow={"none"}
            >
              10
            </Button>
            <span className="text-xs text-center mt-2 text-blue-600">
              پیشنهاد های باقی
              <span className="block mt-2 pb-7"> مانده شما 10</span>
            </span>
          </div>
          <div className="bg-red-500 cursor-pointer hover:bg-red-400 transition-colors flex py-4 px-4 rounded justify-center mt-10  items-center gap-2">
            <Plus className="bg-white/20 rounded text-white" size={20} />
            <span className="text-white text-xs">افزایش پیشنهاد ها</span>
          </div>
        </div>

        <div className="lg:flex justify-between w-full hover:shadow-lg  bg-slate-100 hover:shadow-blue-200 transition-shadow rounded h-auto">
          <div>
            <div className="p-9">
              <h1 className="font-semibold text-[#E4911F] mb-4">
                ادیت ویدیو به صورت حرفه ای
              </h1>
              <div className="flex items-center mb-4">
                <span className="text-xs text-black border-l-2 px-2">
                  بودجه 180,000 تومان
                </span>
                <span className="text-xs text-black mr-2">
                  {" "}
                  زمان پیشنهادی 1 روز
                </span>
              </div>
              <div className="flex items-center">
                <Toggle asChild>
                  <span className="bg-white/20 p-3 rounded-md cursor-pointer">
                    <Bookmark size={10} className="text-black" />
                  </span>
                </Toggle>
                <span className="text-black text-xs ml-3">امتیاز کارفرما</span>
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
              </div>
              <div>
                <p className="text-black text-xs mt-3   max-w-[900px] break-words  line-clamp-2 leading-5 ">
                  یک سایت وردپرسی که کار خاصی روش انجام نشده نیاز به طراحی
                  دوباره داره و اضافه کردن موضوع های دیگه و جلوه های بهتر و
                  همینطور بهبود سرعت تغییر ظاهری و همینطور اضافه کردن مواردی با
                  کد نویسی یک سایت وردپرسی که کار خاصی روش انجام نشده نیاز به
                  طراحی دوباره داره و اضافه کردن موضوع های دیگه و جلوه های بهتر
                  و همینطور بهبود سرعت تغییر ظاهری و همینطور اضافه کردن مواردی
                  با کد نویسی
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2.5 p-5">
            <Button className="border-[#2DD6B8] bg-[#2dd6b73b] hover:border-[#2DD6B8] hover:bg-[#2DD6B8] text-[#2DD6B8]  font-bold hover:text-white transition-colors text-xs">
              مشاهده پروژه
            </Button>
            <Button className="border-[#4160F5] hover:bg-[#415ff5] bg-[#415ff52d] hover:border-[#4160F5] text-[#4160F5] font-bold text-xs hover:text-white transition-colors">
              ثبت پیشنهاد پروژه
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
