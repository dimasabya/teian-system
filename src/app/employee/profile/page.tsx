import { auth } from "@/auth";
import InitialName from "../components/initialName";
import {
  Bell,
  ChevronRight,
  Info,
  Languages,
  LockKeyhole,
  LogOut,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { logoutAction } from "@/app/dashboard/action";

export default async function ProfilePage() {
  const session = await auth();
  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
    include: {
      departement: true,
    },
  });

  console.log(user);

  return (
    <div className="mb-20">
      <div className="flex flex-col justify-center items-center gap-2">
        <InitialName
          name={user?.name as string}
          className="w-20 h-20 text-5xl"
        />
        <button className="text-xs border px-2 py-1 rounded-lg bg-primary text-white border-border-line">
          Ubah foto profile
        </button>
        <p>{user?.name}</p>
        <p>{user?.position}</p>
      </div>
      <div className="border border-border rounded-xl p-4 bg-bg-border mt-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-indigo-400 font-medium text-sm">USER INFO</h2>
          <Info size={20} />
        </div>
        <hr />
        <div className="space-y-3">
          <div className="mt-2 space-y-1">
            <p className="text-xs">Departement</p>
            <p className="font-semibold text-sm">{user?.departement?.name}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs">Position</p>
            <p className="font-semibold text-sm">{user?.position}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs">Employer ID</p>
            <p className="font-semibold text-sm">{user?.nik}</p>
          </div>
        </div>
      </div>
      <div className="border border-border rounded-xl bg-bg-border mt-4 overflow-hidden">
        <div className="border-b p-4">
          <div className="grid grid-cols-3 gap-3 items-center justify-items-stretch">
            <div className="col-span-2 flex items-center gap-6">
              <LockKeyhole className="bg-secondary w-12 h-12 p-2 rounded-lg" />
              <h2 className="text-sm">Change Password</h2>
            </div>
            <ChevronRight className="justify-self-end" />
          </div>
        </div>
        <div className="border-b p-4">
          <div className="grid grid-cols-4 gap-3 items-center justify-items-stretch">
            <div className="col-span-3 flex items-center gap-6">
              <Bell className="w-12 h-12 bg-secondary rounded-lg p-2" />
              <h2 className="text-sm">Notification Settings</h2>
            </div>
            <ChevronRight className="justify-self-end" />
          </div>
        </div>
        <div className="border-b p-4">
          <div className="grid grid-cols-3 gap-3 items-center justify-items-stretch">
            <div className="col-span-2 flex items-center gap-6">
              <Languages className="w-12 h-12 p-2 rounded-lg bg-secondary" />
              <h2 className="text-sm">Language</h2>
            </div>
            <ChevronRight className="justify-self-end" />
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-3 items-center justify-items-stretch">
            <form
              action={logoutAction}
              className="col-span-2 flex items-center gap-6"
            >
              <LogOut className="w-12 h-12 bg-secondary rounded-lg p-2" />
              <button className="col-span-2 text-sm bg-red-500 w-full text-start">
                Logout
              </button>
            </form>
            <ChevronRight className="justify-self-end" />
          </div>
        </div>
      </div>
      <div className="w-full text-center text-gray-400 text-sm my-6">
        <span>Version 1.0.0</span>
      </div>
    </div>
  );
}
