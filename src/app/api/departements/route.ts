import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const departements = await prisma.departement.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return NextResponse.json(departements);
}

export async function POST(req: Request) {
  const body = await req.json();

  const departement = await prisma.departement.create({
    data: {
      name: body.name,
    },
  });

  return NextResponse.json(departement);
}
