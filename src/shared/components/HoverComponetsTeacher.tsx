import {
  BocKIcon,
  BocK2Icon,
  BackpackIcon,
  ExerciseIcon,
  ForeignlanguageIcon,
  GraduationcapIcon,
  ProgammerIcon,
  SchoolIcon,
  SkillIcon,
  SoftwareIcon,
  SongIcon,
  ThetestIcon,
} from "@/assets";

const HoverComponetsTeacher = () => {
  return (
    <section className="p-11 w-full  absolute top-[7rem] z-50">
      <div className="bg-[#FFFFFF] dark:bg-slate-800 p-4   rounded-lg z-50">
        <ul className="flex flex-col items-start space-y-4 w-full border-l-4 max-w-fit  ">
          <li className="flex text-xs items-center cursor-pointer text-black dark:text-white font-medium   dark:hover:bg-white/20 rounded hover:bg-black/20 transition-colors  px-3 ">
            <BocKIcon />
            <span>ابتدایی</span>
          </li>
          <li className="flex text-xs items-center cursor-pointer text-black dark:text-white font-medium  dark:hover:bg-white/20 rounded hover:bg-black/20 transition-colors  px-3  ">
            <SchoolIcon />
            <span>متوسطه اول</span>
          </li>
          <li className="flex text-xs items-center cursor-pointer text-black dark:text-white font-medium    dark:hover:bg-white/20 rounded hover:bg-black/20 transition-colors  px-3">
            <BackpackIcon />
            <span>متوسطه دوم</span>
          </li>
          <li className="flex text-xs items-center cursor-pointer text-black dark:text-white font-medium   dark:hover:bg-white/20 rounded hover:bg-black/20 transition-colors  px-3 ">
            <ForeignlanguageIcon />
            <span>زبان های خارجی</span>
          </li>
          <li className=" flex text-xs items-center cursor-pointer text-black dark:text-white font-medium   dark:hover:bg-white/20 rounded hover:bg-black/20 transition-colors  px-3 ">
            <GraduationcapIcon />
            <span>کنکور سراری</span>
          </li>
          <li className="flex text-xs items-center cursor-pointer text-black dark:text-white font-medium   dark:hover:bg-white/20 rounded hover:bg-black/20 transition-colors  px-3 ">
            <BocK2Icon />
            <span>دروس دانشگاهی</span>
          </li>
          <li className="flex text-xs items-center cursor-pointer text-black dark:text-white font-medium   dark:hover:bg-white/20 rounded hover:bg-black/20 transition-colors  px-3 ">
            <SoftwareIcon />
            <span>نرم افزار ها</span>
          </li>
          <li className="flex text-xs items-center cursor-pointer text-black dark:text-white font-medium   dark:hover:bg-white/20 rounded hover:bg-black/20 transition-colors  px-3 ">
            <ProgammerIcon />
            <span>برنامه نویسی</span>
          </li>
          <li className="flex text-xs items-center cursor-pointer text-black dark:text-white font-medium   dark:hover:bg-white/20 rounded hover:bg-black/20 transition-colors  px-3 ">
            <SongIcon />
            <span>موسیقی</span>
          </li>
          <li className="flex text-xs items-center cursor-pointer text-black dark:text-white font-medium   dark:hover:bg-white/20 rounded hover:bg-black/20 transition-colors  px-3 ">
            <ThetestIcon />
            <span>آزمون های خارجی</span>
          </li>
          <li className="flex text-xs items-center cursor-pointer text-black dark:text-white font-medium   dark:hover:bg-white/20 rounded hover:bg-black/20 transition-colors  px-3 ">
            <SkillIcon />
            <span>هنر و مهارت ها</span>
          </li>
          <li className=" flex text-xs items-center cursor-pointer text-black dark:text-white font-medium   dark:hover:bg-white/20 rounded hover:bg-black/20 transition-colors  px-3 ">
            <ExerciseIcon />
            <span>ورزش</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HoverComponetsTeacher;
