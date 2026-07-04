"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName === path;
  };
  return (
    <div className="bg-primary text-primary-foreground h-full p-4 flex flex-col">
      <h2 className="text-lg font-bold">TEIAN SYSTEM</h2>

      <div className="flex-1 flex flex-col justify-between mt-8">
        {/* Menu Atas */}
        <div className="space-y-2 flex flex-col gap-4">
          <Link
            href="/dashboard"
            className={`p-2 rounded-md ${isActive("/dashboard") ? "bg-primary-active text-white" : "hover:bg-primary-hover hover:text-white"}`}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/teian"
            className={`p-2 rounded-md ${isActive("/dashboard/teian") ? "bg-primary-active text-white" : "hover:bg-primary-hover hover:text-white"}`}
          >
            Teian Management
          </Link>
          <Link
            href="/dashboard/departements"
            className={`p-2 rounded-md ${isActive("/dashboard/departements") ? "bg-primary-active text-white" : "hover:bg-primary-hover hover:text-white"}`}
          >
            Departements
          </Link>
          <Link
            href="/dashboard/users"
            className={`p-2 rounded-md ${isActive("/dashboard/users") ? "bg-primary-active text-white" : "hover:bg-primary-hover hover:text-white"}`}
          >
            Employees
          </Link>
        </div>

        {/* Menu Bawah */}
        <div className="space-y-2 flex flex-col gap-4">
          <h1>System Logs</h1>
          <h1>Setting</h1>
          <h1>Support</h1>
        </div>
      </div>
    </div>
  );
}
