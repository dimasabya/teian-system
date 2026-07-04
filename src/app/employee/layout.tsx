import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Bottom from "./components/bottom";
import Header from "./components/header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "EMPLOYEE") {
    redirect("/login");
  }

  return (
    <div className="flex flex-col min-h-dvh overflow-hidden relative">
      <header className="bg-mobile-primary p-2 text-black border-b-2 border-secondary">
        <Header />
      </header>
      <div className="flex-1 flex flex-col">
        <main className="flex-1 py-4 px-6 overflow-y-auto bg-mobile-primary text-black">
          {children}
        </main>
      </div>
      <aside className="w-full">
        <Bottom />
      </aside>
    </div>
  );
}
