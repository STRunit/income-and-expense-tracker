import Form from "@/components/form";
import { Input } from "@/components/ui/input";
import { BasicLayout } from "@/layout/layout";
import Link from "next/link";

export default function SignIn() {
  return (
    <BasicLayout>
      <div className="flex items-center justify-center w-1/2">
        <Form
          header="Welcome Back"
          paragraph="Welcome back, Please enter your details"
          Input={
            <>
              <Input placeholder="Email" />
              <Input placeholder="Password" />
            </>
          }
          buttonLabel="Log In"
          accountStatus="Don’t have account?"
          loginOrSignUp="Sign Up"
        />
      </div>
      <div className="w-1/2 bg-[#0166FF]"></div>
    </BasicLayout>
  );
}