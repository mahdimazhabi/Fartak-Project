import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import {
  FaDribbble,
  FaBehance,
  FaMedium,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="dark:bg-[#121e31] bg-slate-300 text-right  sm:px-6 lg:px-10 py-8 sm:py-12 mt-80 \">
      <div className="grid grid-cols-2 gap-8 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-12 ">
        {/* بخش تماس با ما */}
        <div>
          <Label className="text-[#3A86FF] text-base font-bold mb-4 block">
            فرتاک
          </Label>
          <ul className="text-[#77808B] font-medium text-base space-y-4  ">
            <li className="flex items-center gap-2">
              <MapPin className="text-[#3A86FF]" />
              آدرس
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-[#3A86FF]" />
              Fartak@hello.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-[#3A86FF]" />
              +98 923 4398549
            </li>
          </ul>
        </div>

        {/* بخش شبکه‌های اجتماعی */}
        <div>
          <Label className="text-[#3A86FF] text-base font-bold mb-4 block">
            شبکه‌های اجتماعی
          </Label>
          <ul className="text-[#77808B] font-medium text-base space-y-2">
            <Link to="#">
              <li className="flex items-center gap-2 hover:text-[#3A86FF] transition-colors mb-2">
                <FaDribbble className="text-[#3A86FF]" />
                دریبل
              </li>
            </Link>
            <Link to="#">
              <li className="flex items-center gap-2 hover:text-[#3A86FF] transition-colors mb-2">
                <FaBehance className="text-[#3A86FF]" />
                بیهنس
              </li>
            </Link>
            <Link to="#">
              <li className="flex items-center gap-2 hover:text-[#3A86FF] transition-colors mb-2">
                <FaMedium className="text-[#3A86FF]" />
                مدیوم
              </li>
            </Link>
            <Link to="#">
              <li className="flex items-center gap-2 hover:text-[#3A86FF] transition-colors mb-2">
                <FaInstagram className="text-[#3A86FF]" />
                اینستاگرام
              </li>
            </Link>
            <Link to="#">
              <li className="flex items-center gap-2 hover:text-[#3A86FF] transition-colors mb-2">
                <FaFacebook className="text-[#3A86FF]" />
                فیسبوک
              </li>
            </Link>
            <Link to="#">
              <li className="flex items-center gap-2 hover:text-[#3A86FF] transition-colors mb-2">
                <FaTwitter className="text-[#3A86FF]" />
                توییتر
              </li>
            </Link>
          </ul>
        </div>

        {/* بخش شرکت */}
        <div>
          <span className="text-[#3A86FF] text-base font-bold mb-4 block">
            شرکت
          </span>
          <ul className="text-[#77808B] font-medium text-base space-y-2">
            <Link to="#">
              <li className="hover:text-[#3A86FF] transition-colors mb-2">
                درباره ما
              </li>
            </Link>
            <Link to="#">
              <li className="hover:text-[#3A86FF] transition-colors mb-2">
                تیم
              </li>
            </Link>
            <Link to="#">
              <li className="hover:text-[#3A86FF] transition-colors mb-2">
                فرصت‌های شغلی
              </li>
            </Link>
            <Link to="#">
              <li className="hover:text-[#3A86FF] transition-colors mb-2">
                تماس با ما
              </li>
            </Link>
            <Link to="#">
              <li className="hover:text-[#3A86FF] transition-colors mb-2">
                سیاست‌های حریم خصوصی
              </li>
            </Link>
          </ul>
        </div>

        {/* بخش خدمات */}
        <div>
          <span className="text-[#3A86FF] text-base font-bold mb-4 block">
            خدمات
          </span>
          <ul className="text-[#77808B] font-medium text-base ">
            <Link to="#">
              <li className="hover:text-[#3A86FF] transition-colors mb-2">
                مشاوره
              </li>
            </Link>
            <Link to="#">
              <li className="hover:text-[#3A86FF] transition-colors mb-2">
                طراحی وب
              </li>
            </Link>
            <Link to="#">
              <li className="hover:text-[#3A86FF] transition-colors mb-2">
                بازاریابی دیجیتال
              </li>
            </Link>
            <Link to="#">
              <li className="hover:text-[#3A86FF] transition-colors mb-2">
                پشتیبانی
              </li>
            </Link>
            <Link to="#">
              <li className="hover:text-[#3A86FF] transition-colors mb-2">
                توسعه نرم‌افزار
              </li>
            </Link>
          </ul>
        </div>

        {/* بخش اخبار و اشتراک ایمیل */}
        <div className="col-span-2 p-2 lg:p-0 lg:col-span-1 ">
          <span className="text-[#3A86FF] text-base font-bold mb-4 block">
            اخبار
          </span>
          <div>
            <Label className="block text-[#77808B] text-base font-medium mb-2">
              ایمیل شما
            </Label>
            <Input
              type="email"
              rounded={"md"}
              placeholder="ایمیل خود را وارد کنید"
              className="text-[#77808B] font-medium placeholder:text-[#77808B] placeholder:font-medium border-[#76AEFF] mt-4"
            />
          </div>
          <Button className="mt-4 Lg:px-12 py-7 w-full rounded-lg bg-[#3A86FF] text-white border-none hover:bg-[#3563C2] transition-colors">
            ارسال
          </Button>
        </div>
      </div>

      <div className="mt-12 text-center text-[#77808B] text-sm">
        © ۱۴۰۳ فرتاک. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
