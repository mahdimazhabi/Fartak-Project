import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { useDarkMode } from "@/shared/hook/useDarkMode";
import { useMediaQuery } from "usehooks-ts";
import { LogOut } from "lucide-react";
function Header() {
  const { toggle, isDarkMode } = useDarkMode();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header className="dark:bg-[#121e31] bg-slate-300">
      <nav className="flex items-center justify-between p-5">
        <div className="flex items-center">
          {/* Logo */}
          <Button
            className="bg-inherit ml-10 text-blue-500"
            rounded="none"
            shadow="none"
            size="default"
          >
            Logo
          </Button>

          <ul className="lg:flex hidden gap-8">
            <li>
              <Link to="">خانه</Link>
            </li>
            <li>
              <Link to="">اساتید</Link>
            </li>
            <li>
              <Link to="">پروژه ها</Link>
            </li>
            <li>
              <Link to="">دوره ها</Link>
            </li>
            <li>
              <Link to="">وبلاگ</Link>
            </li>
            <li>
              <Link to="">درباره ما</Link>
            </li>
          </ul>
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
              className="border-none bg-inherit hover:bg-inherit"
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
