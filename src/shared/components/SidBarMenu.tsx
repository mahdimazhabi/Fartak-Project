import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import MenuItems from "./MenuItems";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo/IMG_20250204_105629_308.jpg";
export const SidBarMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" className="border-none shadow-none">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="py-2">
          <SheetTitle>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-9 h-9  ml-10 text-blue-500 lg:block bg-inherit rounded-full"
              />
            </Link>
          </SheetTitle>
          <hr className="border border-zinc-700 " />
        </SheetHeader>
        <div className="my-5 ">
          <Input
            icon={Search}
            iconPosition="left"
            rounded="md"
            className="w-[228px] h-[40px] placeholder:text-xs"
            placeholder="دنبال چی میگردی؟"
          />
        </div>
        <MenuItems />
      </SheetContent>
    </Sheet>
  );
};
