import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { useDarkMode } from "@/shared/hook/useDarkMode";
import { useMediaQuery } from "usehooks-ts";
import { LogOut } from "lucide-react";
import { SidBarMenu } from "../SidBarMenu/SidBarMenu";
import MenuItems from "../MenuItems/MenuItems";
function Header() {
  const { toggle, isDarkMode } = useDarkMode();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width:428)");

  return (
    <header className="dark:bg-[#121e31] bg-slate-300">
      <nav className="flex items-center justify-between p-5">
        {(isMobile || isTablet) && <SidBarMenu />}

        <div className="flex items-center">
          {/* Logo */}
          <Button
            className="  hidden lg:block bg-inherit  ml-10 text-blue-500"
            rounded="none"
            shadow="none"
            size="default"
          >
            Logo
          </Button>
          <div className="lg:block hidden">
            <MenuItems />
          </div>
        </div>

        <div className="flex items-center lg:gap-8 gap-4">
          <div className="lg:block hidden">
            <Input
              icon={Search}
              rounded="md"
              className="w-[228px] h-[49px]"
              placeholder="دنبال چی میگردی؟"
            />
          </div>

          <Button
            className="border-none bg-inherit hover:bg-inherit "
            onClick={toggle}
            size={"icon"}
            shadow={"none"}
          >
            {isDarkMode ? <Sun /> : <Moon />}
          </Button>
          {isMobile ? (
            <Button
              className="border-none bg-inherit shadow-none hover:bg-inherit"
              size="icon"
              rounded={"md"}
              icon={LogOut}
            />
          ) : (
            <Button
              className=" border-none bg-inherit hover:bg-inherit  "
              icon={ShoppingBag}
              size={"icon"}
              shadow={"none"}
            />
          )}
          <Button
            className="border-none lg:block hidden py-3"
            shadow={isDarkMode ? "custom" : undefined}
            size="default"
            rounded={"md"}
          >
            ورود | عضویت
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
