import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  const teian = await prisma.teian.count();

  console.log(teian);

  return (
    <div className="">
      <h1>Dashboard</h1>
      <div className="flex flex-wrap justify-between gap-4 mt-4">
        <div className="border-2 border-border shadow-xl shadow-b-border bg-secondary rounded-xl p-4 flex-1">
          <div className="flex justify-between gap-2 text-sm">
            <span>🟡</span>
            <p>0%</p>
          </div>
          <p className="text-xs inline-block">Total Teian</p>
          <p className="text-3xl">{teian}</p>
        </div>
        <div className="border-2 border-border shadow-xl shadow-b-border bg-secondary rounded-xl p-4 flex-1">
          <div className="flex justify-between gap-2">
            <span>🟡</span>
            <p>0%</p>
          </div>
          <p className="text-xs inline-block">New This Month</p>
          <p className="text-3xl">{teian}</p>
        </div>
        <div className="border-2 border-border shadow-xl shadow-b-border bg-secondary rounded-xl p-4 flex-1">
          <div className="flex justify-between gap-2">
            <span>🟡</span>
            <p>0%</p>
          </div>
          <p className="text-xs inline-block">Approved</p>
          <p className="text-3xl">{teian}</p>
        </div>
        <div className="border-2 border-border shadow-xl shadow-b-border bg-secondary rounded-xl p-4 flex-1">
          <div className="flex justify-between gap-2">
            <span>🟡</span>
            <p>0%</p>
          </div>
          <p className="text-xs inline-block">In Progress</p>
          <p className="text-3xl">{teian}</p>
        </div>
        <div className="border-2 border-border shadow-xl shadow-b-border bg-secondary rounded-xl p-4 flex-1">
          <div className="flex justify-between gap-2">
            <span>🟡</span>
            <p>0%</p>
          </div>
          <p className="text-xs inline-block">Total Cost Saving</p>
          <p className="text-3xl">{teian}</p>
        </div>
      </div>
      <div className="border-2 border-border shadow-xl shadow-b-border bg-secondary rounded-xl p-4">
        <h1>pfsdfhndhsfio dhfoid sh</h1>
      </div>
    </div>
  );
}
