import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(req: Request, { params }: Params) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      departement: true,
    },
  });

  return NextResponse.json(user);
}

export async function PUT(req: Request, { params }: Params) {
  const { id } = await params;
  const body = await req.json();

  const user = await prisma.user.update({
    where: { id },
    data: {
      nik: body.nik,
      name: body.name,
      email: body.email,
      role: body.role,
      departementId: body.departementId,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(req: Request, { params }: Params) {
  const { id } = await params;

  const user = await prisma.user.update({
    where: { id },
    data: {
      isActive: false,
    },
  });

  return NextResponse.json(user);
}
