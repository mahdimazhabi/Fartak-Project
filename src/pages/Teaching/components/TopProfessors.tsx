import { useState } from "react";
import svg from "@/assets/Img/Group 76.svg";
import img from "@/assets/Img/image 11.png";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const professors = [
  {
    id: 1,
    name: "علی ذاکری",
    img,
    svg,
    expertise: ["تدریس آنلاین", "برنامه نویسی"],
  },
  { id: 2, name: "محمد رضایی", img, svg, expertise: ["تدریس حضوری", "گرافیک"] },
  { id: 3, name: "سارا محمدی", img, svg, expertise: ["تدریس آنلاین", "ریاضی"] },
  {
    id: 4,
    name: "زهرا اکبری",
    img,
    svg,
    expertise: ["تدریس حضوری", "زبان انگلیسی"],
  },
];

const categories = [
  "همه دروس",
  "برنامه نویسی",
  "گرافیک",
  "زبان انگلیسی",
  "ریاضی",
  "ادبیات",
  "آی تی",
  "موسیقی",
];

const TopProfessors = () => {
  const [selectedCategory, setSelectedCategory] = useState("همه دروس");

  const filteredProfessors =
    selectedCategory === "همه دروس"
      ? professors
      : professors.filter((prof) => prof.expertise.includes(selectedCategory));

  return (
    <section>
      <div className="mt-20">
        <div className="text-center text-4xl font-bold">
          <h1>اساتید برتر فرتاک</h1>
        </div>
        <ul className="flex justify-center gap-7 mt-5">
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer pb-2 ${
                selectedCategory === category
                  ? "border-b-[5px] border-[#2B4DE3] dark:border-white font-semibold"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-7 px-11 mt-16">
          {filteredProfessors.map((prof) => (
            <div
              key={prof.id}
              className="bg-[#F7F7F7] dark:bg-slate-800 rounded-xl shadow-md flex flex-col items-center p-6 w-full"
            >
              <img
                className="w-32 h-32 object-cover rounded-full"
                src={prof.img}
                alt={prof.name}
              />
              <div className="flex items-center gap-2 mt-2">
                <p className="text-lg font-medium">{prof.name}</p>
                <img className="w-6 h-6" src={prof.svg} alt="icon" />
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
              <Button className="mt-3 w-full border-none  rounded-full">
                مشاهده رزومه
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProfessors;
