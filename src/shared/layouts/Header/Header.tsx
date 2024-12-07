import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { useDarkMode } from "@/shared/hook/useDarkMode";
import { useMediaQuery } from "usehooks-ts";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { SidBarMenu } from "../SidBarMenu/SidBarMenu";
import MenuItems from "../MenuItems/MenuItems";
import { useState } from "react";
const Header: React.FC = () => {
  const { toggle, isDarkMode } = useDarkMode();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width:428)");
  const [scrollY, setscrollY] = useState(0);

  window.addEventListener("scroll", () => {
    setscrollY(window.scrollY);
  });

  return (
    <header className=" dark:bg-[#121e31] bg-slate-300 z-50 transition-opacity duration-300">
      <nav
        className={`flex justify-between items-center overflow-auto py-3 lg:p-5 w-full transition-all duration-300 transform fixed top-0 left-0 ${
          scrollY > 0 ? "dark:bg-[#121e31] bg-slate-300 " : ""
        }`}
        style={{ zIndex: 100 }}
      >
        {(isMobile || isTablet) && <SidBarMenu />}

        <div className="flex items-center">
          {/* Logo */}
          <Button
            className="hidden ml-10 text-blue-500 lg:block bg-inherit"
            rounded="none"
            shadow="none"
            size="default"
          >
            Logo
          </Button>
          <div className="hidden lg:block">
            <MenuItems />
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
          <div className="hidden lg:block">
            <Input
              icon={Search}
              iconPosition="left"
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
            <Link to={"/auth/Login"}>
              <Button
                className="border-none shadow-none bg-inherit hover:bg-inherit"
                size="icon"
                rounded={"md"}
                icon={LogOut}
              />
            </Link>
          ) : (
            <Button
              className="border-none bg-inherit hover:bg-inherit"
              icon={ShoppingBag}
              size={"icon"}
              shadow={"none"}
            />
          )}
          <Link to={"/auth/Login"}>
            <Button
              className="hidden py-3 border-none lg:block"
              shadow={isDarkMode ? "custom" : undefined}
              size="default"
              rounded={"md"}
            >
              ورود | عضویت
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
