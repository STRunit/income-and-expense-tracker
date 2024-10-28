import Form from "@/components/form";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function SignIn() {

  const router = useRouter();
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const { email, password } = Object.fromEntries(formData);
    try {
      const response = await axiosInstance.post("/auth/signin", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data.user[0]));
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center w-1/2">
        <Form
          header="Welcome Back"
          paragraph="Welcome back, Please enter your details"
          Input={
            <>
              <Input placeholder="Email" />
              <Input placeholder="Password" type="password"/>
            </>
          }
          buttonLabel="Log In"
          accountStatus="Don’t have account?"
          loginOrSignUp="Sign Up"
          hrefValue="/sign-up"
          onSubmit={handleSubmit}
          ref={formRef}
        />
      </div>
      <div className="w-1/2 bg-[#0166FF]"></div>
    </div>
  );
}
