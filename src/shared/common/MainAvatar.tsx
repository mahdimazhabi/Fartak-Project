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
    <Avatar className={cn("w-10 h-10 border p-2 ", className)}>
      <AvatarImage src={src} alt={name} title={name} />
      <AvatarFallback>
        <UserRound className="w-full h-full " />
      </AvatarFallback>
    </Avatar>
  );
};

export default MainAvatar;
