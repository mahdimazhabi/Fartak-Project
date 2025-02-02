import { BookOpenCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HoverComponetsTeacher from "@/shared/components/HoverComponetsTeacher";

const CoursesHeadareTeaching = () => {
  const [items, setItems] = useState<number>();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(false);
  const dataHeader = [
    { id: 1, title: "برنامه نویسی ", url: "" },
    { id: 2, title: "گرافیک ", url: "" },
    { id: 3, title: "زبان انگلیسی ", url: "" },
    { id: 4, title: "ریاضی ", url: "" },
    { id: 5, title: " ادبیات", url: "" },
    { id: 6, title: " آی تی", url: "" },
    { id: 7, title: " موسیقی", url: "" },
  ];

  useEffect(() => {
    if (isHovered) {
      setIsComponentVisible(true);
    } else {
      setIsComponentVisible(false);
    }
  }, [isHovered]);

  const handleComponentMouseEnter = () => {
    setIsHovered(true);
  };

  const handleComponentMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className="lg:flex hidden flex-col sm:flex-row items-center lg:border-2 border-[#E7E7E7] px-4 py-3 ">
        <span
          className="flex items-center sm:border-b-0 sm:border-l-2  cursor-pointer border-[#E7E7E7] text-[#929292] dark:text-white gap-4 pb-3 sm:pb-0 sm:pl-7"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <BookOpenCheck />
          همه دروس
        </span>

        <ul className="flex flex-wrap justify-center gap-4 mt-3 sm:gap-6 sm:pr-7 sm:mt-0">
          {dataHeader.map((item) => (
            <Link to={item.url} key={item.id}>
              <li
                onClick={() => setItems(item.id)}
                className={`text-[#929292] dark:text-white font-bold px-2 sm:px-6 py-2 rounded-lg transition-all duration-500 ${
                  items === item.id
                    ? "bg-blue-700 text-white opacity-100 delay-100"
                    : "opacity-50"
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {isComponentVisible && (
        <div
          onMouseEnter={handleComponentMouseEnter}
          onMouseLeave={handleComponentMouseLeave}
        >
          <HoverComponetsTeacher />
        </div>
      )}
    </div>
  );
};

export default CoursesHeadareTeaching;
