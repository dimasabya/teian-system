import { auth } from "@/auth";
import { getMyTeian } from "@/lib/teian/getMyTeian";
import { formatDate } from "@/lib/utils/formatDate";
import { Search } from "lucide-react";
import Link from "next/link";
import { getProgress } from "./components/getProgress";
import CardTeian from "./components/CardTeian";

export default async function TeianPage() {
  const session = await auth();

  const teians = await getMyTeian(session?.user?.id!);

  return (
    <div className="mb-20">
      <div className="relative">
        <input
          type="text"
          placeholder="Cari teian..."
          className="border w-full p-2 rounded-lg bg-[#ffffff] border-[#e4e7ea] pl-10"
        />
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2"
          size={19}
        />
      </div>
      <div className="flex gap-2 justify-start items-center my-4 text-sm">
        <p className="border border-[#e4e7ea] rounded-2xl py-1 px-3 bg-[#e7e8ea]">
          All
        </p>
        <p className="border border-[#e4e7ea] rounded-2xl py-1 px-3 bg-[#e7e8ea]">
          Pending
        </p>
        <p className="border border-[#e4e7ea] rounded-2xl py-1 px-3 bg-[#e7e8ea]">
          Approved
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {teians.length > 0 ? (
          teians.map((teian) => {
            const progress = getProgress(teian.status);
            return (
              <CardTeian teian={teian} progress={progress} key={teian.id} />
              // <Link
              //   href={`/employee/details-teian/${teian.id}`}
              //   className={`border border-[#e4e7ea] p-4 rounded-xl flex gap-2 flex-col bg-[#ffffff]`}
              //   key={teian.id}
              // >
              //   <div className="flex justify-between text-xs">
              //     <p>{teian.teianNumber}</p>
              //     <span
              //       className={`border px-2 rounded-lg text-s flex justify-center items-center ${progress.color} text-white`}
              //     >
              //       {teian.status}
              //     </span>
              //   </div>
              //   <div className="">
              //     <h2 className="font-semibold">{teian.title}</h2>
              //     <span className="text-xs">{formatDate(teian.createdAt)}</span>
              //   </div>
              //   <div className="mt-3">
              //     <div className="flex justify-between text-xs mb-1">
              //       <span>{progress.label}</span>
              //       <span>{progress.percent}%</span>
              //     </div>

              //     {/* Background */}
              //     <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
              //       {/* Progress */}
              //       <div
              //         className={`h-full rounded-full ${progress.color} transition-all duration-500`}
              //         style={{
              //           width: `${progress.percent}%`,
              //         }}
              //       />
              //     </div>
              //   </div>
              // </Link>
            );
          })
        ) : (
          <span>No teian</span>
        )}
      </div>
    </div>
  );
}
