"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-black group-[.toaster]:border-none group-[.toaster]:rounded-lg group-[.toaster]:p-6 group-[.toaster]:text-base group-[.toaster]:shadow-2xl group-[.toaster]:h-20",
          description:
            "group-[.toast]:text-gray-600 group-[.toast]:text-sm group-[.toast]:leading-5",
          actionButton:
            "group-[.toast]:bg-black group-[.toast]:text-white group-[.toast]:rounded-md group-[.toast]:px-3 group-[.toast]:py-1 group-[.toast]:text-sm hover:group-[.toast]:bg-gray-800",
          cancelButton:
            "group-[.toast]:bg-gray-300 group-[.toast]:text-gray-700 group-[.toast]:rounded-md group-[.toast]:px-3 group-[.toast]:py-1 group-[.toast]:text-sm hover:group-[.toast]:bg-gray-400",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
