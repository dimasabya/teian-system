import { prisma } from "@/lib/prisma";
import bycrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET() {
  const password = await bycrypt.hash("admin123", 10);

  const user = await prisma.user.create({
    data: {
      nik: "000001",
      name: "Admin",
      email: "admin@teian.com",
      password,
      role: "TQM",
      departementId: "a3526e5f-ea80-4728-972d-cbb8eac619cd",
    },
  });

  return NextResponse.json(user);
}
