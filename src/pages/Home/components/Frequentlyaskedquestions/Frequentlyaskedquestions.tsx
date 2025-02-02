import TittleSection from "@/shared/components/TittleSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Frequentlyaskedquestions = () => {
  return (
    <section className="flex flex-col gap-10 px-5 py-48 lg:px-20 md:px-10">
      <div>
        <TittleSection
          title="سوالات متداول"
          color="bg-green-800"
          mode={false}
          titleCourse=""
        />
      </div>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>فراتک چیست؟</AccordionTrigger>
            <AccordionContent>
              فراتک یک شرکت فناوری است که به ایجاد راه‌حل‌های نوین در صنعت
              فناوری اطلاعات پرداخته است.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="item-3">
            <AccordionTrigger>
              خدمات فراتک شامل چه مواردی می‌شود؟
            </AccordionTrigger>
            <AccordionContent>
              خدمات فراتک شامل مشاوره فناوری اطلاعات، طراحی و پیاده‌سازی
              سیستم‌های نرم‌افزاری، و آموزش‌های تخصصی می‌باشد.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2" className="mt-4">
            <AccordionTrigger>
              چگونه می‌توانم در فراتک استخدام شوم؟
            </AccordionTrigger>
            <AccordionContent>
              برای استخدام در فراتک، می‌توانید از طریق وب‌سایت رسمی ما و قسمت
              «فرصت‌های شغلی» درخواست خود را ارسال کنید.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Frequentlyaskedquestions;
