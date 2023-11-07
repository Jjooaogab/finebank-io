import ButtonType from "@/@types/ButtonType";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

export default function ButtonSidebar({ text, icon: Icon, onClick, ...rest }: ButtonType) {
  return (
    <div className="w-44">
      <Button className={twMerge('flex items-center justify-start gap-2 transition hover:bg-teal-600 w-full', rest.className)} onClick={onClick}>
        <Icon size="22" />
        <span className="text-sm">{text}</span>
      </Button>
    </div>
  );
}
