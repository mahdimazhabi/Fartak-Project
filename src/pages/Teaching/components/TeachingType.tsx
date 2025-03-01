import teacherImg from "@/assets/Img/teaching-removebg-preview.png";
import { Button } from "@/components/ui/button";
import LevelSelectionModals from "@/shared/modals/LevelSelectionModals";
import { Dialog } from "@/components/ui/dialog";
import { FaChalkboardTeacher } from "react-icons/fa";
import "@/shared/CoustomStyle/imdex.css";
import { House } from "lucide-react";
import { useState } from "react";
import HomeTutoringModals from "@/shared/modals/HomeTutoringModals";
const TeachingType = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openHomeModal, setopenHomeModal] = useState(false);

  return (
    <section className="flex justify-center items-center py-16 ">
      <div className="container flex flex-col items-center text-center mx-auto ">
        <div className="flex flex-col lg:flex-row md:flex-row items-center gap-20">
          <div className="lg:order-1">
            <img
              src={teacherImg}
              alt="teacher"
              className="w-full bg-inherit  mx-auto flex-shrink-0"
            />
          </div>
          <div>
            <h1 className=" font-bold text-center mb-5 lg:text-3xl md:text-2xl text-xl">
              انتخاب سریع و آسان معلم خصوصی
            </h1>
            <span className="block lg:text-lg text-xs md:text-sm font-normal text-center">
              برای تدریس به دانش‌آموزان در سراسر ایران.
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:dark:bg-gray-700 md:dark:bg-gray-700 px-20 lg:shadow-xl md:shadow-xl lg:bg-slate-300 md:bg-slate-300  rounded-lg py-8 justify-center items-center gap-10 mt-20">
          <Dialog open={openAddModal} onOpenChange={setOpenAddModal}>
            <Button
              className="flex items-center  px-14 py-8 bg-gradient-to-r from-blue-500  border-none to-blue-700 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-500"
              onClick={() => setOpenAddModal(true)}
            >
              تدریس خصوصی آنلاین
              <FaChalkboardTeacher size={22} className="mr-2" />
            </Button>
            <LevelSelectionModals />
          </Dialog>

          <Dialog open={openHomeModal} onOpenChange={setopenHomeModal}>
            <Button
              className="flex items-center  px-14 py-8 bg-gradient-to-r from-green-500  border-none to-green-700 text-white rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 transition-colors duration-500"
              onClick={() => setopenHomeModal(true)}
            >
              تدریس حضوری در منزل
              <House size={22} className="mr-2" />
            </Button>
            <HomeTutoringModals />
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default TeachingType;
