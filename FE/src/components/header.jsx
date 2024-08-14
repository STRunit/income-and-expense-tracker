import Image from "next/image";
import { LeadingIcon } from "./icon/leadingIcon";
import Logo from "./icon/logo";
import { Button } from "./ui/button";
import Avatar from "../components/icon/avatar.jpg";

export const Header = () => {
  return (
    <div className="flex px-[120px] w-full h-fit justify-between py-4 bg-white">
      <div className="flex items-center gap-6">
        <Logo textShow={false} />
        <span>Dashboard</span>
        <span>Records</span>
      </div>
      <div className="flex items-center gap-6">
        <Button className="bg-[#0166FF] justify-center items-center rounded-[20px] flex gap-1 h-8">
          <LeadingIcon />
          Record
        </Button>
        <Image className="rounded-full" src={Avatar} width={40} height={40} />
      </div>
    </div>
  );
};
