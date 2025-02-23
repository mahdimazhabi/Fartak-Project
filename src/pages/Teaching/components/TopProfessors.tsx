import { useState } from "react";
import { GroupIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useTeacherTypeApi } from "@/api/teaching/TeacherTypeApi";
import { useTeacherDataApi } from "@/api/teaching/TeacherDataApi";

const TopProfessors = () => {
  const { data: categories } = useTeacherTypeApi();
  const { data: teacherData } = useTeacherDataApi();

  const [selectedCategory, setSelectedCategory] = useState("همه دروس");

  const safeTeacherData = Array.isArray(teacherData) ? teacherData : [];

  const filteredProfessors =
    selectedCategory === "همه دروس"
      ? safeTeacherData
      : safeTeacherData.filter(
          (prof) => prof.teacherTypeId === selectedCategory
        );

  return (
    <section>
      <div className="mt-20">
        <div className="text-center text-4xl font-bold">
          <h1>اساتید برتر فرتاک</h1>
        </div>

        <ul className="flex justify-center gap-7 my-16">
          <li
            className={`cursor-pointer pb-2 ${
              selectedCategory === "همه دروس"
                ? "border-b-[2px] border-[#2B4DE3] dark:border-white font-semibold"
                : "text-gray-600 dark:text-gray-400"
            }`}
            onClick={() => setSelectedCategory("همه دروس")}
          >
            همه دروس
          </li>
          {categories?.map((category) => (
            <li
              key={category.teacherTypeId}
              className={`cursor-pointer pb-2 ${
                selectedCategory === category.title
                  ? "border-b-[2px] border-[#2B4DE3] dark:border-white font-semibold"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => setSelectedCategory(category.title)}
            >
              {category.title}
            </li>
          ))}
        </ul>

        {/* نمایش اساتید */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 px-11 mt-16">
          {filteredProfessors.length > 0 ? (
            filteredProfessors.map((prof) => (
              <div
                key={prof.userId}
                className="bg-[#F7F7F7] dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center p-6 w-full"
              >
                <img
                  className="w-32 h-32 object-cover rounded-full"
                  src={prof.imageName}
                  alt={prof.teacherTypeId}
                />
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">{prof.teacherTypeId}</p>
                  <GroupIcon className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-center mt-2">
                  <p className="text-sm text-[#B0B0B0] flex items-center gap-1.5 dark:text-gray-300">
                    <Check size={17} />
                    {prof.description || "بدون توضیحات"}
                  </p>
                </div>
                <Button className="mt-3 w-full border-none rounded-full">
                  مشاهده رزومه
                </Button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              هیچ استادی یافت نشد.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopProfessors;
