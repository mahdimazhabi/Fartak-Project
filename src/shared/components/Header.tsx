import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sun, Moon, ShoppingBag, LogOut } from "lucide-react";
import { useDarkMode } from "@/shared/hook/useDarkMode";
import { useMediaQuery } from "usehooks-ts";
import { Link } from "react-router-dom";
import { SidBarMenu } from "@/shared/components/SidBarMenu";
import MenuItems from "./MenuItems";
import { useState, useEffect } from "react";
import useDataUserById from "@/shared/action/GetDataUser";
import { Skeleton } from "@/components/ui/skeleton";
import { Typography } from "@/shared/common/Typography";
import MainAvatar from "@/shared/common/MainAvatar";
import useisPersian from "@/shared/hook/useispersian";

const Header: React.FC = () => {
  const { toggle, isDarkMode } = useDarkMode();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 428px)");
  const [scrollY, setscrollY] = useState(0);
  const token = localStorage.getItem("token");
  const { data } = useDataUserById();

  // useEffect(() => {
  //   if (data) {
  //     setDataUser(data);
  //   }
  // }, [data, setDataUser]);

  useEffect(() => {
    const handleScroll = () => {
      setscrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="dark:bg-[#F8F9FA] bg-slate-300 z-50 transition-opacity duration-300 mb-24">
      <nav
        className={`flex justify-between items-center overflow-auto py-3 lg:px-5 w-full transition-all duration-75 transform fixed top-0 left-0 z-50 ${
          scrollY > 0 ? "dark:bg-[#212529] bg-slate-300" : ""
        }`}
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

        <div className="flex items-center gap-4 lg:gap-4">
          <div className="hidden lg:block">
            <Input
              icon={Search}
              iconPosition="left"
              rounded="md"
              className="w-[228px] h-[40px] placeholder:text-xs"
              placeholder="دنبال چی میگردی؟"
            />
          </div>

          <Button
            className="border-none bg-inherit hover:bg-inherit"
            onClick={toggle}
            size={"icon"}
            shadow={"none"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
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
            <ShoppingBag size={18} />
          )}

          {token ? (
            <div>
              {data && data.users[0] && data.users[0].name ? (
                <div className="items-center hidden lg:flex gap-x-2">
                  <div
                    className={`flex flex-row gap-x-1 ${
                      useisPersian(data.users[0].name)
                        ? "text-right"
                        : "text-left"
                    }`}
                  >
                    <Typography
                      as="p"
                      weight="medium"
                      className={`text-xs ${
                        useisPersian(data.users[0].name)
                          ? "dark:text-white"
                          : "dark:text-gray-300"
                      }`}
                    >
                      {data.users[0].name}
                    </Typography>
                    <Typography
                      as="p"
                      weight="medium"
                      className={`text-xs ${
                        useisPersian(data.users[0].lastname)
                          ? "dark:text-white"
                          : "dark:text-gray-300"
                      }`}
                    >
                      {data.users[0].lastname}
                    </Typography>
                  </div>

                  <MainAvatar name={data.users[0].name} />
                </div>
              ) : (
                <div
                  className="items-center hidden space-x-4 lg:flex"
                  dir="ltr"
                >
                  <Skeleton className="w-12 h-12 bg-white rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[100px] bg-white" />
                    <Skeleton className="h-4 w-[150px] bg-white" />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to={"/auth/login"}>
              <Button
                className="hidden py-3 border-none lg:block"
                shadow={isDarkMode ? "custom" : undefined}
                size="default"
                rounded={"md"}
              >
                ورود | عضویت
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
