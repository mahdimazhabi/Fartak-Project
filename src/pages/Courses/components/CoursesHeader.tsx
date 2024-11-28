import { BookOpenCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderItems {
  id: number;
  title: string;
}

const CoursesHeader = () => {
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
    <nav>
      <div className="flex border-2 border-[#E7E7E7] p-4">
        <span className="flex border-l-2 border-[#E7E7E7] text-[#929292] dark:text-white  gap-4 pl-7">
          <BookOpenCheck />
          همه دورس
        </span>

        <ul className="flex gap-6">
          {dataHeader.map((item) => (
            <li key={item.id} className=" text-[#929292] dark:text-white pr-7">
              <Link to={""}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CoursesHeader;
