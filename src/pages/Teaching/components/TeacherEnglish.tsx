import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import svg from "@/assets/Img/Group 76.svg";
import img from "@/assets/Img/image 11.png";
import { ChevronDown } from "lucide-react";
const TeacherEnglish = () => {
  const professors = [
    {
      id: 1,
      name: "علی ذاکری",

      expertise: ["تدریس آنلاین", "برنامه نویسی"],
    },
    {
      id: 2,
      name: "محمد رضایی",
      expertise: ["تدریس حضوری", "گرافیک"],
    },
    {
      id: 3,
      name: "سارا محمدی",
      expertise: ["تدریس آنلاین", "ریاضی"],
    },
    {
      id: 4,
      name: "زهرا اکبری",
      expertise: ["تدریس حضوری", "زبان انگلیسی"],
    },
  ];

  return (
    <section className="mt-20">
      <h1 className="text-center text-4xl font-bold">اساتید زبان انگلیسی</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 px-11 mt-16">
        {professors.map((prof) => (
          <div
            key={prof.id}
            className="bg-[#F7F7F7] dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center p-6 w-full"
          >
            <img
              className="w-32 h-32 object-cover rounded-full"
              src={img}
              alt={`Profile picture of ${prof.name}`}
            />
            <div className="flex items-center gap-2 mt-2">
              <p className="text-lg font-medium">{prof.name}</p>
              <img className="w-6 h-6" src={svg} alt="Expertise icon" />
            </div>
            <div className="space-y-1 text-center mt-2">
              {prof.expertise.map((exp, index) => (
                <p
                  key={index}
                  className="text-sm text-[#B0B0B0] flex items-center gap-1.5 dark:text-gray-300"
                >
                  <Check size={17} />
                  {exp}
                </p>
              ))}
            </div>
            <Button className="mt-3 w-full border-none rounded-full bg-blue-500 text-white">
              مشاهده رزومه
            </Button>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-32">
        <Button
          className="bg-[#96A9FF5E] dark:bg-[#1D40D7] dark:text-white border-[#1D40D7] bottom-1  text-[#1D40D7] rounded-md p-6 hover:text-white"
          icon={ChevronDown}
          size={"md"}
        >
          موارد بیشتر
        </Button>
      </div>
    </section>
  );
};

export default TeacherEnglish;
