import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CardComponenent from "./components/cardComponent";

export default async function TeianPage() {
  const session = await auth();

  if (session?.user.role !== "TQM") {
    redirect("/api/auth/signin");
  }
  return (
    <div className="">
      <h1>TEIAN</h1>
      <div className="flex flex-wrap justify-between gap-4 mt-4">
        <CardComponenent>
          <div className="flex justify-between gap-2 text-sm">
            <span>🟡</span>
            <p>0%</p>
          </div>
          <p className="text-xs inline-block">Total Teian</p>
          <p className="text-3xl">0</p>
        </CardComponenent>
        <CardComponenent>
          <div className="flex justify-between gap-2 text-sm">
            <span>🟡</span>
            <p>0%</p>
          </div>
          <p className="text-xs inline-block">Total Teian</p>
          <p className="text-3xl">0</p>
        </CardComponenent>
        <CardComponenent>
          <div className="flex justify-between gap-2 text-sm">
            <span>🟡</span>
            <p>0%</p>
          </div>
          <p className="text-xs inline-block">Total Teian</p>
          <p className="text-3xl">0</p>
        </CardComponenent>
        <CardComponenent>
          <div className="flex justify-between gap-2 text-sm">
            <span>🟡</span>
            <p>0%</p>
          </div>
          <p className="text-xs inline-block">Total Teian</p>
          <p className="text-3xl">0</p>
        </CardComponenent>
        <CardComponenent>
          <div className="flex justify-between gap-2 text-sm">
            <span>🟡</span>
            <p>0%</p>
          </div>
          <p className="text-xs inline-block">Total Teian</p>
          <p className="text-3xl">0</p>
        </CardComponenent>
      </div>
    </div>
  );
}
