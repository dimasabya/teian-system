"use client";

import { Bell, CirclePlus, House, NotebookTabs, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Bottom() {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName === path;
  };
  return (
    <div className="bg-mobile-primary text-black flex fixed left-0 bottom-0 right-0 border-t-2 border-secondary z-20">
      <div className="grid grid-cols-5 items-center w-full p-2 relative">
        {/* Menu Atas */}
        <Link
          href="/employee"
          className={`p-2 rounded-md ${isActive("/employee") ? "bg-primary-active text-white" : "hover:bg-primary-hover hover:text-white"}`}
        >
          <div className="text-xs text-center place-items-center w-full">
            <House />
            <p>Home</p>
          </div>
        </Link>
        <Link
          href="/employee/teian"
          className={`p-2 rounded-md ${isActive("/employee/teian") ? "bg-primary-active text-white" : "hover:bg-primary-hover hover:text-white"}`}
        >
          <div className="text-xs text-center place-items-center w-full">
            <NotebookTabs />
            <p className="mt-1">My Teian</p>
          </div>
        </Link>
        <div className=""></div>
        <Link
          href="/employee/create-teian"
          className={`border border-secondary p-2 rounded-full bg-primary text-white absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 flex justify-center items-center ${isActive("/dashboard/teian") ? "bg-primary-active " : "hover:bg-primary-hover hover:text-white"}`}
        >
          <div className="text-xs text-center place-items-center w-full">
            <CirclePlus />
          </div>
        </Link>
        <Link
          href="/employee/alert"
          className={`p-2 rounded-md ${isActive("/employee/alert") ? "bg-primary-active text-white" : "hover:bg-primary-hover hover:text-white"}`}
        >
          <div className="text-xs text-center place-items-center w-full">
            <Bell />
            <p>Alert</p>
          </div>
        </Link>
        <Link
          href="/employee/profile"
          className={`p-2 rounded-md ${isActive("/employee/profile") ? "bg-primary-active text-white" : "hover:bg-primary-hover hover:text-white"}`}
        >
          <div className="text-xs text-center place-items-center w-full">
            <User />
            <p>Profile</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
