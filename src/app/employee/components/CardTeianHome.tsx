"use client";

import { formatDate } from "@/lib/utils/formatDate";
import Link from "next/link";
import { useState } from "react";

type Props = {
  teian: any;
};

export default function CardTeianHome({ teian }: Props) {
  const [isSelected, setSelected] = useState<string | null>(null);
  return (
    <Link
      href={`/employee/details-teian/${teian.id}`}
      className={`border border-border-line rounded-lg p-3 text-start text-xs bg-bg-border ${isSelected === teian.id && "bg-blue-400 text-white border-primary"}`}
      onClick={() => setSelected(teian.id)}
      key={teian.id}
    >
      <div className="flex justify-between items-start gap-2 mb-2">
        <p className="flex-1">{teian.title}</p>
        <span className="bg-indigo-300 text-center shrink-0 rounded-xl px-2 py-1 text-s text-primary">
          {teian.status}
        </span>
      </div>
      <p>{formatDate(teian.createdAt)}</p>
    </Link>
  );
}
