import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <ul className=" py-4 lg:p-0 lg:flex  flex-col lg:flex-row gap-2">
      <li className=" hover:bg-white/10 rounded w-full lg:w-auto p-2">
        <Link to="">خانه</Link>
      </li>
      <li className=" hover:bg-white/10 rounded w-full lg:w-auto p-2">
        <Link to="">اساتید</Link>
      </li>
      <li className=" hover:bg-white/10 rounded w-full lg:w-auto p-2">
        <Link to="">پروژه ها</Link>
      </li>
      <li className=" hover:bg-white/10 rounded w-full lg:w-auto p-2">
        <Link to="/Courses">دوره ها</Link>
      </li>
      <li className=" hover:bg-white/10 rounded w-full lg:w-auto p-2">
        <Link to="">وبلاگ</Link>
      </li>
      <li className=" hover:bg-white/10 rounded w-full lg:w-auto p-2">
        <Link to="">درباره ما</Link>
      </li>
    </ul>
  );
};
export default MenuItems;
