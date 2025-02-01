import { Users, CreditCard, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TypeCardProps {
  dataCard: {
    img: string;
    title: string;
    descreption: string;
    profile: string;
    NameTeacher: string;
    TitleCourses: string;
    score: number;
    price: number;
    people: string;
  };
}

const Card = ({ dataCard }: TypeCardProps) => {
  const {
    img,
    title,
    descreption,
    profile,
    NameTeacher,
    TitleCourses,
    score,
    price,
    people,
  } = dataCard;

  return (
    <div className="dark:bg-slate-800 bg-[#F4F4F4] rounded-2xl shadow-md">
      <img
        src={img}
        alt="Course Cover"
        className="object-cover w-full h-40 rounded-t-2xl"
      />
      <div className="p-5">
        <span className="font-semibold text-black dark:text-white">
          {title}
        </span>
        <p className="text-[11px] mt-4 leading-loose text-gray-700 dark:text-gray-300">
          {descreption}
        </p>
      </div>
      <div className="flex items-center justify-between px-4 mb-4">
        <div className="flex items-center gap-2">
          <img
            src={profile}
            alt="Instructor"
            className="w-10 rounded-full h-9"
          />
          <div className="flex flex-col">
            <span className="text-black text-[9px] dark:text-white">
              {NameTeacher}
            </span>
            <span className="text-[8px] text-gray-500 dark:text-gray-400">
              {TitleCourses}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="text-sm font-medium text-yellow-500">{score}</span>
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
        </div>
      </div>
      <hr className="border border-[#BBBBBB]" />
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2 text-[#626262] dark:text-white">
          <Users />
          <span className="text-sm">{people} نفر</span>
        </div>
        <Button className="bg-[#5171FC] px-4 py-5 text-white hover:bg-[#405ecf] flex items-center gap-2 rounded-lg">
          <CreditCard className="w-5 h-5" />
          {price} تومان
        </Button>
      </div>
    </div>
  );
};

export default Card;
