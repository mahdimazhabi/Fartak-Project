import { BookOpenCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Img from "@/assets/Img/image 14.png";

interface HeaderItems {
  id: number;
  title: string;
}

const CoursesHeader = () => {
  const [items, setItems] = useState<number>();
  const dataHeader: HeaderItems[] = [
    { id: 1, title: "برنامه نویسی " },
    { id: 2, title: "گرافیک " },
    { id: 3, title: "زبان انگلیسی " },
    { id: 4, title: "ریاضی " },
    { id: 5, title: " ادبیات" },
    { id: 6, title: " آی تی" },
    { id: 7, title: " موسیقی" },
  ];

  return (
    <div>
      {/* هدر */}
      <div className="flex flex-col sm:flex-row items-center lg:border-2 border-[#E7E7E7] px-4 py-3">
        {/* عنوان همه دورس */}
        <span className="flex items-center    sm:border-b-0 sm:border-l-2 border-[#E7E7E7] text-[#929292] dark:text-white gap-4 pb-3 sm:pb-0 sm:pl-7">
          <BookOpenCheck />
          همه دورس
        </span>
        {/* لیست منو */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 sm:pr-7 mt-3 sm:mt-0">
          {dataHeader.map((item) => (
            <li
              key={item.id}
              onClick={() => setItems(item.id)}
              className={`text-[#929292] dark:text-white font-bold px-2 sm:px-6 py-2 rounded-lg transition-all duration-500 ${
                items === item.id
                  ? "bg-blue-700 text-white opacity-100 delay-100"
                  : "opacity-50"
              }`}
            >
              <Link to="">{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* تصویر */}
      <div className="mt-9 px-4 sm:px-11">
        <img
          src={Img}
          alt=""
          className="w-full h-auto max-h-[300px] sm:max-h-[515px] mx-auto rounded-lg border-2 border-blue-700"
        />
      </div>
    </div>
  );
};

export default CoursesHeader;
