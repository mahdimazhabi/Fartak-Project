import { CreditCard, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TypeCardProps {
  dataCardProject: {
    descreption: string;
    TitleProject: string;
    score: number;
    price: number;
    timeProject: string;
  };
}

const CardProjects = ({ dataCardProject }: TypeCardProps) => {
  const { descreption, score, price, TitleProject, timeProject } =
    dataCardProject;

  return (
    <div className="dark:bg-slate-800 bg-[#F4F4F4] rounded-2xl shadow-md h-full flex flex-col ">
      <div className="p-5 flex-grow">
        <span className="font-semibold text-black dark:text-white">
          {TitleProject}
        </span>
        <p className="text-[11px] mt-4 leading-loose text-gray-700 dark:text-gray-300 break-words line-clamp-2 min-h-[65px]">
          {descreption}
        </p>
      </div>

      <div className="flex items-center justify-between px-4 mb-4">
        <div className="flex items-center gap-2">
          <div>
            <span className="text-sm">{timeProject} روز</span>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="text-sm font-medium text-yellow-500">{score}</span>
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
        </div>
      </div>

      <hr className="border border-[#BBBBBB]" />

      <div className="flex items-end justify-around py-5 flex-grow">
        <div className="flex flex-col gap-y-2.5">
          <Button className="border-[#2DD6B8] bg-[#2dd6b73b] hover:border-[#2DD6B8] hover:bg-[#2DD6B8] text-[#2DD6B8] font-bold hover:text-white transition-colors text-xs">
            مشاهده پروژه
          </Button>
          <Button className="border-[#4160F5] hover:bg-[#415ff5] bg-[#415ff52d] hover:border-[#4160F5] text-[#4160F5] font-bold text-xs hover:text-white transition-colors">
            ثبت پیشنهاد پروژه
          </Button>
        </div>
        <Button className="bg-[#5171FC] px-4 py-5 text-white hover:bg-[#405ecf] flex items-center gap-2 rounded-lg">
          <CreditCard className="w-5 h-5" />
          {price} تومان
        </Button>
      </div>
    </div>
  );
};

export default CardProjects;
