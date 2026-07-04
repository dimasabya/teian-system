import { prisma } from "@/lib/prisma";

export async function generateTeianNumber() {
  const total = await prisma.teian.count();

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `TN-${year}${month}${day}-${String(total + 1).padStart(4, "0")}`;
}
