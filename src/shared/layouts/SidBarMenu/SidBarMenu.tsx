import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import MenuItems from "../MenuItems/MenuItems";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
export const SidBarMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="border-none shadow-none">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Button className="flex w-1/2 mb-5 top-2 bg-inherit hover:bg-inherit">
              Logo
            </Button>
          </SheetTitle>
          <hr className="border border-zinc-700 " />
        </SheetHeader>
        <div className="mt-5 ">
          <Input
            icon={Search}
            rounded="md"
            className="w-[228px] h-[49px]"
            placeholder="دنبال چی میگردی؟"
          />
        </div>

        <MenuItems />
      </SheetContent>
    </Sheet>
  );
};
