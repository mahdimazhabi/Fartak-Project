import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogBody,
} from "@/components/ui/dialog";
import { ChevronLeft } from "lucide-react";

import { Link } from "react-router-dom";

const LevelSelectionModals = () => {
  const DataTitle = [
    { id: 1, title: "ابتدایی" },
    { id: 2, title: "متوسطه اول" },
    { id: 3, title: "متوسطه دوم" },
    { id: 4, title: "کنکور سراسری" },
    { id: 5, title: "زبان خارجی" },
    { id: 6, title: "دروس دانشگاهی" },
    { id: 7, title: "نرم افزار" },
    { id: 8, title: "برنامه نویسی" },
    { id: 9, title: "موسیقی" },
  ];
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>تدریس خصوصی آنلاین</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <DialogDescription>
          <ul>
            {DataTitle.map((item) => (
              <Link to={""} key={item.id}>
                <li
                  className={`flex items-center py-4 justify-between border-b hover:text-amber-600 transtio duration-500 ${
                    item.id === 9 && "border-b-0"
                  } `}
                >
                  {item.title}
                  <ChevronLeft size={15} />
                </li>
              </Link>
            ))}
          </ul>
        </DialogDescription>
      </DialogBody>
    </DialogContent>
  );
};

export default LevelSelectionModals;
