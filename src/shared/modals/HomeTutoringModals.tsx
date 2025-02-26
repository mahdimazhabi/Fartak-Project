import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogBody,
} from "@/components/ui/dialog";
import { ChevronLeft } from "lucide-react";

import { Link } from "react-router-dom";

const HomeTutoringModals = () => {
  const DataTitle = [
    { id: 1, title: "تهران" },
    { id: 2, title: "کرج" },
    { id: 3, title: "مشهد" },
    { id: 4, title: "اصفهان" },
    { id: 5, title: "شیراز" },
  ];
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>تدریس حضوری در منزل </DialogTitle>
      </DialogHeader>
      <DialogBody>
        <DialogDescription>
          <ul>
            {DataTitle.map((item) => (
              <Link to={""} key={item.id}>
                <li
                  className={`flex items-center py-4 justify-between border-b hover:text-amber-600 transtio duration-500 ${
                    item.id === 5 && "border-b-0"
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

export default HomeTutoringModals;
