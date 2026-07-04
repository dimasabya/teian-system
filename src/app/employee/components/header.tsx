import { logoutAction } from "@/app/dashboard/action";
import InitialName from "./initialName";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between gap-4">
      <div className="flex-1 flex items-center gap-4 justify-between">
        <div className="">
          <h1 className="inline-block text-xl font-bold">TEIAN PORTAL</h1>
        </div>
        <div className="">
          <button>
            <Search />
          </button>
        </div>
      </div>
      <InitialName name="Dimas Abdul Yasir" className="h-10 w-10" />
    </div>
  );
}
