import { Button } from "@/components/ui/button";
import { Bookmark, Plus, Star } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import useProjectApi from "@/api/Project/ProjectApi";
import { getList } from "@/shared/interfaces/ProjectInterface";
import Loading from "@/shared/common/Loading";

const Project = () => {
  const { listProjectsData, listProjectsLoading } = useProjectApi();
  const reversedData = listProjectsData?.projects
    ? [...listProjectsData.projects].reverse()
    : [];

  return (
    <section>
      {listProjectsLoading && <Loading />}
      <div className="lg:flex  space-y-3 lg:space-y-0 md:flex md:space-y-0 justify-between gap-3 items-start mt-20 px-4">
        <div className="p-10 bg-slate-200 rounded h-auto">
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
        <div className="flex flex-col flex-grow gap-5">
          {reversedData.length > 0 ? (
            reversedData.map((items: getList) => (
              <div
                key={items.projectId}
                className="lg:flex justify-between w-full hover:shadow-md bg-slate-200 hover:shadow-blue-200 transition-shadow rounded h-auto"
              >
                <div>
                  <div className="p-9">
                    <h1 className="font-semibold text-[#E4911F] mb-4 hover:text-black text-lg cursor-pointer">
                      {items.title}
                    </h1>
                    <div className="flex items-center mb-4">
                      <span className="text-xs text-black border-l-2 px-2">
                        بودجه {items.price} تومان
                      </span>
                      <span className="text-xs text-black mr-2">
                        زمان پیشنهادی {items.ownerId} روز
                      </span>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="bg-white/70 rounded-md cursor-pointer px-2 py-1">
                        <Toggle variant={"default"} asChild>
                          <Bookmark
                            className="text-black data-[state=on]:fill-red-500"
                            size={15}
                          />
                        </Toggle>
                      </div>
                      <div>
                        <span className="flex items-center gap-2 text-black text-xs ml-3">
                          امتیاز کارفرما
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-black text-sm mt-5 max-w-[900px] line-clamp-2  leading-8">
                        {items.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2.5 p-5">
                  <Button className="border-[#2DD6B8] bg-[#2dd6b73b] hover:border-[#2DD6B8] hover:bg-[#2DD6B8] text-[#2DD6B8] font-bold hover:text-white transition-colors text-xs">
                    مشاهده پروژه
                  </Button>
                  <Button className="border-[#4160F5] hover:bg-[#415ff5] bg-[#415ff52d] hover:border-[#4160F5] text-[#4160F5] font-bold text-xs hover:text-white transition-colors">
                    ثبت پیشنهاد پروژه
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center p-20 hover:shadow-md bg-slate-200 hover:shadow-blue-200 transition-shadow rounded">
              <div className="">
                <h1 className="font-semibold text-[#E4911F]  hover:text-black text-lg ">
                  پروژه‌ای یافت نشد
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
