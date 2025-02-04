import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <ul className="flex-col gap-2  lg:p-0 lg:flex lg:flex-row">
      <Link to="">
        <li className="w-full px-1 py-2 text-xs rounded dark:hover:bg-white/10 hover:bg-blue-700 hover:text-white lg:w-auto  transition-colors ">
          خانه
        </li>
      </Link>
      <Link to="/teaching">
        <li className="w-full px-1 py-2 text-xs rounded dark:hover:bg-white/10 hover:bg-blue-700 hover:text-white lg:w-auto  transition-colors ">
          تدریس
        </li>
      </Link>
      <Link to="/projects">
        <li className="w-full px-1 py-2 text-xs rounded dark:hover:bg-white/10 hover:bg-blue-700 hover:text-white lg:w-auto  transition-colors ">
          پروژه ها
        </li>
      </Link>
      <Link to="/courses">
        <li className="w-full px-1 py-2 text-xs rounded dark:hover:bg-white/10 hover:bg-blue-700 hover:text-white lg:w-auto  transition-colors ">
          دوره ها
        </li>
      </Link>
      <li className="w-full px-1 py-2 text-xs rounded dark:hover:bg-white/10 hover:bg-blue-700 hover:text-white lg:w-auto  transition-colors ">
        <Link to="/blog">وبلاگ</Link>
      </li>
      <Link to="">
        <li className="w-full px-1 py-2 text-xs rounded dark:hover:bg-white/10 hover:bg-blue-700 hover:text-white lg:w-auto  transition-colors ">
          درباره ما
        </li>
      </Link>
    </ul>
  );
};
export default MenuItems;
