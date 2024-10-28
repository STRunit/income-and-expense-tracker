import Form from "@/components/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center w-1/2">
        <Form
          header="Create Geld account"
          paragraph="Sign up below to create your Wallet account"
          Input={
            <>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Password" />
              <Input placeholder="Re-Password" />
            </>
          }
          buttonLabel="Sign Up"
          accountStatus="Already have account?"
          loginOrSignUp="Log In"
          hrefValue="sign-in"
        />
      </div>
      <div className="w-1/2 bg-[#0166FF]"></div>
    </div>
  );
}
