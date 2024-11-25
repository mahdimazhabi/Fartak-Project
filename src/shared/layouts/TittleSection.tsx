import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

interface TittleSectionProps {
  title: string;
  color: string;
  mode: boolean;
  titleCourse: string;
}

const TittleSection = ({
  title,
  color,
  mode,
  titleCourse,
}: TittleSectionProps) => {
  return (
    <div className=" lg:flex md:flex sm:flex justify-between items-center">
      <div
        className={`font-bold px-6 py-2 rounded-tl-[200px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[12px] text-lg ${color}`}
      >
        <h1 className="text-white ">{title}</h1>
      </div>
      {mode ? (
        <Link to={""}>
          <div className="flex items-center gap-2 mt-4 lg:mt-0 md:mt-0 sm:mt-0 text-green-600">
            <span>{titleCourse}</span>
            <MoveLeft size={"25px"} />
          </div>
        </Link>
      ) : (
        <Link to={""}>
          <div className=" hidden items-center gap-2 text-green-600">
            <span>مشاهده همه دوره‌ها</span>
            <MoveLeft size={"25px"} />
          </div>
        </Link>
      )}
    </div>
  );
};

export default TittleSection;
