import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <ul className="flex-col gap-2 py-4 lg:p-0 lg:flex lg:flex-row">
      <li className="w-full p-2 rounded hover:bg-white/10 lg:w-auto">
        <Link to="">خانه</Link>
      </li>
      <li className="w-full p-2 rounded hover:bg-white/10 lg:w-auto">
        <Link to="">اساتید</Link>
      </li>
      <li className="w-full p-2 rounded hover:bg-white/10 lg:w-auto">
        <Link to="/Projects">پروژه ها</Link>
      </li>
      <li className="w-full p-2 rounded hover:bg-white/10 lg:w-auto">
        <Link to="/Courses">دوره ها</Link>
      </li>
      <li className="w-full p-2 rounded hover:bg-white/10 lg:w-auto">
        <Link to="/Blog">وبلاگ</Link>
      </li>
      <li className="w-full p-2 rounded hover:bg-white/10 lg:w-auto">
        <Link to="">درباره ما</Link>
      </li>
    </ul>
  );
};
export default MenuItems;
