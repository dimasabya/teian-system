import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  if (session.user.role !== "TQM") {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex min-h-dvh overflow-hidden">
      <aside className="w-64 shrink-0">
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-secondary p-4 text-black">
          <Header />
        </header>
        <main className="flex-1 py-4 px-6 overflow-y-auto bg-secondary text-black">
          {children}
        </main>
      </div>
    </div>
  );
}
