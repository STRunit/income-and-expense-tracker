import Logo from "@/components/icon/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Form = ({
  header,
  paragraph,
  buttonLabel,
  accountStatus,
  loginOrSignUp,
  Input,
}) => {
  return (
    <div className="flex flex-col items-center gap-10 w-fit h-fit">
      <Logo />
      <h1 className="text-2xl font-semibold">{header}</h1>
      <p className="text-base font-normal">{paragraph}</p>
      <div className="flex flex-col gap-4">
        {Input}
        <Button className="w-[384px] h-[48px] justify-center items-center gap-1 text-xl text-white bg-[#0166FF]">
          {buttonLabel}
        </Button>
      </div>
      <div className="flex gap-2">
        <p>{accountStatus}</p>
        <Link href="#" className="text-[#0166FF]">
          {loginOrSignUp}
        </Link>
      </div>
    </div>
  );
};

export default Form;