import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogBody,
} from "@/components/ui/dialog";
import { ChevronLeft } from "lucide-react";
import { useTeacherTypeApi } from "@/api/teaching/TeacherTypeApi";
import { useTypeIdStore } from "../store/TypeIdStore";
import { useState, useEffect } from "react";
import { getDataParentTeacherType } from "../interfaces/TeacherIInterface";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
const HomeTutoringModals = () => {
  const { DataParentType, DataChildrenById, isLoadingChildrenById } =
    useTeacherTypeApi();
  const { id, setIdType } = useTypeIdStore();
  const [childrenList, setChildrenList] = useState<getDataParentTeacherType[]>(
    []
  );
  const [showCities, setShowCities] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setChildrenList(DataChildrenById);
      setShowCities(false);
    }
  }, [id, DataChildrenById]);

  const DataTitle = [
    { id: 1, title: "تهران" },
    { id: 2, title: "کرج" },
    { id: 3, title: "مشهد" },
    { id: 4, title: "اصفهان" },
    { id: 5, title: "شیراز" },
  ];

  const handleCityClick = () => {
    setShowCities(false);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>تدریس حضوری در منزل </DialogTitle>
      </DialogHeader>
      <DialogBody>
        <DialogDescription>
          <div
            className="py-4 border-b flex items-center gap-2 cursor-pointer"
            onClick={() => setIdType(0)}
          >
            <ArrowRight size={15} />
            <p className="text-amber-600 font-bold">بازگشت به صفحه اصلی</p>
          </div>
          <ul>
            {showCities
              ? DataTitle.map((city) => (
                  <li
                    onClick={handleCityClick}
                    key={city.id}
                    className="flex items-center  cursor-pointer py-4 justify-between border-b hover:text-amber-600 transition duration-500"
                  >
                    {city.title}
                    <ChevronLeft size={15} />
                  </li>
                ))
              : !id
              ? DataParentType?.map((item, index) => (
                  <li
                    key={item.teacherTypeId}
                    className={`flex items-center py-4 justify-between ${
                      index === DataParentType.length - 1 ? "" : "border-b"
                    } hover:text-amber-600 transition duration-500 cursor-pointer`}
                    onClick={() => setIdType(item.teacherTypeId)}
                  >
                    {item.title}
                    <ChevronLeft size={15} />
                  </li>
                ))
              : isLoadingChildrenById
              ? Array.from({ length: 9 }).map((_, index) => (
                  <div
                    key={index}
                    className="space-y-2 py-4 justify-between border-b hover:text-amber-600"
                  >
                    <Skeleton className="h-2 w-[150px] bg-amber-600" />
                    <Skeleton className="h-2 w-[200px] bg-amber-600" />
                  </div>
                ))
              : childrenList?.map((child, index) => (
                  <li
                    key={child.teacherTypeId}
                    className={`flex items-center py-4 justify-between ${
                      index === childrenList.length - 1 ? "" : "border-b"
                    } hover:text-amber-600 transition duration-500 cursor-pointer`}
                    onClick={() => navigate(`/teaching/${child.teacherTypeId}`)}
                  >
                    {child.title}
                    <ChevronLeft size={15} />
                  </li>
                ))}
          </ul>
        </DialogDescription>
      </DialogBody>
    </DialogContent>
  );
};

export default HomeTutoringModals;
