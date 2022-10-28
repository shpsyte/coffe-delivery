import { ReactNode } from "react";
import { Header } from "../../src/components/Header";

import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <div className="flex-1 w-full max-w-[1440px] px-40">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
