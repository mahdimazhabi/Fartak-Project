import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <ul className="flex-col gap-2 py-4 lg:p-0 lg:flex lg:flex-row">
      <Link to="">
        <li className="w-full p-2 rounded dark:hover:bg-white/10 hover:bg-blue-700 hover:text-white lg:w-auto">
          خانه
        </li>
      </Link>
      <Link to="/Teaching">
        <li className="w-full p-2 rounded dark:hover:bg-white/10 hover:bg-blue-700 hover:text-white lg:w-auto">
          تدریس
        </li>
      </Link>
      <Link to="/Projects">
        <li className="w-full p-2 rounded dark:hover:bg-white/10 hover:bg-blue-700 hover:text-white lg:w-auto">
          پروژه ها
        </li>
      </Link>
      <Link to="/Courses">
        <li className="w-full p-2 rounded dark:hover:bg-white/10 hover:bg-blue-700 hover:text-white lg:w-auto">
          دوره ها
        </li>
      </Link>
      <li className="w-full p-2 rounded dark:hover:bg-white/10 hover:bg-blue-700 hover:text-white lg:w-auto">
        <Link to="/Blog">وبلاگ</Link>
      </li>
      <Link to="">
        <li className="w-full p-2 rounded dark:hover:bg-white/10 hover:bg-blue-700 hover:text-white lg:w-auto">
          درباره ما
        </li>
      </Link>
    </ul>
  );
};
export default MenuItems;
