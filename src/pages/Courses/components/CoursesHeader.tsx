import { BookOpenCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface TypeProps {
  title: string;
  dataHeader: { id: number; title: string; url: string }[];
}

const CoursesHeader = ({ dataHeader, title }: TypeProps) => {
  const [items, setItems] = useState<number>();

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center lg:border-2 border-[#E7E7E7] px-4 py-3">
        <span className="flex items-center    sm:border-b-0 sm:border-l-2 border-[#E7E7E7] text-[#929292] dark:text-white gap-4 pb-3 sm:pb-0 sm:pl-7">
          <BookOpenCheck />
          {title}
        </span>
        <ul className="flex flex-wrap justify-center gap-4 mt-3 sm:gap-6 sm:pr-7 sm:mt-0">
          {dataHeader.map((item) => (
            <Link to={item.url}>
              <li
                key={item.id}
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
    </div>
  );
};

export default CoursesHeader;
