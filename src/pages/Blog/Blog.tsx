import { Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="p-6 lg:p-12">
        <Outlet />
      </div>
    </>
  );
};

export default Blog;
