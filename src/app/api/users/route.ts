import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      departement: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(users);
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const user = await prisma.user.create({
    data: {
      nik: body.nik,
      name: body.name,
      email: body.email,
      password: hashedPassword,
      role: body.role,
      departementId: body.departementId || null,
    },
  });

  return NextResponse.json(user);
}
