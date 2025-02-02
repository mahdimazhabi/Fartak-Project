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
    <section className="p-11 w-full  absolute  top-[7rem]">
      <div className="bg-[#FFFFFF] dark:bg-slate-800 p-6   rounded-lg z-50">
        <ul className="flex flex-col items-start space-y-4 w-full border-l-4 max-w-fit pl-6 ">
          <li className="flex items-center cursor-pointer text-black dark:text-white font-medium text-base  ">
            <BocKIcon />
            <span>ابتدایی</span>
          </li>
          <li className="flex items-center cursor-pointer text-black dark:text-white font-medium text-base  ">
            <SchoolIcon />
            <span>متوسطه اول</span>
          </li>
          <li className="flex items-center cursor-pointer text-black dark:text-white font-medium text-base  ">
            <BackpackIcon />
            <span>متوسطه دوم</span>
          </li>
          <li className="relative left-2 flex items-center cursor-pointer text-black dark:text-white font-medium text-base  ">
            <GraduationcapIcon />
            <span>کنکور سراری</span>
          </li>
          <li className="flex items-center cursor-pointer text-black dark:text-white font-medium text-base  ">
            <ForeignlanguageIcon />
            <span>زبان های خارجی</span>
          </li>
          <li className="flex items-center cursor-pointer text-black dark:text-white font-medium text-base  ">
            <BocK2Icon />
            <span>دروس دانشگاهی</span>
          </li>
          <li className="flex items-center cursor-pointer text-black dark:text-white font-medium text-base  ">
            <SoftwareIcon />
            <span>نرم افزار ها</span>
          </li>
          <li className="flex items-center cursor-pointer text-black dark:text-white font-medium text-base  ">
            <ProgammerIcon />
            <span>برنامه نویسی</span>
          </li>
          <li className="flex items-center cursor-pointer text-black dark:text-white font-medium text-base  ">
            <SongIcon />
            <span>موسیقی</span>
          </li>
          <li className="flex items-center cursor-pointer text-black dark:text-white font-medium text-base  ">
            <ThetestIcon />
            <span>آزمون های خارجی</span>
          </li>
          <li className="flex items-center cursor-pointer text-black dark:text-white font-medium text-base  ">
            <SkillIcon />
            <span>هنر و مهارت ها</span>
          </li>
          <li className="relative left-2 flex items-center cursor-pointer text-black dark:text-white font-medium text-base  ">
            <ExerciseIcon />
            <span>ورزش</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HoverComponetsTeacher;
