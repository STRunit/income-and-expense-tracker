import Image from "next/image";
import { LeadingIcon } from "./icon/leadingIcon";
import Logo from "./icon/logo";
import Avatar from "../components/icon/avatar.jpg";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "./ui/input";

export const Header = () => {
  return (
    <div className="flex px-[120px] w-full h-fit justify-between py-4 bg-white">
      <div className="flex items-center gap-6">
        <Logo textShow={false} />
        <span>Dashboard</span>
        <span>Records</span>
      </div>
      <div className="flex items-center gap-6">

        <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#0166FF] justify-center items-center rounded-[20px] flex gap-1 h-8">
          <LeadingIcon />
          Record
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Record</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          
        </div>
        <DialogFooter>
          <Button type="submit">Add Record</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
        <Image className="rounded-full" src={Avatar} width={40} height={40} />
      </div>
    </div>
  );
};
