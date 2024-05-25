import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-[90%] w-[90%] flex border border-black rounded-[12px]">
        <div className="hidden lg:flex h-full w-1/2 bg-black rounded-tl-[12px] rounded-bl-[12px]"></div>
        <div className="h-full w-full lg:w-1/2 bg-white flex items-center justify-center lg:px-12 rounded-[12px]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
