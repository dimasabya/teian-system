"use client";

import { formatDate } from "@/lib/utils/formatDate";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

type props = {
  teian: any;
  progress: any;
};

export default function CardTeian({ teian, progress }: props) {
  const [isSelected, setSelected] = useState<string | null>(null);

  return (
    <Link
      href={`/employee/details-teian/${teian.id}`}
      className={`border border-[#e4e7ea] p-4 rounded-xl flex gap-2 flex-col bg-[#ffffff] ${isSelected === teian.id && "bg-blue-400 text-white border-primary"}`}
      onClick={() => setSelected(teian.id)}
      key={teian.id}
    >
      <div className="flex justify-between text-xs">
        <p>{teian.teianNumber}</p>
        <span
          className={`border px-2 rounded-lg text-s flex justify-center items-center ${progress.color} text-white`}
        >
          {teian.status}
        </span>
      </div>
      <div className="">
        <h2 className="font-semibold">{teian.title}</h2>
        <span className="text-xs">{formatDate(teian.createdAt)}</span>
      </div>
      <div className="mt-3">
        <div className="flex justify-between text-xs mb-1">
          <span>{progress.label}</span>
          <span>{progress.percent}%</span>
        </div>

        {/* Background */}
        <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
          {/* Progress */}
          <div
            className={`h-full rounded-full ${progress.color} transition-all duration-500`}
            style={{
              width: `${progress.percent}%`,
            }}
          />
        </div>
      </div>
    </Link>
  );
}
