import { CreditCard, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TypeCardProps {
  dataCard: {
    descreption: string;
    TitleProject: string;
    score: number;
    price: number;
    timeProject: string;
  };
}

const CardProjects = ({ dataCard }: TypeCardProps) => {
  const { descreption, score, price, TitleProject, timeProject } = dataCard;

  return (
    <div className="dark:bg-slate-800 bg-[#F4F4F4] rounded-2xl shadow-md">
      <div className="p-5">
        <span className="font-semibold text-black dark:text-white">
          {TitleProject}
        </span>
        <p className="text-[11px] mt-4 leading-loose text-gray-700 dark:text-gray-300">
          {descreption}
        </p>
      </div>
      <div>
        <span>{timeProject}روز</span>
      </div>
      <div className="flex items-center justify-between px-4 mb-4">
        <div className="flex items-center gap-2"></div>
        <div className="flex gap-2">
          <span className="text-sm font-medium text-yellow-500">{score}</span>
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
        </div>
      </div>
      <hr className="border border-[#BBBBBB]" />
      <div className="flex items-center justify-between px-4 py-4">
        <Button className="bg-[#5171FC] px-4 py-5 text-white hover:bg-[#405ecf] flex items-center gap-2 rounded-lg">
          <CreditCard className="w-5 h-5" />
          {price} تومان
        </Button>
      </div>
    </div>
  );
};

export default CardProjects;
