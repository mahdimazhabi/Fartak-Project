import { cn } from "@/shared/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";
import { ReactNode } from "react";
interface Props {
  className?: string;
  src?: string;
  fallback?: string | ReactNode;
  name: string;
  children?: ReactNode;
  modalPicClassName?: string;
}

const MainAvatar = ({ className, src, name }: Props) => {
  return (
    <Avatar className={cn("w-9 h-9 border p-2 ", className)}>
      <AvatarImage src={src} alt={name} title={name} />
      <AvatarFallback>
        <UserRound className="w-full h-full text-gray-500 dark:text-gray-400" />
      </AvatarFallback>
    </Avatar>
  );
};

export default MainAvatar;
