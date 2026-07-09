import { auth } from "@/auth";
import { getDashboardStats } from "@/lib/teian/getDashboardStatus";
import { getMyTeian } from "@/lib/teian/getMyTeian";
import { formatDate } from "@/lib/utils/formatDate";
import {
  BadgeCheck,
  CirclePlus,
  CircleX,
  ReceiptText,
  SendHorizonal,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import CardTeianHome from "./components/CardTeianHome";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  const stats = await getDashboardStats(session?.user?.id!);

  const teianRecent = await getMyTeian(session?.user?.id!, { take: 6 });

  return (
    <div className="mb-20">
      <div className="my-2">
        <h1 className="text-sm">Selamat Datang,</h1>
        <h1 className="text-xl font-bold text-primary">Dimas Abdul Yasir</h1>
      </div>
      <Link
        href="/employee/create-teian"
        className="bg-primary w-full px-4 py-3 border border-border shadow-md shadow-primary-active rounded-lg text-white text-sm my-4 text-center flex justify-center items-center gap-2"
      >
        <CirclePlus /> <p className="inline text-sm">Buat Teian Baru</p>
      </Link>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-border-line rounded-lg p-2 text-start text-xs bg-bg-border">
          <p>My Drafts</p>
          <div className="flex justify-between items-center my-2">
            <p className="text-3xl font-semibold">{stats.draft}</p>
            <div className="bg-[#f3f4f6] p-1 rounded-lg">
              <ReceiptText className="text-[#5e7fa4]" size={20} />
            </div>
          </div>
        </div>
        <div className="border border-border-line rounded-lg p-2 text-start text-xs bg-bg-border">
          <p>Submitted</p>
          <div className="flex justify-between items-center my-2">
            <p className="text-3xl font-semibold">{stats.submitted}</p>
            <div className="bg-[#dae2ff] p-1 rounded-lg">
              <SendHorizonal className="text-[#00327d]" size={20} />
            </div>
          </div>
        </div>
        <div className="border border-border-line rounded-lg p-2 text-start text-xs bg-bg-border">
          <p>Approved</p>
          <div className="flex justify-between items-center my-2">
            <p className="text-3xl font-semibold text-green-500">
              {stats.approved}
            </p>
            <div className="bg-green-200 p-1 rounded-lg">
              <BadgeCheck className="text-green-500" size={20} />
            </div>
          </div>
        </div>
        <div className="border border-border-line rounded-lg p-2 text-start text-xs bg-bg-border">
          <p>Rejected</p>
          <div className="flex justify-between items-center my-2">
            <p className="text-3xl font-semibold text-red-500">
              {stats.rejected}
            </p>
            <div className="bg-red-200 p-1 rounded-lg">
              <CircleX className="text-red-500" size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="my-2">
        <div className="flex justify-between items-center my-2">
          <h2 className="font-semibold text-sm">Teian Baru</h2>
          <Link href="/employee/teian" className="text-xs text-primary">
            lihat semua
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {teianRecent.length > 0 ? (
            teianRecent.map((teian) => (
              <CardTeianHome teian={teian} key={teian.id} />
            ))
          ) : (
            <span>Belum ada teian</span>
          )}
        </div>
      </div>
    </div>
  );
}
