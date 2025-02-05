import img from "@/assets/Img/image 19.png";
import "@/shared/CoustomStyle/imdex.css";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";
const TeachingFartak = () => {
  return (
    <section className="py-32 px-11 container">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
        <div className="flex justify-end order-1 w-full mb-8 md:w-1/2 md:order-2 md:mb-0">
          <img
            src={img}
            alt="Teaching in Fartak"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
        <div className="order-2 w-full text-center md:w-1/2 md:text-right md:order-1">
          <h1 className="text-black dark:text-white text-3xl font-extrabold mb-4">
            تدریس در فرتاک
          </h1>
          <p className="text-lg text-black dark:text-white font-medium mb-6 leading-10">
            برای همکاری آموزشی، تدریس و ارایه آموزش در فرتاک و پیوستن به{" "}
            <span className="block">
              آن به عنوان عضو هیات علمی، به لینک زیر مراجعه کنید.
            </span>
          </p>
          <Link to={"/"}>
            <button className="bn30 flex items-center gap-2   ">
              شروع تدریس
              <MoveLeft size={22} className=" relative top-0.5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeachingFartak;
