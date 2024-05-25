"use client";

import { Button } from "@/components/ui/button";
import AuthLayout from "../_layout";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Login() {
  return (
    <AuthLayout>
      <form>
        {/* // ! header goes here . . . */}
        <div className="flex flex-col space-y-4 items-center mb-8">
          <h3 className="text-black font-semibold text-2xl lg:text-3xl">
            Create an account
          </h3>
          <p className="text-gray-500/90 text-[17px] font-medium">
            Enter your email below to create your account
          </p>
        </div>

        <Input
          type="email"
          placeholder="Email"
          className="px-4 py-6 w-[500px] placeholder:text-[15px] placeholder:font-medium"
        />
        <Button className="w-[500px] mt-2 p-6 text-[15px] font-medium">
          Sign In with Email
        </Button>

        {/* // ! separator goes here . . . */}
        <div className="flex flex-row items-center justify-center my-6">
          <Separator className="w-[150px]" />
          <p className="text-[15px] text-gray-500/90 font-medium mx-3">
            {"or continue with".toUpperCase()}
          </p>
          <Separator className="w-[150px]" />
        </div>

        {/* // ! oAuth button goes here */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-[200pxk] lg:w-[500px] gap-3">
          <Button className="bg-white hover:bg-gray-50 border border-black w-full p-6 text-[15px] font-medium">
            <p className="text-black text-[15px] font-medium flex items-center gap-3">
              <FaGoogle />
              Google
            </p>
          </Button>
          <Button className="w-full flex items-center gap-3 p-6 text-[15px] font-medium">
            <FaGithub className="w-[16px] h-[16px]" />
            Github
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;
