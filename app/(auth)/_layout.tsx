import React from "react";
import { MdKeyboardCommandKey } from "react-icons/md";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-full w-full lg:h-[90%] lg:w-[90%] flex lg:border lg:border-black lg:rounded-[12px]">
        <div className="hidden lg:flex flex-col justify-between h-full w-1/2 bg-primary rounded-tl-[12px] rounded-bl-[12px] p-10">
          {/* // ! logo container goes here . . . */}
          <div className="flex items-center gap-6">
            <MdKeyboardCommandKey className="h-[50px] w-[50px] text-white" />
            <span className="font-semibold text-xl lg:text-2xl xl:text-3xl text-white">
              Adarsh G S
            </span>
          </div>

          {/* // ! other contents goes here . . . */}
          <div className="text-white font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quia accusantium praesentium dicta vel delectus expedita labore quis
            veniam quos!
          </div>
        </div>
        <div className="h-full w-full lg:w-1/2 bg-white flex flex-col lg:py-20 items-center justify-center px-3 lg:px-12 rounded-[12px]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
