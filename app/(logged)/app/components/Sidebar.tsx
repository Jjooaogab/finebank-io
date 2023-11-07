'use client'
import { Button } from "@/components/ui/button";
import ButtonsSidebar from "../Buttons";
import { LogOut, MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Sidebar() {
  return (
      <div className="flex flex-col items-center h-screen w-60 bg-zinc-900 text-zinc-200">
        <div className="mt-6 text-xl">
          <span className="font-bold">FINE</span>bank
          <span className="font-bold">.IO</span>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <ButtonsSidebar />
        </div>
        <div className="flex flex-col items-center gap-5 mt-16">
          <Button className="flex gap-3 justify-start w-44 bg-zinc-800 hover:bg-zinc-800/80">
            <LogOut />
            <span>Logout</span>
          </Button>
          <div className="border-zinc-800 border-t-[1px]  w-48 h-1"></div>
          <div className="flex items-center justify-center gap-2">
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/Jjooaogab.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h3 className="font-semibold">Tanzin Rahman</h3>
              <span className="font-thin text-sm cursor-pointer">View profile</span>
            </div>
            <MoreVertical className="cursor-pointer" />
          </div>
        </div>
      </div>
  );
}
