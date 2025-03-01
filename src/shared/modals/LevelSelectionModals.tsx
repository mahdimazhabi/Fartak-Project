import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogBody,
} from "@/components/ui/dialog";
import { ChevronLeft } from "lucide-react";
import { useTeacherTypeApi } from "@/api/teaching/TeacherTypeApi";
import { useEffect, useState } from "react";
import { getDataParentTeacherType } from "../interfaces/TeacherIInterface";
import "@/shared/CoustomStyle/imdex.css";
import { useTypeIdStore } from "../store/TypeIdStore";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";

const LevelSelectionModals = () => {
  const { DataParentType, DataChildrenById, isLoadingChildrenById } =
    useTeacherTypeApi();
  const [childrenList, setChildrenList] = useState<getDataParentTeacherType[]>(
    []
  );
  const { setIdType, id } = useTypeIdStore();

  useEffect(() => {
    const fetch = async () => {
      if (id) {
        setChildrenList(DataChildrenById);
      }
    };
    fetch();
  }, [id, DataChildrenById]);

  return (
    <DialogContent>
      <DialogHeader onClick={() => setIdType(0)}>
        <DialogTitle>تدریس خصوصی آنلاین</DialogTitle>
      </DialogHeader>
      <DialogBody className="max-h-[600px] overflow-y-auto custom-scrollbar">
        <DialogDescription>
          <div
            className="py-4 border-b flex items-center gap-2 cursor-pointer"
            onClick={() => setIdType(0)}
          >
            <ArrowRight size={15} />
            <p className="text-amber-600 font-bold">بازگشت به صفحه اصلی</p>
          </div>
          <ul>
            {!id
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
                    onClick={() => setIdType(child.teacherTypeId)}
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

export default LevelSelectionModals;
